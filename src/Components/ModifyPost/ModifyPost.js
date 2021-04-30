import React from "react"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import Typography from "@material-ui/core/Typography"

const ModifyPost = (props) => {
    return (
        <>
            <form>
                <Typography variant="h3" gutterBottom>
                    Edit Post
                </Typography>
                <input
                    defaultValue={props.title}
                    onChange={props.savePostTitleToState}
                    text
                    placeholder="title"
                    size="39"
                ></input>
                <br />
                <br />
                <textarea
                    defaultValue={props.content}
                    placeholder="contents"
                    onChange={props.savePostContentToState}
                    rows="8"
                    cols="41"
                ></textarea>
                <br />
                <br />
                <input
                    defaultValue={props.user}
                    onChange={props.savePostUserToState}
                    text
                    placeholder="user"
                    size="39"
                ></input>
                <br />
                <br />
                <input
                    defaultValue={props.image}
                    onChange={props.savePostImageToState}
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
