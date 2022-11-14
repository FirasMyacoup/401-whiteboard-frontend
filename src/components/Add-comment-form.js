import React from 'react';
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../Context/PostContext";
import { Stack, HStack, VStack } from "@chakra-ui/react"


function AddCommentForm ( props ) {
    const { addComment } = useUserData();
    return (
        <>
            <Stack className="add-comment-form">
                <form onSubmit={( e ) => addComment( e, props.postId )}>
                    <VStack>
                        <label>Comment</label>
                        <textarea placeholder="Add Comment" name="content"></textarea>
                        <input type="submit" />
                    </VStack>
                </form>
            </Stack>


        </>
    );
}

export default AddCommentForm;