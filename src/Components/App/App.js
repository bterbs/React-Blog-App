import React, { useState, useReducer } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import DisplayAllPosts from "../DisplayAllPosts/DisplayAllPosts"
import ModifyPost from "../ModifyPost/ModifyPost"
import NavBar from "../Navbar/Navbar"
import Error from "../Error/Error"

const initialState = {
    title: "",
    content: "",
    user: "",
    editPostId: "",
    image: "",
    isModifyPost: false,
    allPosts: [
        {
            title: "First Blog Post",
            content:
                "Keffiyeh occupy sartorial, synth thundercats cliche 8-bit la croix nisi iceland salvia. Roof party succulents PBR&B readymade pabst quinoa consectetur lorem.",
            id: Date.now(),
            user: "Brittany",
            image:
                "https://randomwordgenerator.com/img/picture-generator/57e3d6424351ad14f1dc8460962e33791c3ad6e04e507440772d7cdd9144c4_640.jpg"
        },
        {
            title: "Second Blog Post",
            content:
                "Photo booth YOLO craft beer af, heirloom PBR&B qui wayfarers helvetica ad health goth tofu franzen.",
            id: Date.now() + 1,
            user: "Brittany",
            image:
                "https://randomwordgenerator.com/img/picture-generator/53e3d7454351ac14f1dc8460962e33791c3ad6e04e507440762e7ad3954fcd_640.jpg"
        }
    ]
}

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_TITLE: {
            return { ...state, title: action.payload }
        }
        case UPDATE_CONTENT: {
            return { ...state, content: action.payload }
        }
        case UPDATE_USER: {
            return { ...state, user: action.payload }
        }
        case UPDATE_IMAGE: {
            return { ...state, image: action.payload }
        }
        case ADD_POST : {
            return { ...initialState, allPosts: [...state.allPosts, action.payload]}
        }
        case UPDATE_POST: {
            const updatedPosts = state.allPosts.map((eachPost) => {
                if (eachPost.id === action.id) {
                    return {
                        ...eachPost,
                        title: state.title || eachPost.title,
                        content: state.content || eachPost.content,
                        user: state.user || eachPost.user,
                        image: state.image || eachPost.image
                    }
                }
                return eachPost
            })
            return { ...initialState, allPosts: updatedPosts }
        }
        case DELETE_POST: {
            const updatedPosts = state.allPosts.filter((eachPost) => {
                return eachPost.id !== action.id
            })
            return { ...initialState, allPosts: updatedPosts }
        }
        case EDIT_POST: {
            return { ...state, editPostId: action.id, isModifyPost: !state.isModifyPost }
        }
        default: {
            return state;
        }
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { title, content, user, image, isModifyPost, allPosts, editPostId } = state;
    const update = (e, actionType) => {
        dispatch({type: actionType, payload: e.currentTarget.value })
    }

    const savePost = (event) => {
        event.preventDefault() // prevent default refreshing behavior of form when user clicks submit
        const id = Date.now()
        dispatch({ type: ADD_POST, payload: { title, content, id, user, image }})
    }

    const editPost = (id) => {
        dispatch({ type: EDIT_POST, id })
    }

    const updatePost = (event) => {
        event.preventDefault()
        dispatch({ type: UPDATE_POST, id: editPostId, payload: { title, content, user, image }})
    }

    const deletePost = (id) => {
        dispatch({ type: DELETE_POST, id })
    }

    if (isModifyPost) {
        const post = allPosts.find((post) => {
            return post.id === editPostId
        })
        return (
            <Container maxWidth="md" className="wrapper-centered">
                <NavBar />
                <Card style={{ margin: "1em", padding: "1em" }}>
                    <ModifyPost
                        title={post.title}
                        content={post.content}
                        user={post.user}
                        image={post.image}
                        updatePost={updatePost}
                        update={update}
                    />
                </Card>
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
                            deletePost={deletePost}
                        />
                    </Container>
                </Route>
                <Route path="/create-new-post">
                    <NavBar />
                    <Container maxWidth="md" className="wrapper-centered">
                        <CreateNewPost
                            update={update}
                            savePost={savePost}
                            title={title}
                            content={content}
                            user={user}
                            image={image}
                        />
                    </Container>
                </Route>
                <Route component={Error} />
            </Switch>
        </main>
    )
}
export default App
