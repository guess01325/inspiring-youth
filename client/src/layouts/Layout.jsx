import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../assets/Layout.css"

export default function Layout(props) {
    return(
        <div>
            <Header
            currentUser = {props.currentUser}
            handleLogout = {props.handleLogout} setEvent ={props.setEvent} event={props.event}/>
            {props.children}
            <Footer/>
        </div>
    )
}
