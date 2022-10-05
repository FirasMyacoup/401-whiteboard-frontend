import { useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { useUserData } from "../Context/PostContext";

function Post () {
    const { canDo } = useAuth();
    const { fetchData, deletePost, editPost, post, setEdit, edit } = useUserData();



    useEffect( () => {
        fetchData();
    } );
    return (
        <>
{post ? post.map( ( post, idx ) => {
    return (
    <div className="post" key={idx}>
    <div>
    <div className="card-body">
    <h1 className="card-title">{post.title}</h1>
    <h3> post by {post.user.username}</h3>
    <p className="card-text">{post.content}</p>
        </div>
            </div>
    {canDo( 'update', post.user_id ) && <button onClick={() => setEdit( true )}>Edit</button>}
                            <div>
{canDo( 'delete', post.user_id ) && <button onClick={() => deletePost( post.id )}>Delete</button>}
                            
{edit &&
<form onSubmit={( e ) => editPost( e, post.id )}>
        <h3>edit post</h3>
        <label htmlFor="title">New Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">New Content</label>
        <input type="text" name="content" id="content" />
        <input type="submit" value="submit" />
    </form>}
</div>
                        
        <div>
            {post.comments &&
                <h2>Comments</h2>
            }
            {post.comments && post.comments.map( ( comment, idx ) => {
                return (
                    <div className="card" key={idx}>
                        <div className="card-body">
                            <h3 className="card-title">comment by : {comment.user.username}</h3>
                            <p className="card-text">{comment.content}</p>
                        </div>
                    </div>
                );
            }
        )}
            <AddCommentForm postId={post.id} />
        </div>
    </div>
);
            } ) : <h1>loading</h1>}
        </>
    );
}
export default Post;