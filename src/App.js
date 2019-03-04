import React, { Component } from "react";
import "./App.css";
// import {Link} from "react-router-dom"
import Chat from "./Components/Chat";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <div className="chat">
          <Chat/>
        </div>
      </div>
    );
  }
}

export default App;
