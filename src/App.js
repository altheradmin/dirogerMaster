import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoxRender from './components/boxRender';

import Login from './pages/Login';
import Opcoes from './pages/Opcoes';
import UnderFlix from './pages/Underflix';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Routes>
     <Route exact path="/login" element={<Login />}/>
     <Route exact path="/" element={<UnderFlix />}/>
     <Route exact path="/opcoes" element={<Opcoes />}/>
     <Route exact path="/product" element={<BoxRender/>} />
     </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
