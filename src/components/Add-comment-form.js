import axios from "axios";
import React from 'react';
import cookies from "react-cookies";


function AddCommentForm ( props ) {
    const handleSubmit = async ( e ) => {
    const handleComment = async ( e ) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
            'postId': props.postId
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/comment/${props.postId}`,comment
        ).then( () => {
            `${process.env.REACT_APP_HEROKU_URL}/comment/${props.postId}`,comment).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-comment-form">
                <h2>Comment here</h2>
                <form onSubmit={handleSubmit}>
                <form onSubmit={handleComment}>
                    <div className="form-control">
                        <textarea placeholder="Add Comment" name="content"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCommentForm;