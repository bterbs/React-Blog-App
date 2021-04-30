import React, { useState, useRef } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "@material-ui/core/Container"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import DisplayAllPosts from "../DisplayAllPosts/DisplayAllPosts"
import ModifyPost from "../ModifyPost/ModifyPost"
import NavBar from "../Navbar/Navbar"
import Error from "../Error/Error"

const App = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [allPosts, setAllPosts] = useState([
        { title: "First Blog Post", content: "What up world!", id: Date.now() },
        {
            title: "Second Blog Post",
            content: "Wubba Lubba Dub Dub!",
            id: Date.now() + 1
        }
    ])
    const [isModifyPost, setIsModifyPost] = useState(false)
    const [editPostId, setEditPostId] = useState("")

    const getTitle = useRef()
    const getContent = useRef()

    const savePostTitleToState = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }
    const savePostContentToState = (event) => {
        setContent(event.target.value)
        console.log(content)
    }

    const savePost = (event) => {
        event.preventDefault() // prevent default refreshing behavior of form when user clicks submit
        const id = Date.now()
        setAllPosts([...allPosts, { title, content, id }])
        setTitle("")
        setContent("")
        console.log(allPosts)
        getTitle.current.value = ""
        getContent.current.value = ""
    }

    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost)
    }

    const editPost = (id) => {
        setEditPostId(id)
        toggleModifyPostComponent()
    }

    const updatePost = (event) => {
        event.preventDefault()
        const updatedPost = allPosts.map((eachPost) => {
            if (eachPost.id === editPostId) {
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    content: content || eachPost.content
                }
            }
            return eachPost
        })
        setAllPosts(updatedPost)
        toggleModifyPostComponent()
    }

    if (isModifyPost) {
        const post = allPosts.find((post) => {
            return post.id === editPostId
        })
        return (
            <Container maxWidth="md" className="wrapper-centered">
                <ModifyPost
                    title={post.title}
                    content={post.content}
                    updatePost={updatePost}
                    savePostTitleToState={savePostTitleToState}
                    savePostContentToState={savePostContentToState}
                />
            </Container>
        )
    }

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <NavBar />
                    <Container maxWidth="md" className="wrapper-centered">
                        <DisplayAllPosts
                            allPosts={allPosts}
                            editPost={editPost}
                        />
                    </Container>
                </Route>
                <Route path="/create-new-post">
                    <NavBar />
                    <Container maxWidth="md" className="wrapper-centered">
                        <CreateNewPost
                            savePostTitleToState={savePostTitleToState}
                            savePostContentToState={savePostContentToState}
                            getTitle={getTitle}
                            getContent={getContent}
                            savePost={savePost}
                        />
                    </Container>
                </Route>
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App
