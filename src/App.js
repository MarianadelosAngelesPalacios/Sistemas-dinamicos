import React from 'react'
import './App.css'
import './Boton.css'

export const App=()=> {
  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  )
}

// export const Boton_saber_mas=()=>{
//   return (
//     <div>
//       <button className="Sobre_mi_boton" type="button">Sobre mi</button>
//     </div>
//   )
// }

// const _onMouseMove=()=>{
//   const width =refs.Contenedor.clientWidth
//   const height =refs.Contenedor.clientHeight <div className="Contendor" onMouseMove={_onMouseMove} ref="Contendor"> 
//   return console.log(width,height)
// }

// export const Portada=()=> {
//   return (
//     <div>
      
//       <div className="Contendor" >
//         <div className="Portafolio">
//           <h1 className="Por">Por</h1>
//           <h1 className="Por">Ta</h1>
//           <h1 className="Por">Fo</h1>
//           <h1 className="Por">Lio</h1>
//         </div>
//         <div className="Portafolio-clone">
//           <h1 className="Por-clone">Por</h1>
//           <h1 className="Por-clone">Ta</h1>
//           <h1 className="Por-clone">Fo</h1>
//           <h1 className="Por-clone">Lio</h1>
//         </div>
//       </div>
//    </div>
//   )
// }

export const About_Boton=(props)=>{
  return(
    <div>
      <button className="Sobre_mi_boton" type="button">{props.Boton}</button>
    </div>
  )
}