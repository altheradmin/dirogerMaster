import React from 'react'
import styled from 'styled-components'

export default function Pop() {
  return (
    <Container>
<div className='pop'>
    <a className='close'>X</a>
 <li className='ref0'>0 x 0 = <a></a></li>
<li className='ref1'>0 x 1 = <a></a></li>
<li className='ref2'>0 x 2 = <a></a></li>
<li className='ref3'>0 x 3 = <a></a></li>
<li className='ref4'>0 x 4 = <a></a></li>
<li className='ref5'>0 x 5 = <a></a></li>
<li className='ref6'>1 x 0 = <a></a></li>
<li className='ref7'>1 x 1 = <a></a></li>
<li className='ref8'>1 x 2 = <a></a></li>
<li className='ref9'>1 x 3 = <a></a></li>
<li className='ref10'>1 x 4 = <a></a></li>
<li className='ref11'>1 x 5 = <a></a></li>
<li className='ref12'>2 x 0 = <a></a></li>
<li className='ref13'>2 x 1 = <a></a></li>
<li className='ref14'>2 x 2 = <a></a></li>
<li className='ref15'>2 x 3 = <a></a></li>
<li className='ref16'>2 x 4 = <a></a></li>
<li className='ref17'>2 x 5 = <a></a></li>
<li className='ref18'>3 x 0 = <a></a></li>
<li className='ref19'>3 x 1 = <a></a></li>
<li className='ref20'>3 x 2 = <a></a></li>
<li className='ref21'>3 x 3 = <a></a></li>
<li className='ref22'>3 x 4 = <a></a></li>
<li className='ref23'>3 x 5 = <a></a></li>
<li className='ref24'>4 x 0 = <a></a></li>
<li className='ref25'>4 x 1 = <a></a></li>
<li className='ref26'>4 x 2 = <a></a></li>
<li className='ref27'>4 x 3 = <a></a></li>
<li className='ref28'>4 x 4 = <a></a></li>
<li className='ref29'>4 x 5 = <a></a></li>
<li className='ref30'>5 x 0 = <a></a></li>
<li className='ref31'>5 x 1 = <a></a></li>
<li className='ref32'>5 x 2 = <a></a></li>
<li className='ref33'>5 x 3 = <a></a></li>
<li className='ref34'>5 x 4 = <a></a></li>
<li className='ref35'>5 x 5 = <a></a></li>



</div>
    </Container>

  )
}
const Container = styled.div`
.close{
    right: 30px;
    position: absolute;
    font-size: 30px;
}
.pop{
    padding: 30px;
    background-color: orange;
    width: 80%;
    height: 80%;
    position: fixed;
    left: 10%;
    display: none;
    overflow-y: scroll;
    text-decoration: none;
    list-style-type: none;
}
`
