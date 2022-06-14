const { argumentLexerOptions } = require("@11ty/eleventy/src/Engines/Liquid")

function fnRecursiva (arg) {
    if (arg < 0) {
        return "llegamos a cero"
    }
    fnRecursiva(arg-1)
}

fnRecursiva(5)
// Factorial 4! = 4 * 3 * 2 * 1 = 24

function factorial (num) {
    if (num === 0 || num === 1) {
        return 1
    }
    else if (n < 0){
        return "ERROR. Numero negativo"
    }
    return num * factorial(num-1) /*
    no entro en el if ni en el else if, retorna un n (4) * factorial (4 - 1) es decir un 3 

    -->En la primera vuelta se pausa ejecutando 4 * 3
    -->En la segunda vuelta se pausa ejecutando 3 * 2
    -->En la tercera vuelta se pausa ejecutando 2 * 1

    Se crean muchos contextos de ejecución, donde todos los que estan en fila, simplemente estan esperando a que haya un corte y que la primera se ejecute, luego la segunda, etc....
    */
}

var resultadoo = factorial(4)

// SET

var array = [1, 2, 4, 2, 3, 4, 5, 6]
var nuevoSet = new Set(array)
console.log(array)
console.log(nuevoSet)


var test = {color: "marron"};
var test2 = {color: "blanco"};

var arr = [1, 1, 3, 5, 6, test, test2];
var nuevoSet = new Set(arr)

var arreglo = [
    1, 2, 2, 5, 5, 6, 
    test, 
    test2,
    {color: "blue",
    amigo: "juan"},
    function (param) {
        pass;
    },
];

var setNuevo = new Set (arreglo);
setNuevo.add(4)

console.log(arreglo)
console.log(setNuevo)

// pilas

let pila = [];

pila.push("juan")
pila.push("carlos")
pila.push("lucas")

console.log(pila)

pila.pop()

class Pila {

    constructor() {
        this.pila = []
    }
    addPila(elemento) {
        this.pila.push(elemento)
    }
    removePila() {
        this.pila.pop();
    }
    verPila () {
        console.log(this.pila)
    }
}

var nuevaPila = new Pila()


// llamemos los metodos

nuevaPila.addPila(5)
nuevaPila.addPila(74)
nuevaPila.addPila(59)
nuevaPila.addPila(85)
// nuevaPila = [5, 74, 59, 85]
nuevaPila.removePila() // nuevaPila = [5, 74, 59]
// nuevaPila.pop() // no sirve porque no pertenece a la clase pila

console.log(nuevaPila)
console.log(nuevaPila.verPila())

// COLAS - Queue
// FIRTS IN FIRST OUT

var queue= []
queue.push(1); // [1]
queue.push(1); // [1, 2]
var i = queue.shift() // la cola es [2]


class Cola {

    constructor() {
        this.cola = []
    }
    addCola(elemento) {
        this.cola.push(elemento)
    }
    removeCola() {
        this.Cola.pop();
    }
    verCola () {
        console.log(this.cola)
    }
}

var nuevaCola = new Cola()

nuevaCola.addCola(5)
nuevaCola.addCola(74)
nuevaCola.addCola(59)
nuevaCola.addCola(85)
// nuevaPila = [5, 74, 59, 85]
nuevaCola.removeCola() // nuevaPila = [5, 74, 59]
// nuevaPila.pop() // no sirve porque no pertenece a la clase pila

console.log(nuevaCola)
console.log(nuevaCola.verCola())





// ******************

// VIDEOS YOUTUBE RECURSIVIDAD

const conteoRegresivo = (a) => {
    if (a < 0) return 
    console.log(a)
    return conteoRegresivo(a - 1)
}

conteoRegresivo(10)

//*** 

//const axios = require("axios")

const llamarApi = async(url, llamados = 0) => {
    try {
        const result = await axios.get(url)

        console.log(result);
        return result
    } catch(e) { 
    if (llamados > 5) {
        return " "
    }
    console.log(e);
    return llamarApi(url, llamados + 1)
  }
}

llamarApi("https://jsonplaceholder.typicode.com/users")

//******* 
var resultado = sumar(10, 1, 0)
console.log(resultado)


function sumar(hasta, contador, resultado) {
    if (contador <= hasta) {
        resultado = resultado + contador
        contador ++
        return sumar(hasta, contador, resultado)
    } else {
        return resultado;
    }
}


//******** 

function contar (n) {
    if (n == 0) return;

    console.log(n)

    contar(n -1)
}

contar(10)

//*****
/*
function factorial //(n) {
  //  if (n === 0 || n === 1) {
  //      console.log(1)
        return
  //  }

    let res = 1

  //  for (let i = n; i > 0; i--) {
        res *= i
    //}
//}
*/

function factorial (n) {
    let res = 1
    if (n === 0 || n === 1) {
        res = 1; 
    } else {
        res = n * factorial(n - 1)
    }
    return res
}

console.log(factorial(5))

//*******

function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
}

let c = new Node ("C:/");
let users = new Node ("Users");
let system = new Node("System");

let file1 = new Node ("file.txt")
let file2 = new Node("imagen.jpg")
let file3= new Node("file.doc")

c.left = users
c.right = users

users.left = file1
users.right = file2

system.left = file3;


/* 

                C:/
           /            \
        users           system
    /    \              /     
file.txt imagen.jpg  file.doc  
*/

function recorrido (node) {
    if(node === null) return;
    
    console.log(node.data);

    recorrido(node.left);
    recorrido(node.right);
}
recorrido(c);

// ahora que me diga cuantos archivos tiene la estructura de datos



function recorrido (node) {
    if(node === null) return 0;

    let l = recorrido(node.left);
    let r = recorrido(node.right);
    
    if (node.left === null &&
        node.right === null &&
        node.data.indexOf(".") > 0) {
            // es un archivo
            return l + r + 1;
        } 

    return l + r
}
recorrido(c);


