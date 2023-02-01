import React, { useEffect } from 'react'
import './box3.css'
import Chart from "react-apexcharts";
import Pure from './pure';
import BoxRender from './boxRender';
import { useState } from 'react';
import axios from 'axios';
export default function Box3({chart, dsc, valor, dsc2, dsc3, dsc4}) {
  const [eml,setEml] = useState('');
  const [ident,setIdent] = useState('');
  const [senha,setSenha] = useState('');
  const [loss,setLoss] = useState('');
  const [stpWin,setStpWin] = useState('');
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
  

      function inicistart() {
        var dados = {usr: eml, pss: senha, stpW: stpWin, stpL: loss, currentClient: ident}
        axios.post(`http://localhost:8787/startVps`,  dados )
        .then(res => {
          console.log(res.data);
        })
      }





   
      function hdle() {
        var dados = {usr: eml, pss: senha, stpW: stpWin, stpL: loss}
        axios.post(`http://localhost:8585/ini`,  dados )
        .then(res => {
        
          console.log(res.data);
        })
      }

      function hdle2() {
      
        axios.post(`http://localhost:8585/info`,  'dados' )
        .then(res => {
      
          setIdent(res.data[0].idd)
          setEml(res.data[0].email);
          setSenha(res.data[0].pass);
          setLoss(res.data[0].stopLoss);
          setStpWin(res.data[0].stopWin)
        })
      }

useEffect(()=> {


hdle2();

},[])

    return (
    <div className='pai2'>
        <div className='chart2'>
        
        {
       
            }  

    </div>
    <div className='borda8'>
 
        <div className='top1'></div>
        <div className='topL1'></div>
        <div className='topR1'></div>
        <div className='bottom1'></div>
        <div className='bottomL1'></div><div className='span'>
   
        </div>
        <div className='bottomR1'></div>
        <div className='left1'></div>
        <div className='leftL1'></div>
        <div className='leftR1'></div>
        <div className='right1'></div>
        <div className='rightL1'></div>
        <div className='rightR1'></div>
        </div>
   <div className='opcoesM'>
 

   <li className='titulo'>Configurações</li>
   <li>Padrões/<a className='signal'>Sinal</a><button className='botaoSinal'>Sinal</button> </li>
   <li className="padrao">Padrão 1 
   <div className="fundo">
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'white'}/>
   </div>
    </li>
   <li className="padrao">Padrão 2
   <div className="fundo">
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'white'}/>
   </div>

   </li>
   <li className="padrao">Padrão 3
   <div className="fundo">
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   <BoxRender cor={'black'}/>
   </div>

   </li>
   <li className="padrao">Padrão 4
   <div className="fundo">
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   <BoxRender cor={'redd'}/>
   </div>

   </li>
   <li className="subMenu">Gale
   <button className='botaoSinal2'>x2</button>StopLoss 
   <input className='input01' placeholder='R$' onChange={(e)=> 
      setLoss(e.target.value)
   } value={loss} ></input>
   StopWin <input className='input01' placeholder='R$' onChange={(e)=> 
      setStpWin(e.target.value)
   } value={stpWin}></input>
   </li>
   <li className="subMenu">Conta Blaze
 
   <input className='input03' placeholder='Email'    onChange={(e) =>
             setEml(e.target.value)
            } value={eml}></input>
    <input className='input03' placeholder='Senha'    onChange={(e) =>
             setSenha(e.target.value)
            } value={senha} type="password"></input>
   </li>
   <li className="padrao9">

   <button className='botaoSave' onClick={hdle}>Salvar</button>
   <button className='botaoSave' onClick={inicistart}>Start</button>

   </li>

      </div>
    </div>
    
  )
}
