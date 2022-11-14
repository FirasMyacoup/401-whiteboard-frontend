import React from "react";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../context/PostContext";
import { Stack, HStack, VStack } from "@chakra-ui/react"

function AddPostForm () {
    const { user, clearUser } = useAuth();

    const { addPost } = useUserData();
    return (
        <>
            <Stack className="add-post-form">
                <form onSubmit={( e ) => addPost( e )}>
                    <VStack>
                        <label>Title</label>
                        <input type="text" name="title" />
                        <label>Content</label>
                        <textarea name="content"></textarea>
                        <input type="submit" />
                    </VStack>
                </form>
                <button onClick={() => clearUser()}>Logout</button>
            </Stack>

        </>
    );
}

export default AddPostForm;