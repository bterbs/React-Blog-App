import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import CreateNewPost from "./Components/CreateNewPost/CreateNewPost"
import Posts from "./Components/Posts/Posts"

const App = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={Posts} exact />
                <Route path="/create-new-post" component={CreateNewPost} />
            </Switch>
        </main>
    )
}
export default App
