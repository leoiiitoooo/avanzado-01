type Props = {
    nombre: string;
    imagen: string;
    fecha: string;
    ultimoMensaje: string;
}

const Contacto = ({
   nombre,
   imagen,
   fecha,
   ultimoMensaje
}:Props)=>{
return (
    <div>
        <img
        className="border-4 white-500 size-14"
        src={imagen}
        alt={nombre}
        ></img>
        <div className="flex justify-between border-4 w-full"></div> 
        <p>{nombre} </p>
        <p>{fecha} </p>
        <p>{ultimoMensaje} </p>
    </div>
    )}
export default Contacto
 