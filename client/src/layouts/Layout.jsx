import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../assets/Layout.css"


import {
    Box,
    Toolbar,
    Button,
    IconButton,
    SearchIcon,
    Typography,
    Container,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Grid,
  } from "@mui/material";
  

export default function Layout(props) {
    return(
        <div>
            <Header
            currentUser = {props.currentUser}
            handleLogout = {props.handleLogout} setEvent ={props.setEvent} event={props.event}/>
            {props.children}
        
                   
                        <Footer ClassName="footer"
                          
                          />


            
        </div>
    )
}
