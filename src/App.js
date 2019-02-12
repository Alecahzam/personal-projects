import React, { Component } from 'react';
import './App.css'
import Home from "./Components/Home"

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Home/>
{/* <html>
<script src="/socket.io/socket.io.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
</html> */}
{/* <script>
  $(function () {
    var socket = io();
    $('form').submit(function(e){
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script> */}
     </div>
    );
  }
}

export default App

