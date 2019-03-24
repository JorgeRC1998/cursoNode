const fs = require('fs');

let Cursos = {
    Curso_1:{
        id: 100,
        nombre: "Bases de datos",
        duracion: "1 mes",
        costo: 100000
    },
    Curso_2:{
        id: 200,
        nombre: "Redes 1",
        duracion: "1 mes",
        costo: 150000    
    },
    Curso_3:{
        id: 300,
        nombre: "Lenguajes de programacion",
        duracion: "2 meses",
        costo: 50000
        },
    Curso_4:{
        id: 400,
        nombre: "Compiladores",
        duracion: "15 dias",
        costo: 75000
        },
    Curso_5:{
        id: 500,
        nombre: "Ingenieria del software 2",
        duracion: "1 mes",
        costo: 200000
        },    
}

const parametros = {
    ID:{
        demand:true,     
        alias: 'i'
    },
    nombreEstudiante:{
         demand:true,     
        alias:'n'
    },
    cedula:{
        demand:true,     
        alias:'c'
    }
}

let time=0;
var Array = [];
var aux=0;
var express = require('express')
var app = express()
function mostrarCursos(){
for(let i in Cursos){
    time = time + 2000;
    setTimeout(function(){              
    console.log(`${i} = Nombre: ${Cursos[i].nombre} ID: ${Cursos[i].id} Duración: ${Cursos[i].duracion} \n Costo: ${Cursos[i].costo}`);
},time);
}
}

const argv = require('yargs')
            .command('inscribirse' , 'Inscripción' , parametros)
            .argv;


    let crearArchivo = (id , nombre , cedula , nombrecurso , duracion, costo) => {
        texto = 'el nombre del estudiante es: ' + nombre + '\n' +
        ' identificado con la cédula: ' + cedula + ' desea tomar el curso con ID: ' + id + ' denominado: ' + nombrecurso +'\n'
        + ' con una duración de: ' + duracion + ' y con un valor de: ' + costo + " pesos";

    }

 
app.get('/', function (req, res) {
  res.send(texto);
})
 
app.listen(3000)
    
    for(let i in Cursos){
        Array.push(Cursos[i].id);
    }

    for(var i = 0; i<Array.length;i++){
    if(argv.ID==Array[i]){
        aux=aux+1;
        }
    }

    for(let i in Cursos){
    if(Cursos[i].id==argv.ID){
        crearArchivo(argv.ID , argv.nombreEstudiante , argv.cedula , Cursos[i].nombre , Cursos[i].duracion , Cursos[i].costo);   
    }
    if(aux!=1){
        console.log("Error, Ingresa un Id valido por favor");
        mostrarCursos();
        break;
    }
}


    

