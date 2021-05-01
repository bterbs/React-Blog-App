import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import "./CreateNewPost.css"
import { UPDATE_TITLE, UPDATE_CONTENT, UPDATE_USER, UPDATE_IMAGE } from '../App/App.js';

const CreateNewPost = (props) => {
    const { update } = props;
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
                            onChange={(e) => update(e, UPDATE_TITLE)}
                            placeholder="title"
                            size="39"
                            required
                            value={props.title}
                        ></input>
                        <br />
                        <br />
                        <input
                            type="text"
                            onChange={(e) => update(e, UPDATE_USER)}
                            placeholder="user"
                            size="39"
                            required
                            value={props.user}
                        ></input>
                    </div>
                    <br />
                    <br />
                    <textarea
                        onChange={(e) => update(e, UPDATE_CONTENT)}
                        placeholder="contents"
                        rows="8"
                        cols="41"
                        required
                        className="contain-mobile"
                        value={props.content}
                    ></textarea>
                    <br />
                    <br />
                    <input
                        defaultValue={props.image}
                        required
                        onChange={(e) => update(e, UPDATE_IMAGE)}
                        text
                        placeholder="Blog image url"
                        size="39"
                        value={props.image}
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
