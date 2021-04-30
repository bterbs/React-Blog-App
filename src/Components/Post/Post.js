import React from "react"

const Post = ({ title, content, editPost, id }) => {
    return (
        <>
            <section>
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={() => editPost(id)}>Edit</button>
                <button>Delete</button>
            </section>
        </>
    )
}
export default Post
