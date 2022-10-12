import axios from "axios";
import React from "react";
function addPostForm ( props ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,

            'content': e.target.content.value,
            'userId': props.userId
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/post`,post).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-style">
                        <label >Title</label>
                        <input type="text" placeholder="Add your title" name="title" />
                    </div>
                    <div className="form-style">
                        <label>Content</label>
                        <textarea placeholder="Add some content" name="content"></textarea>
                    </div>
                    <div className="form-style1">
                        <button>Submit</button>
                        </div>
                        </form>
            </div>
        </>
    );
}
export default addPostForm;