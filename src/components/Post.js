import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import AddCommentForm from "./Add-comment-form";
import React from 'react';


function Post (props) {
    const [post, setPost] = useState([]);
    const getData = async () => {
        const dataPost = await axios.get( `https://post-401.herokuapp.com/post`);
        setPost(dataPost.data.post);
    };

    useEffect( () => {
        getData();
    }, [props.rerender]);
    return (
        <>
            {post && post.map((post, idx) => {
                return (
                    <div className="post-class" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                     {post.Comments &&
                     <h2>comment here</h2>
                        }
                    {post.Comments && post.Comments.map((comment, idx) => {
                     return (
                        <div className="card" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                            <div className="card-body">
                               <p className="card-text">{comment.content}</p>
                                </div>
                        </div>
                                );
                            }
                            )}
                            <AddCommentForm postID={post.id} getPost={getData} />
                        </div>
                );
            }
            )}
        </>
    );
}
export default Post;