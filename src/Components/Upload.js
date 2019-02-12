import React, { Component } from "react";
import axios from "axios"

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0
    }; this.handleSelectedFile= this.handleSelectedFile.bind(this)
this.handleUpload= this.handleUpload.bind(this)
  }

  handleSelectedFile(e) {
      this.setState({
          selectedFile: e.target.files[0],
          loaded: 0,
      })
      }

      handleUpload(){
const data = new FormData()
data.append('file', this.state.selectedFile,
this.state.selectedFile.name)

axios.post("/api/upload", data, {
    onUploadProgress: ProgressEvent => {
        this.setState({
            loaded: (ProgressEvent.loaded/ProgressEvent.total*100),
        })
    },
}).then(res => {console.log(res.statusText)})
      }
  render() {
    return (
      <div>
     <input type="file" onChange={this.handleSelectedFile}/>
     <button onClick={this.handleUpload}>Upload</button>
     <div>{Math.round(this.state.loaded,2)} %</div>
       </div>
    );
  }
}
export default Upload