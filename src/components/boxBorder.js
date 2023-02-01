import React from 'react'
import './border.css'
import Effect1 from './effect1'
import Box from './box'
import Box2 from './box2'
import Header from './nav'
import Menu from './menu'


export default function BoxBorder() {


  return (
    <div>
    <div className='back'></div>
 
 <Header/>
 <Menu/>
    <div className='line'>
 
        <Effect1 chart={2} 
        valor={'94%'}
         dsc={'Taxa de ganhos'} 
         dsc2={'Crescente'}
         dsc3={'Maior que ontem'}
         dsc4={'Blaze Double FlixTech'}
         />
      <Effect1 chart={4} 
        valor={'6%'}
         dsc={'Taxa de perdas'} 
         dsc2={'Decrescente'}
         dsc3={'Menor que ontem'}
         dsc4={'Blaze Double FlixTech'}
         />
           <Effect1 chart={1} 
        valor={'8%'}
         dsc={'Taxa de brancos'} 
         dsc2={'Crescente'}
         dsc3={'Maior que ontem'}
         dsc4={'Blaze Double FlixTech'}
         />
           <Effect1 chart={3} 
        valor={20}
         dsc={'Ganhos seguidos'} 
         dsc2={'Crescente'}
         dsc3={'Maior que últimos 3 dias'}
         dsc4={'Blaze Double FlixTech'}
         />
        </div>
        <div className='line2'>
          
        <Box2 chart={3} 
        valor={'100%'}
         dsc={'Ultimas 300 Rodadas'} 
         dsc2={'120 seguidas'}
         dsc3={'Maior que últimos 3 dias'}
         dsc4={'Usar Padrão agora'}
         />
                   <Box chart={4} 
        valor={20}
         dsc={'Ganhos seguidos'} 
         dsc2={'Crescente'}
         dsc3={'Maior que últimos 3 dias'}
         dsc4={'Blaze Double FlixTech'}
         />
          
           </div>
    </div>
    
  )
}
