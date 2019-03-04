import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import axios from "axios"
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      message: "",
      messages: [],
      toEdit: false
    };
    this.hideHandler = this.hideHandler.bind(this);
    this.socket = io("localhost:3002");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        message: this.state.message
      });
      this.setState({ message: "" });
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  hideHandler() {
    if (this.state.hidden === false) {
      this.setState({ hidden: true });
    } else {
      this.setState({ hidden: false });
    }
  }

editHandler(){
 var messageid = 
  axios.put(`/api/messages/:${messageid}`)
  
}

  render() {
    return this.state.hidden === true ? (
      <div className="container">
        <button onClick={this.hideHandler}>Show</button>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <button onClick={this.hideHandler}>^</button>
              <div className="card-body">
                <div className="card-title">Global Chat</div>
                <hr />
                <div className="messages">
                  {this.state.messages.map(message => {
                    // if (this.state.messages.length < 8) {
                    //   return <div>
                    //   </div>
                    // } else {
                      return (
                        <span className="messages" onClick={this.editHandler}>
                            {this.props.user.username}: {message.message}
                        </span>
                      );
                    }
                  // }
                  )
                  }
                </div>
              </div>
              <div className="card-footer">
                <br />
                <input
                  type="text"
                  placeholder="Message"
                  className="form-control"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <br />
                <button
                  onClick={this.sendMessage}
                  className="btn btn-primary form-control"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Chat);
