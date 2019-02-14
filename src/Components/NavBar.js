import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {return(


<nav className="navBar">
            <ul>
              <li className="navList">
                <img
                  className="logo"
                  src="https://img2.androidappsapk.co/300/7/8/7/com.airg.launchers.music.png"
                  alt="logo"
                />
                <Link className="Links" to="home">
                  Home
                </Link>
                <Link className="Links" to="userpage">
                  Account
                </Link>
                <Link className="Links" to="discover">
                  Discover
                </Link>
                <style> 
                <input /> </style>
                <Link className="Links" to="mymusic">
                  My Music
                </Link>
                <Link className="Links" to="add">
                  Upload
                </Link>
                <Link className="Links" to="aboutus">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
)
}
export default NavBar