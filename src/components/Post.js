import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCommentForm from "./Add-comment-form";
import AddPostForm from "./Add-post-form";
import React from 'react';
import cookies from 'react-cookies';

function Post ( props ) {
    const [ post, setPost ] = useState( [] );
    const [edit,setEdit] = useState(false)
    const getData  = async () => { 
        await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post` , {
        headers: {
            'Authorization': `Bearer ${cookies.load('token')}`
        }    
        })
        .then( ( res ) => {
            setPost( res.data );
        } )
        .catch( ( err ) => {
            console.log( err );
        } )
    };

    const handleDelete = async ( id ) => {
        await axios.delete( `${process.env.REACT_APP_HEROKU_URL}/post/${id}` );
        getData();
    };


    const handleEdit = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'userID': cookies.load('user').id
        };
        await axios.put(`${process.env.REACT_APP_HEROKU_URL}/post/${props.match.params.id}`, post, {
            headers: {
                'Authorization': `Bearer ${cookies.load('token')}`
            }
        })
        .then(() => {
            getData();
        })
        setEdit(false)
    }

    useEffect( () => {
        getData();
    }, [props.rerender] );
    return (
        <>
            {post && post.map( ( post, idx ) => {
                return (
                    <>
                    <AddPostForm getPost={getData} />
                    <div className="text">
                         <div key={idx}>
                        <div className="card-body">
                            <h1 className="card-title">{post.title}</h1>
                            <p className="card-text">{post.content}</p>
                    </div>
                    {cookies.load('role') === 'admin' && <button onClick={() => handleDelete(post.id)}>Delete</button>}
<                   button onClick={() => {
                        setEdit(true)
                    }}>Edit</button>
                    {edit && <form onSubmit={handleEdit}>
                        <input type="text" name="title" defaultValue={post.title} />
                        <input type="text" name="content" defaultValue={post.content} />
                        <button>Submit</button>
                    </form>}
                    
                        <div>
                            {post.Comments && <h2>Comments</h2>}
                            {post.Comments && post.Comments.map( ( comment, idx ) => {
                                return (
                                    <div className="card" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                                        <div className="card-body">
                                            <p className="card-text">{comment.content}</p>
                                        </div>
                                    </div>
                                );
                            }
                            )}
                              </div>
                              <AddCommentForm postId={post.id} getData={getData} />
                            <div>
                            <button  onClick={() => {
                                handleDelete( post.id );
                            }}>delete post</button>
                        </div>
                        <button className="signout" onClick={() => {
                            cookies.remove("token");
                            cookies.remove("username");
                            cookies.remove("userID");
                            cookies.remove("role");
                            window.location.replace = "/";
                        }}>Sign Out {cookies.load('username')}</button>

                        </div>
                    </div>
                    </>
                );
            }
            )}
        </>
    );
}
export default Post;