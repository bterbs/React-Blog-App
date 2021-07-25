import React from "react"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import Typography from "@material-ui/core/Typography"
import { UPDATE_TITLE, UPDATE_CONTENT, UPDATE_USER, UPDATE_IMAGE } from '../App/App.js';

const ModifyPost = (props) => {
    const { update } = props;
    return (
        <>
            <form>
                <Typography variant="h3" gutterBottom>
                    Edit Post
                </Typography>
                <input
                    defaultValue={props.title}
                    onChange={(e) => update(e, UPDATE_TITLE)}
                    text
                    placeholder="title"
                    size="39"
                ></input>
                <br />
                <br />
                <textarea
                    defaultValue={props.content}
                    placeholder="contents"
                    onChange={(e) => update(e, UPDATE_CONTENT)}
                    rows="8"
                    cols="41"
                ></textarea>
                <br />
                <br />
                <input
                    defaultValue={props.user}
                    onChange={(e) => update(e, UPDATE_USER)}
                    text
                    placeholder="user"
                    size="39"
                ></input>
                <br />
                <br />
                <input
                    defaultValue={props.image}
                    onChange={(e) => update(e, UPDATE_IMAGE)}
                    text
                    placeholder="Blog image"
                    size="39"
                ></input>
                <br />
                <br />
                <Button
                    onClick={props.updatePost}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                >
                    Update Post
                </Button>
            </form>
        </>
    )
}
export default ModifyPost
