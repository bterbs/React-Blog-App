import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import Post from "../Post/Post"
import Error from "../Error/Error"

const App = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const savePostTitleToState = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }
    const savePostContentToState = (event) => {
        setContent(event.target.value)
        console.log(content)
    }
    return (
        <main>
            <Switch>
                <Route path="/" component={Post} exact />
                <Route path="/create-new-post">
                    <CreateNewPost
                        savePostTitleToState={savePostTitleToState}
                        savePostContentToState={savePostContentToState}
                    />
                </Route>
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App
