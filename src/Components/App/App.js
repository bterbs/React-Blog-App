import React, { useState, useRef } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import Post from "../Post/Post"
import Error from "../Error/Error"

const App = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [allPosts, setAllPosts] = useState([])

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
                <Route path="/" component={Post} exact />
                <Route path="/create-new-post">
                    <CreateNewPost
                        savePostTitleToState={savePostTitleToState}
                        savePostContentToState={savePostContentToState}
                        getTitle={getTitle}
                        getContent={getContent}
                        savePost={savePost}
                    />
                </Route>
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App
