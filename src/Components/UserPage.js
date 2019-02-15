import React, {Component} from "react"
 import {connect} from "react-redux"
 import {getUser} from "./ducks/reducer"
 import { Link } from "react-router-dom"
 import NavBar from "./SubComponents/NavBar"
class UserPage extends Component {

componentDidMount(){
    this.props.getUser()
}

render() {
    console.log(this.props)
    return this.props.user.username ? (
        <div>
            <NavBar/>
            <p>Account</p>
        </div>
    ) : (
        <Link to = "/login"> Please log in. </Link>
    )
}

}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getUser })(UserPage);
