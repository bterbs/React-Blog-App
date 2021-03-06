import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Post from "../Post/Post"

class DisplayAllPosts extends Component {
    constructor(props) {
        super(props)

        this.state = { currentPage: 1, postsPerPage: 5 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {
        const { currentPage, postsPerPage } = this.state
        const blogPosts = this.props.allPosts

        // Logic for displaying blog posts
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

        // Logic for displaying page numbers
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(blogPosts.length / postsPerPage); i++) {
            pageNumbers.push(i)
        }
        const listStyle = {
            listStyle: "none",
            margin: "0 5px"
        }

        const renderPageNumbers = pageNumbers.map((number) => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    style={listStyle}
                >
                    {number}
                </li>
            )
        })

        return (
            <>
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    style={{ textAlign: "left", margin: "1em 12px" }}
                >
                    BlogSpace ✨
                </Typography>
                {!blogPosts.length ? (
                    <div>
                        <h3>There is nothing to see here!</h3>
                    </div>
                ) : (
                    currentPosts.map((eachPost) => {
                        return (
                            <Card style={{ margin: "1em", padding: "1em" }}>
                                <Post
                                    id={eachPost.id}
                                    key={eachPost.id}
                                    title={eachPost.title}
                                    user={eachPost.user}
                                    image={eachPost.image}
                                    content={eachPost.content}
                                    editPost={this.props.editPost}
                                    deletePost={this.props.deletePost}
                                />
                            </Card>
                        )
                    })
                )}
                <p>Pagination </p>
                <ul
                    id="page-numbers"
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {renderPageNumbers}
                </ul>
            </>
        )
    }
}
export default DisplayAllPosts
