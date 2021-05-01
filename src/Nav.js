import React from 'react'
import './Nav.css'
import {BrowserRouter, BrowserRouter as NavLink, Route} from 'react-router-dom'


// export const Nav=()=>

export class Nav extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <Route>
      <div>
        <Route path="/Contacto" exact render={
        ()=>{
          return(
            <h1>hello mariana</h1>
          )
        }
        }/>
        <nav className="Nav">
        <button className="Chapter" type="button">Capítulo</button>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/Pdf">Pdf</NavLink>
          </li>
        </ul>
        </nav>
      </div>
      </Route>
      </BrowserRouter>
    )
  }
}
  