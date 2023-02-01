import React from 'react'
import './box3.css'
import Chart from "react-apexcharts";
import Pure from './pure';
export default function Box({chart, dsc, valor, dsc2, dsc3, dsc4}) {
 
      var options = {
    
        series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
      }],
        chart: {
        type: 'line',
        
        width: 10,
        height: 15,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
      };

      var options2 = {
        colors: ['#f73131'],
        series: [{
        data: [80, 4, 82, 47, 42, 15, 47, 55, 5, 19, 14]
      }],
        chart: {
        type: 'line',
        
        width: 10,
        height: 15,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
      };
      var options5 = {
        series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
        chart: {
        type: 'bar',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
      }; 
   
    return (
    <div className='pai2'>
        <div className='chart4'>
        
        {
                (() => {
                    if(chart == 1) {
                            return (
                                <div className='bb'><Pure/></div> 
                            )
                        } else if (chart == 2) {
                            return (
                                <Chart options={options} type="line" series={options.series} />
                            )
                        } else if (chart == 3) {
                            return (
                                <Chart options={options5} type="bar" series={options5.series} />
                            )
                        }else if (chart == 4) {
                            return (
                                <Chart options={options2} type="line" series={options2.series} />
                            )
                        }  else {
                            return (
                                <Chart options={options5} type="bar" series={options5.series} />

                            )
                        }
                })()  
            }  












    </div>
    <div className='borda4'>
 
        <div className='top1'></div>
        <div className='topL1'></div>
        <div className='topR1'></div>
        <div className='bottom1'></div>
        <div className='bottomL1'></div><div className='span'>
        <div className='porcentD'>{dsc}</div>
        <div className='porcentP'>{valor}</div>
        <div className='porcentO'>✔ <a>{dsc2}</a></div>
        <div className='porcentO2'>❕ <a>{dsc3}</a></div>
        <div className='porcentO3'># <a>{dsc4}</a></div>     
        </div>
        <div className='bottomR1'></div>
        <div className='left1'></div>
        <div className='leftL1'></div>
        <div className='leftR1'></div>
        <div className='right1'></div>
        <div className='rightL1'></div>
        <div className='rightR1'></div>
        </div>
   
    </div>
  )
}
