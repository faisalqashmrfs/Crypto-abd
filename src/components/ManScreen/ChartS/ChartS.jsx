import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./ChartS.css"

class ChartS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"]
        },
        grid: {
          show: true,
          strokeDashArray: [0, 1]
        },
        yaxis: {
          opposite: true
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <div className="AB-ChartBalance">
              <h1>Balance</h1>
              <p>+$2.22<span>/24h</span></p>
            </div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              className="foreignObject"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartS;