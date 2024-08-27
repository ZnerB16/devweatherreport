import PostList from './PostList';
import Loading from './Loading';
import useFetch from './hooks/UseFetch';

const Home = () => {
    
    const {data, isPending, error} = useFetch("http://localhost:8000/posts");

    // const handleDelete = (id) => {
    //     const newPosts = data.filter((post) => post.id !== id);
    //     setData(newPosts);
    // }
    

    return ( 
        <div className="home">
            {/* <button onClick={handleClick}>Click me for a surprise!</button> */}
            {/* <button onClick={(e) => handleClickWithParam(name, e)}>Click me for another surprise!</button> */}
            <div className="flex-row">
                {error && <h3 className="loading-error">Error: {error}</h3>}
                {isPending && <Loading error={error}/>}
                {data && <PostList posts={data} title="All Posts"/>}
            </div>
        </div>
     );
}
 
export default Home;