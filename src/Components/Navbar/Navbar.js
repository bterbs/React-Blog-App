import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/create-new-post">Create New Post </Link>
        </div>
    )
}

export default Navbar
