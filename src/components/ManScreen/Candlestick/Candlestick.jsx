import React from 'react';
import Chart from 'react-apexcharts';
import "./Candlestick.css"
import img1 from "./../../../assets/img-SN/Settings-Icon.svg"
import img2 from "./../img/icon-camera.svg"
import img3 from "./../img/Zoom-Icon.svg"

class Candlestick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'candlestick',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },

      series: [
        {
          data: [
            {
              x: new Date(2021, 0, 1),
              y: [40000, 45000, 38000, 42000],
            },
            {
              x: new Date(2021, 0, 2),
              y: [42000, 46000, 40000, 45000],
            },
            {
              x: new Date(2021, 0, 3),
              y: [43000, 47000, 41000, 46000],
            },
            {
              x: new Date(2021, 0, 4),
              y: [44000, 48000, 42000, 47000],
            },
            {
              x: new Date(2021, 0, 5),
              y: [45000, 49000, 43000, 48000],
            },
            {
              x: new Date(2021, 0, 6),
              y: [46000, 50000, 44000, 49000],
            },
            {
              x: new Date(2021, 0, 7),
              y: [47000, 51000, 45000, 50000],
            },
            {
              x: new Date(2021, 0, 8),
              y: [42000, 40000, 38000, 45000],
            },
            {
              x: new Date(2021, 0, 9),
              y: [41000, 39000, 37000, 44000],
            },
            {
              x: new Date(2021, 0, 10),
              y: [40000, 38000, 36000, 43000],
            },
            {
              x: new Date(2021, 0, 11),
              y: [39000, 37000, 35000, 42000],
            },
            {
              x: new Date(2021, 0, 12),
              y: [38000, 36000, 34000, 36000],
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className='AB-Candlestick'>
        <div className='AB-FS'>
          <div className='AB-FirstCandlestick'>
            <div className='AB-Candlestick-Btn'>
              <button>Candle Line</button>
              <button>Depth</button>
            </div>
            <div className='AB-iconCandlestick'>
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
            </div>
          </div>
          <div className='AB-SecondCandlestick'>
            <div className='AB-GropBtnCandlestick'>
              <button>1D</button>
              <button>1M</button>
              <button>6M</button>
              <button>1Y</button>
              <button>YTD</button>
              <button>ALL</button>
            </div>
          </div>
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={1000}
          className="candlestick"
        />
      </div>
    );
  }
}

export default Candlestick;