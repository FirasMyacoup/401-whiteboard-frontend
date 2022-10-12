import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCommentForm from "./Add-comment-form";
import AddPostForm from "./Add-post-form";
import React from 'react';
import cookies from 'react-cookies';

function Post ( props ) {
    const [ post, setPost ] = useState( [] );
    const getData = async () => {
        const response = await axios.get( `${process.env.REACT_APP_HEROKU_URL}/post` );
        setPost( response.data.posts );
    };

    const getData  = async () => {
    const response = await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post`, {
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
      },
    });

    setPost(response.data.posts);
  };



    const handleDelete = async ( id ) => {
        await axios.delete( `${process.env.REACT_APP_HEROKU_URL}/post/${id}` );
        getData();
    };
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
                            window.location.href = "/";
                        }}>Sign Out</button>

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