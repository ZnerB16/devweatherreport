import { useState, useEffect } from "react";

const useFetch = (url)=> {
    const [data, setData] = useState(null); // used for arrays of data to be rendered
    const [isPending, setIsPending] = useState(true); // check if fetching is pending
    const [error, setError] = useState(null); // error message

    // Fetch data from json-server before render
    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res =>{
                if(!res.ok){
                    throw Error("Failed to fetch the data");
                }
                return res.json(); // Parses response from server to a json format
            })
            .then((data) => {
                setError(null);
                setIsPending(false);
                setData(data); // Sets the parsed json format to the posts state
            }).catch(err => {
                if(err.name === "AbortError"){
                    console.log("Fetch aborted");
                } else{
                    setError(err.message);
                    setIsPending(false);
                }   
            });

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}
export default useFetch;