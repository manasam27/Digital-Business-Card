import React from "react"
import ReactDOM from "react-dom"
import Profile from "./Profile.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"

export default function App(){
    return (
        <main className="App">
            <Profile />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}