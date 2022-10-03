import axios from "axios";
import React from "react";
import cookies from "react-cookies";

function addPostForm (props){
    const handleAddPost = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'userID': cookies.load( 'user_id' ),
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/post`,
            post, {
                headers: {
                    'Authorization': `bearer ${cookies.load('token')}`
                }
            }
        ).then( () => {
            props.getData();
        } );
    };

              

    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handleAddPost}>
                    <div className="form-style">
                        <label>Title</label>
                        <input type="text" placeholder="Add your title" name="title" />
                    </div>
                    <div className="form-style">
                        <label>Content</label>
                        <textarea placeholder="Add some content" name="content"></textarea>
                    </div>
                    <div className="form-style">
                        <input type="submit" />
                    </div>
                </form>
                <button className="signout" onClick={() => {
                    cookies.remove('token');
                    cookies.remove('user_id');
                    cookies.remove('username');
                    cookies.remove('role');
                    window.location.href = '/'
                }}>Sign out {cookies.load('username')}</button>
            </div>
        </>
    );
}

export default addPostForm; 