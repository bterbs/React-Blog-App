import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import Posts from "../Posts/Posts"
import Error from "../Error/Error"

const App = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={Posts} exact />
                <Route path="/create-new-post" component={CreateNewPost} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App
