import React, { useState, useRef } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"

import CreateNewPost from "../CreateNewPost/CreateNewPost"
import DisplayAllPosts from "../DisplayAllPosts/DisplayAllPosts"
import ModifyPost from "../ModifyPost/ModifyPost"
import NavBar from "../Navbar/Navbar"
import Error from "../Error/Error"

const App = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [user, setUser] = useState("")
    const [image, setImage] = useState("")
    const [allPosts, setAllPosts] = useState([
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
    ])
    const [isModifyPost, setIsModifyPost] = useState(false)
    const [editPostId, setEditPostId] = useState("")

    const getTitle = useRef()
    const getContent = useRef()
    const getUser = useRef()
    const getImage = useRef()

    const savePostTitleToState = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }
    const savePostContentToState = (event) => {
        setContent(event.target.value)
        console.log(content)
    }

    const savePostImageToState = (event) => {
        setImage(event.target.value)
        console.log(image)
    }

    const savePostUserToState = (event) => {
        setUser(event.target.value)
        console.log(user)
    }

    const savePost = (event) => {
        event.preventDefault() // prevent default refreshing behavior of form when user clicks submit
        const id = Date.now()
        setAllPosts([...allPosts, { title, content, id, user, image }])
        setTitle("")
        setContent("")
        setUser("")
        setImage("")
        console.log(allPosts)
        getTitle.current.value = ""
        getContent.current.value = ""
        getUser.current.value = ""
        getImage.current.value = ""
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
                    content: content || eachPost.content,
                    user: user || eachPost.user,
                    image: image || eachPost.image
                }
            }
            return eachPost
        })
        setAllPosts(updatedPost)
        toggleModifyPostComponent()
    }

    const deletePost = (id) => {
        const modifiedPost = allPosts.filter((eachPost) => {
            return eachPost.id !== id
        })
        setAllPosts(modifiedPost)
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
                        savePostTitleToState={savePostTitleToState}
                        savePostContentToState={savePostContentToState}
                        savePostImageToState={savePostImageToState}
                        savePostUserToState={savePostUserToState}
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
                            savePostTitleToState={savePostTitleToState}
                            savePostContentToState={savePostContentToState}
                            savePostImageToState={savePostImageToState}
                            savePostUserToState={savePostUserToState}
                            getTitle={getTitle}
                            getContent={getContent}
                            getUser={getUser}
                            getImage={getImage}
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
