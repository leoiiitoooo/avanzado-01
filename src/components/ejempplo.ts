type Persona ={
    nombre: string;
    apellido: string;
    edad: number;
    cedula: string;
    telefonos?: string[]; //lista opcional
    familia: Persona[
           
    ]
}

const familia : Persona[] =[{
    nombre : "Edwards",
    apellido : "Mendez",
    edad : 20,
    cedula : "14.456.789",
}, {
      nombre : "Maria",
    apellido : "Perez",
    edad : 15,
    cedula : "12.075.489",
}, {
      nombre : "Gabriel",
    apellido : "Mendoza",
    edad : 30,
    cedula : "10.859.024",
}];