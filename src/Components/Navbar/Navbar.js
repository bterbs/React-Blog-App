import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    blogTitle: {
        textAlign: "left",
        margin: "1em"
    }
}))

function Navbar() {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <div className="navigation">
                <Typography variant="button" className={classes.title}>
                    <Link to="/">Home </Link>
                </Typography>
                <Typography variant="button" className={classes.title}>
                    <Link to="/create-new-post">Create New Post </Link>
                </Typography>
            </div>
        </AppBar>
    )
}

export default Navbar
