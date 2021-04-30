import React from "react"
import Navbar from "../Navbar/Navbar"

const Post = () => {
    return (
        <>
            <Navbar />
            <section>
                <h3>Post title will appear here</h3>
                <p> Post contents will appear here</p>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        </>
    )
}
export default Post
