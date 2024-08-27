const Create = () => {
    return ( 
        <div className="create">
            <h2>Create New Post</h2>
            <div className="form-div">
                <form className="create-form">
                    <label htmlFor="title">Title: </label><input name="title" className="form-title" type="text" />
                    <label htmlFor="body">Body: </label><textarea name="body" className="form-body" />
                </form>
            </div>
        </div>
     );
}
 
export default Create;