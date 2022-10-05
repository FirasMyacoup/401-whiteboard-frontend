import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useUserData } from "../Context/PostContext";

function AddPostForm () {
    const { user, clearUser, setIsAuth } = useAuth();
    const { addPost } = useUserData();
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={( e ) => addPost( e )}>
                    <div className="form-style">
                        <label>Title</label>
                        <input type="text" placeholder="Add Title" name="title" />
                    </div>
                    <div className="form-style">
                        <label>Content</label>
                        <textarea placeholder="Add Post content" name="content"></textarea>
                    </div>
                    <div className="form-style">
                        <input type="submit" />
                    </div>
                </form>
                <button className="signout" onClick={() => {
                    clearUser();
                    setIsAuth( false );
                }}>Sign out {user.username}</button>
            </div>
        </>
    );
}

export default AddPostForm;