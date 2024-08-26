import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
    const [posts, setPosts] = useState(
        [
            {
                id: 1,
                author: "Brenz",
                authorHandle: "Developer",
                title: "I am so tired of data",
                body: "Dead",
            },
            {
                id: 2,
                author: "Yuji",
                authorHandle: "Wuji",
                title: "Got Sukuna pummeled",
                body: "GGs",
            },
            {
                id: 3,
                author: "Anya",
                authorHandle: "Crybaby",
                title: "Anya likes peanuts",
                body: "I like peanuts and I don't like carrots, but I really like crispy bacon from bakeries.",
            },
            {
                id: 4,
                author: "Brenz",
                authorHandle: "Developer",
                title: "Yappathon is coming",
                body: "I'm not ready yet",
            },
        ]
    );

    const [name, setName] = useState("User");
 
    const handleDelete = (id) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    }

   

    useEffect(()=>{
        console.log('use effect ran');
    }, []);

    return ( 
        <div className="home">
            {/* <button onClick={handleClick}>Click me for a surprise!</button> */}
            {/* <button onClick={(e) => handleClickWithParam(name, e)}>Click me for another surprise!</button> */}
            <div className="flex-row">
                <PostList posts={posts} title="All Posts" handleDelete = {handleDelete}/>
                <button onClick={() => setName("Brenz")} className="change-name-button">Change Name</button>
                <p>Weclome {name}!</p>
            </div>
        </div>
     );
}
 
export default Home;