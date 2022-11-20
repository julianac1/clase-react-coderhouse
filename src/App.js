import Test from "./components/test";
import SaludadorCumpleanos from "./components/saludadorCumpleanos";

const App = ()=>{

  const nombre = 'Juliana';
  const saludo = `Hola ${nombre}`

  return(
    <div>
      <h1>Mi primer componente en React, mi nombre es {saludo} </h1>
      {/* <Test></Test> */}
      <SaludadorCumpleanos></SaludadorCumpleanos>
    </div>

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
