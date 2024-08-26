const PostList = ({posts, title, handleDelete}) => {
    
    return (
        <div className="post-list">
            <h3 className="home-title">{title}</h3>
            {posts.map((post) => (
                    <div className="flex-column post-card" key={post.id}>
                        <div className="flex-row author-body-div">
                            <img src="images/user.png" alt="author-image" className ="author-image"/>
                            <div className="flex-column author-heading-handle">
                                <h3 className="author-heading">{post.author}</h3>
                                <h5 className="author-handle">{post.authorHandle}</h5>
                            </div>
                            <button className="delete-button" onClick={()=> handleDelete(post.id)}>Delete Post</button>
                        </div>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                    </div>
            ))}
    </div>
    );
}

export default PostList;