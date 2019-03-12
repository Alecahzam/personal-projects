import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "../Audio Styling/Song.css"
import  AudioSpectrum from "react-audio-spectrum"


class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: ""
    };
  }
  render() {
    return (
      <div className= "audioPlay" >
      <AudioPlayer
     
        autoPlay= {false}
        src={this.props.file}        
      /> 
     
       </div>
    );
  }
}
export default Audio;

// import {asset, NativeModules} from 'react-360';
// const {AudioModule} = NativeModules;
// const player =
// AudioModule.playEnvironmental({
//   source: asset('C:/Users/towns/Music/Lunar_Dial.mp3'),
//   volume: 0.3, // play at 3/10 original volume
// });
// export default player

