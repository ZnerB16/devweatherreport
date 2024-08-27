const Create = () => {
    return ( 
        <div className="create">
            <h2>Add New Post</h2>
            <div className="form-div">
                <form className="create-form">
                    <label for="title">Title: </label><input name="title" className="form-title" type="text" />
                    <label for="body">Body: </label><textarea name="body" className="form-body" />

                </form>
            </div>
        </div>
     );
}
 
export default Create;