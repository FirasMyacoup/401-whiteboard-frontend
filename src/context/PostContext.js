import { createContext, useContext, useState } from "react";
import axios from "axios";
import React from 'react';
import cookies from 'react-cookies';
import { useAuth } from "./AuthContext";
import swal from "sweetalert";

const PostContext = createContext();
export const useUserData = () => useContext( PostContext );

const PostContextProvider = ( props ) => {
const [ post, setPost ] = useState( [] );
const [ edit, setEdit ] = useState( false );
const { user } = useAuth();


const fetchData = async () => {
await axios.get( `${process.env.REACT_APP_HEROKU_URL}/post`, {
headers: {
Authorization: `Bearer ${cookies.load('token')}`
}
})
.then( ( res ) => {
setPost( res.data );
} ).catch( ( err ) => {
console.log( err );
} );

};


const addPost = async ( e ) => {
e.preventDefault();
const post = {
'title': e.target.title.value,
'content': e.target.content.value,
'userID': cookies.load( 'user_id' )
};
await axios.post(
`${process.env.REACT_APP_HEROKU_URL}/post`,
post, {
headers: {
'Authorization': `bearer ${cookies.load('token')}`
}
}
).then( () => {
fetchData();
} );
};

const editPost = async ( e, id ) => {
e.preventDefault();
swal( {
title: "Do you want to edit the post?",
icon: "warning",
buttons: true,
dangerMode: true,
} )
.then( async ( willedit ) => {
if ( willedit ) {
const post = {
'title': e.target.title.value,
'content': e.target.content.value,
'userID': cookies.load( 'user_id' )
};
await axios.put(
`${process.env.REACT_APP_HEROKU_URL}/post/${id}`,
post, {
    headers: {
        'Authorization': `bearer ${cookies.load('token')}`
    }
}
).then( () => {
fetchData();
} );
} else {
swal( "post safe" );
}
}
);

};

const deletePost = async ( id ) => {
swal( {
title: "please confirm",
text: "Once deleted, you wont be able to recover this post",
icon: "warning",
buttons: true,
dangerMode: true,
} )
.then( async ( willDelete ) => {
if ( willDelete ) {
await axios.delete(
`${process.env.REACT_APP_HEROKU_URL}/post/${id}`,
{
    headers: {
        'Authorization': `bearer ${cookies.load('token')}`
    }
}
).then( () => {
fetchData();
} );
swal( " post deleted", {
icon: "success",
} );
} else {
swal( "Your post is safe!" );
}
}
);
};

const addComment = async ( e, postId ) => {
e.preventDefault();
const comment = {
'content': e.target.content.value,
};
await axios.post(
`${process.env.REACT_APP_HEROKU_URL}/comment/${postId}/${user.user_id}`,
comment
).then( () => {
console.log( 'comment added' );
} );
};

const state = {
post,
setPost,
edit,
setEdit,
fetchData,
addPost,
editPost,
deletePost,
addComment,
};

return (
<PostContext.Provider value={state}>
{props.children}
</PostContext.Provider>
);
};

export default PostContextProvider;