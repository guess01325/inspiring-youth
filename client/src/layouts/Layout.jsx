import React from "react"
import Header from "../components/Header"
import Header from "../components/Footer"
import "../assets/Layout.css"

export default function Layout(props) {
    return(
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
