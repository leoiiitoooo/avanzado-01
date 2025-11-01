import './App.css'
import Carta from './components/Cartas'
import Saludo from './components/saludo'
import DetalleCarta  from "./components/detalleCarta";
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
    <DetalleCarta
    ataque={122}
    nombre="Bulbasaur"
    defensa={80}
    descripcion="Bulbasaur, conocido como Fushigidane en Japón, es una especie ficticia de Pokémon de la franquicia Pokémon de Nintendo y Game Freak. Presentado por primera vez en los videojuegos Pokémon Rojo y Azul, fue creado por Atsuko Nishida y su diseño finalizado por Ken Sugimori."
    imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9awf72eHqsRCnipmmS8ngbXcgjrSSFEBjE4irb8c3q3c3RI7kv_XyqEjFHSKp7DMNYDXokFD3Ow2D8gtW_c-D01cCKLeLXiBLMwyxQ&s"
    numero={373}
    tipo="Veneno/Planta"
    />
  </div>

  )
}

export default App
