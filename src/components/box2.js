import React from 'react'
import './box.css'
import Chart from "react-apexcharts";
import Pure from './pure';
export default function Box({chart, dsc, valor, dsc2, dsc3, dsc4}) {
 
  
      var options5 = {
        series: [{
        data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
        chart: {
        type: 'bar',
        width: 100,
        height: 135,
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
        <div className='chart2'>
        
        {
               
                                <Chart options={options5} type="bar" series={options5.series} />
                      
            }  












    </div>
    <div className='borda2'>
 
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
