import { useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../context/PostContext";
// import {
//  Stack,
//  HStack,
//  VStack,
//  Button,
//  Input,
//  Textarea,
//  Box,
// } from "@chakra-ui/react";


function Post() {
 const { canDo } = useAuth();
 const { fetchData, deletePost, editPost, post, setEdit, edit } = useUserData();

 useEffect(() => {
  fetchData();
 });
 return (
  <>
   {post ? (
    post.map((post, idx) => {
     return (
      <Stack key={idx} className="post" direction="column">
       <HStack>
        {canDo("update", post.user_id) && (
         <Button onClick={() => setEdit(true)}>Edit</Button>
        )}
        {canDo("delete", post.user_id) && (
         <Button onClick={() => deletePost(post.id)}>Delete</Button>
        )}
        {edit && (
         <form className="edit" onSubmit={(e) => editPost(e, post.id)}>
          <div className="exit">
           <button onClick={() => setEdit(false)}>X</button>
          </div>
          <Input type="text" name="title" defaultValue={post.title} />
          <Textarea name="content" defaultValue={post.content}></Textarea>

          <Input type="submit" />
         </form>
        )}
       </HStack>
       <Box
            // width="auto%"
            // height="auto%"
            // padding={5}
            // color="red"
            // fontSize="large"
            // fontWeight="semibold"
            // lineHeight="short"
            // textAlign="center"
       >
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <h3> post by {post.user.username}</h3>
       </Box>

       <VStack>
        <Box
        // width="auto%"
        // height="auto%"
        // padding={4}
        // color="black"
        // fontSize="l"
        // fontWeight="semibold"
        // lineHeight="short"
        // textAlign="center"
        >
         {post.comments && <h2>Comments</h2>}
         {post.comments &&
          post.comments.map((comment, idx) => {
           return (
            <div key={idx} className="comment">
             <h3>commented by: {comment.user.username}</h3>
             <p>{comment.content}</p>
            </div>
           );
          })}
        </Box>
        <AddCommentForm postId={post.id} />
       </VStack>
      </Stack>
     );
    })
   ) : (
    <h2>Loading...</h2>
   )}
  </>
 );
}
export default Post;