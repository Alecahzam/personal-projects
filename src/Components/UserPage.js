import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import { Link } from "react-router-dom";
import NavBar from "./SubComponents/NavBar";
import Sharto from "./SubComponents/Chart";
class UserPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props);
    return this.props.user.username ? (
      <div>
        <NavBar />
        <p>Account</p>
        <p>USER: {this.props.user.username}</p>
        <Sharto />
      </div>
    ) : (
      <div>
        <NavBar/>
        <div>
          <Link to="/login"> Please log in. </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getUser }
)(UserPage);
