import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import "./CreateNewPost.css"

const CreateNewPost = (props) => {
    return (
        <>
            <Paper elevation={3} className="card-new-post">
                <form onSubmit={props.savePost}>
                    <Typography variant="h3" gutterBottom>
                        Create New Post
                    </Typography>
                    <div>
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
                        <input
                            type="text"
                            onChange={props.savePostUserToState}
                            placeholder="user"
                            size="39"
                            required
                            ref={props.getUser}
                        ></input>
                    </div>
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
                    <input
                        defaultValue={props.image}
                        ref={props.getImage}
                        required
                        onChange={props.savePostImageToState}
                        text
                        placeholder="Blog image url"
                        size="39"
                    ></input>
                    <br />
                    <br />
                    <button>Save Post</button>
                </form>
            </Paper>
        </>
    )
}
export default CreateNewPost
