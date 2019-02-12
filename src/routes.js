import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
// import UserPage from "./Components/UserPage"
// import Favorites from "./Components/Favorites"
// import Playlists from "./Components/Playlists"

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path= "/login" component={Login}/>
        {/* <Route path= "/userpage" component= {UserPage}/>
        <Route path= "/favorites" component={Favorites}/>
        <Route path= "/playlists" component= {Playlists}/> */}
    </Switch>
)