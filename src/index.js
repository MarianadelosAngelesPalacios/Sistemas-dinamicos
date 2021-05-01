import React from 'react';
import ReactDOM from 'react-dom';
import {About_Boton} from './App'
import {Nav} from './Nav'
import {Portada} from './App'
import './index.css'

const Main=()=>{
  return(
    <div>
      <Nav/>
      <About_Boton Boton='Sobre mi'/>
    </div>
  )
}


ReactDOM.render(<Main/>, document.getElementById('root'))

