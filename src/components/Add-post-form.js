import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useUserData } from "../Context/PostContext";
// import {
//  Stack,
//  VStack,
//  Button,
//  FormLabel,
//  Input,
//  Textarea,
// } from "@chakra-ui/react";

function AddPostForm() {
 const { clearUser } = useAuth();

 const { addPost } = useUserData();
 return (
  <>
   <Stack className="add-post-form" direction="column">
    <form onSubmit={(e) => addPost(e)}>
     <VStack>
      <Input placeholder="Title" name="title" />
      <FormLabel>Content</FormLabel>
      <Textarea placeholder="Content" name="content"></Textarea>
      <Button type="submit">Add Post</Button>
     </VStack>
    </form>
    <Button onClick={() => clearUser()}>Logout</Button>
   </Stack>
  </>
 );
}

export default AddPostForm;