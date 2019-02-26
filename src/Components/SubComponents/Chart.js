import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
// import axios from "axios";

export default class Sharto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    };
  }

  componentDidMount() {
    //   axios.get(`http://localhost:8000/api/charts`)
    //     .then(res => {
    //       const football = res.data;
    //       let playername = [];
    //       let playerscore = [];
    //       football.forEach(element => {
    //         playername.push(element.name);
    //         playerscore.push(element.score);
    //       });
    this.setState({
      Data: {
        labels: ["fucking", "end my", "miserable fucking existence", "please", "i beg of you"],
        datasets: [
          {
            label: "ease my suffering",
            data: [6, 2, 5, 1, 7],
            backgroundColor: [
              "rgba(255,105,145,0.6)",
              "rgba(155,100,210,0.6)",
              "rgba(90,178,255,0.6)",
              "rgba(240,134,67,0.6)",
              "rgba(120,120,120,0.6)",
              "rgba(250,55,197,0.6)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(170, 130, 225, 1)",
              "rgba(85, 176, 200, 1)",
              "rgba(220, 120, 50, 1)",
              "rgba(90, 90, 90, .8)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    // })
  }
  render() {
    return (
      <div>
        <Pie data={this.state.Data} options={{ maintainAspectRatio: false }}
        height={230}
        width />
      </div>
    );
  }
}
