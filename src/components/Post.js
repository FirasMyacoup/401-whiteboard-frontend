import { useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import React from 'react';
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../context/PostContext";
import { Stack, HStack, VStack } from "@chakra-ui/react"

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
<Stack key={idx} className="post">

<HStack>
    <div className="can">
    {canDo( 'update', post.user_id ) && <button onClick={() => setEdit( true )}>Edit</button>}
    {canDo( 'delete', post.user_id ) && <button onClick={() => deletePost( post.id )}>Delete</button>}
    </div>
    {edit && <form className= "edit" onSubmit={( e ) => editPost( e, post.id )}>
        <input type="text" name="title" defaultValue={post.title} />
        <textarea name="content" defaultValue={post.content}></textarea>
        <input type="submit"  />
    </form>}
</HStack>
<h3>{post.title}</h3>
<p>{post.content}</p>
<h3> post by {post.user.username}</h3> 


<VStack>
{post.comments &&
    <h2>Comments</h2>
}
    {post.comments && post.comments.map( ( comment, idx ) => {
        return (
            <div key={idx} className="comment">
                <h3>comment by: {comment.user.username}</h3>
                <p>{comment.content}</p>
            </div>
        );
    } )}
    <AddCommentForm postId={post.id} />
    

</VStack>
</Stack>
);
} ) : <h2>Loading...</h2>}
</>
);
}
export default Post;