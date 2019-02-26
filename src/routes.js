import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Form from "./Components/Form"
import UserPage from "./Components/UserPage"
import MyMusic from "./Components/myMusic"
import AboutUs from "./Components/AboutUs"

export default (
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path= "/login" component={Login}/>
        <Route path= "/add" component= {Form}/>
         <Route path= "/userpage" component= {UserPage}/>
        <Route path= "/mymusic" component={MyMusic}/>
        <Route path= "/aboutus" component={AboutUs}/>
    </Switch>
)