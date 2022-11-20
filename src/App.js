import Test from "./components/test";
import SaludadorCumpleanos from "./components/saludadorCumpleanos";
import Boton from "./components/Boton";
import Title from "./components/Title";
import Modal from "./components/Modales";


const App = ()=>{

  const nombre = 'Juliana';
  const saludo = `Hola ${nombre}`

  return(

    <Modal
      title = 'Mi primer modal'>
      {/* <h1>Este es mi primer modal</h1> */}
      <p>lorem</p>
      <h2>Otro titulo</h2>
      <p>lorem</p>

    </Modal>
    
    // <div>

    //   <Title
    //   nombre='Titulo'
    //   color='blue'
    //   ></Title>


    //   <h1>Mi primer componente en React, mi nombre es {saludo} </h1>
    //   <Boton
    //   nombres = "Presione aca"
    //   handleOnClick = {() => {console.log('Boton presionado')}}
    //   ></Boton>

      
    //   {/* <Test></Test> */}
    //   <SaludadorCumpleanos
    //   nombre = 'Juliana'
    //   edad = {32}
    //   ></SaludadorCumpleanos>

    //   <Boton
    //   nombres = "Presione aca para salir"
    //   handleOnClick = {() => {console.log('Usuario salio')}}
    //   ></Boton>


    // </div>

  )
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
