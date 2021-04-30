import React from "react"
import Paper from "@material-ui/core/Paper"
import "./CreateNewPost.css"

const CreateNewPost = (props) => {
    return (
        <>
            <Paper elevation={3} className="card-new-post">
                <form onSubmit={props.savePost}>
                    <h1>Create New Post</h1>
                    <input
                        type="text"
                        onChange={props.savePostTitleToState}
                        placeholder="title"
                        size="39"
                        required
                        ref={props.getTitle}
                    ></input>
                    <br />
                    <br />
                    <textarea
                        onChange={props.savePostContentToState}
                        placeholder="contents"
                        rows="8"
                        cols="41"
                        required
                        ref={props.getContent}
                        className="contain-mobile"
                    ></textarea>
                    <br />
                    <br />
                    <button>Save Post</button>
                </form>
            </Paper>
        </>
    )
}
export default CreateNewPost
