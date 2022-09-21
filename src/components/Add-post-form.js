import axios from "axios";
import React from "react";


function AddPostForm (props) {
    const handlePost = async (event) => {
        e.preventDefault();
        const post = {
            'title': event.target.title.value,
            'content': event.target.content.value
        }
        await axios.post(`${process.env.REACT_APP_HEROKU_URL}`, post).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handlePost}>
                    <div className="form-control">
                        <label>Title</label>
                        <input type="text" placeholder="Add Title" name="title" />
                    </div>
                    <div className="form-control">
                        <label>info</label>
                        <textarea placeholder="Add info" name="info"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddPostForm;