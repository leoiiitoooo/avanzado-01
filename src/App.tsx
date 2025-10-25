import './App.css'
import Carta from './components/Cartas'
import Saludo from './components/saludo'

function App (){
   const mostrarCarta = (numero: number, pinta: string) => {
    alert(`Carta de numero: ${numero} y de pinta ${pinta}`);
   };
   

  return (
   <div>
    <h1>Mi primer proyecto en react</h1>
    <h1>Hecho por Leoo</h1>
    <p>El avanzado es lo mejor ok?</p>
    <Carta numero ={1} pinta='Trebol🧩' mostrarCarta={mostrarCarta}/>
    <Carta numero ={4} pinta='Diamante💎'mostrarCarta={mostrarCarta}/>
    <Carta numero ={9} pinta='Picas🎃'mostrarCarta={mostrarCarta}/>
    <Carta numero ={10} pinta='Corazon❤'mostrarCarta={mostrarCarta}/>
    <Carta numero ={88} pinta='Rey de picas🐿'mostrarCarta={mostrarCarta}/>
    <Carta numero ={0} pinta='Reina de corazon👻'mostrarCarta={mostrarCarta}/>
    <Saludo/>
   </div>
  )
}

export default App
