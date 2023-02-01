import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
    <button className='btnM'>Over 2.5</button>
    <button className='btn2'>Over 1.5</button>
   <a>WinRate: </a><button className='btn3'>%</button>
    </Container>
  )
} 
const Container = styled.div`
a{
    margin-left: 20px;
}
.btnM {
    background-color: red;
    margin-left: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 50px;
}
.btn2 {
    background-color: red;
    margin-left: 9px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 50px;
}
.btn3 {
    background-color: orange;
    margin-left: 9px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 50px;
}


`
