import React, { Component } from "react";
import "./App.css";
// import {Link} from "react-router-dom"
import Chat from "./Components/SubComponents/Chat";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {routes}
        
        <div className="chat">
          <Chat/>
          
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
