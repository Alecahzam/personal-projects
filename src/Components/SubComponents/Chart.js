import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

export default class Sharto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    };
  }

  componentDidMount() {
      axios.get(`/api/songs`)
        .then(res => {
          const graph = res.data;
          let genre = [];
          let count = [];
          graph.forEach(element => {
            genre.push(element.genre);
            count.push(element.count);
          });
    this.setState({
      Data: {
        labels: genre,
        datasets: [
          {
            label: "ease my suffering",
            data: [1,2,1,1,1,],
            backgroundColor: [
              "rgba(255,105,145,0.6)",
              "rgba(155,100,210,0.6)",
              "rgba(90,178,255,0.6)",
              "rgba(240,134,67,0.6)",
              "rgba(120,120,120,0.6)",
              "rgba(10,35,122,0.6)",
              "rgba(100,5,220,0.6)",
              "rgba(250,55,197,0.6)",
              "rgba(50,230,110,0.6)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(170, 130, 225, 1)",
              "rgba(85, 176, 200, 1)",
              "rgba(220, 120, 50, 1)",
              "rgba(90, 90, 90, .8)",
              "rgba(5,30,100,0.8)",
              "rgba(80,5,200,0.8)",
              "rgba(230,35,177,0.8)",
              "rgba(40,210,90,0.8)",
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
    })
  }
  render() {
    return (
      <div>
        <Pie data={this.state.Data} options={{ maintainAspectRatio: false }}
        height={230}
        />
      </div>
    );
  }
}
