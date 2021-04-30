import React from "react"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"
import { makeStyles } from "@material-ui/core/styles"
import "./Post.css"

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "1em"
    }
}))

const Post = ({ title, content, editPost, deletePost, id, user, image }) => {
    const classes = useStyles()
    return (
        <>
            <section>
                <img
                    src={image}
                    style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                    alt=""
                />
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {content}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Author: {user}
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    className={classes.button}
                    onClick={() => editPost(id)}
                >
                    Edit
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePost(id)}
                >
                    Delete
                </Button>
            </section>
        </>
    )
}
export default Post
