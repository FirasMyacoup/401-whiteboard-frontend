import React from "react";
import { useUserData } from "../context/PostContext";
// import { Stack, Button, VStack, Textarea } from "@chakra-ui/react";

function AddCommentForm(props) {
const { addComment } = useUserData();
return (
<>
<Stack className="add-comment-form" direction="column">
<form onSubmit={(e) => addComment(e, props.postId)}>
<VStack>
<Textarea placeholder="Comment" name="content"></Textarea>
<Button type="submit">Add Comment</Button>
</VStack>
</form>
</Stack>
</>
);
}

export default AddCommentForm;