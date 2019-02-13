import React, {Component} from "react"
import axios from "axios";

class FileUpload extends Component {
    constructor(props){
        super(props);
            this.state = {
                imageURL: '',
            }
            this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload(e){
        e.preventDefault();
        console.log(e.target)

        const data = new FormData();
    // data.append('file', this.uploadInput.files[0]);
    // data.append('filename', this.fileName.value);

    console.log(data)


    axios.post('/api/upload', {})
      .then((response) => {
        
        //   response.json().then((data) => {
console.log(response)
    // this.setState({ imageURL: `http://localhost:3003/${data.file}`});
    //   })
      }).catch(err=> console.log(err))
  }

    render(){
        console.log(this.state)
        return(
            <div className="container">
            <form onSubmit={this.handleUpload}>
              <div className="form-group">
                <input className="form-control" type="text" onChange={e => this.setState({imageURL: e.target.value})} />
              </div>
    
              <div className="form-group">
                <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
              </div>
    
              <button className="btn btn-success" onClick={ this.handleUpload}>Upload</button>
    
            </form>
            <img src={this.state.imageURL} alt="img"/>
          </div>
        )
      }
    }
        
export default FileUpload

