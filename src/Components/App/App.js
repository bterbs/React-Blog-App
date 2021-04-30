import React, { useState, useRef } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "@material-ui/core/Container"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import DisplayAllPosts from "../DisplayAllPosts/DisplayAllPosts"
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
            id: Date.now()
        }
    ])

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

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <NavBar />
                    <Container maxWidth="md" className="wrapper-centered">
                        <DisplayAllPosts allPosts={allPosts} />
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
