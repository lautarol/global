// if / esle

var edad = 18;

// if (edad >= 18) {
//   console.log('es mayor de edad');
// }else {
//   console.log('es menor de edad');
// }

// switch (edad) {
//   case (edad >= 13 && edad < 18):
//     console.log('es adolescente');
//     break;
//   case (edad < 18):
//     console.log('es menor de edad');
//     break;
  
// }
let nombre = 'pepe';

// function esMayorDeEdad(edad) {
//   nombre = 'juan';
//   if (edad >= 18) {
//     alert(nombre + ' ' + 'es mayor de edad');
//   } else {
//     alert(nombre + ' ' + 'es menor de edad');
//   }
// }


console.log('edad', edad);
// console.log('esMayorDeEdad(18):', esMayorDeEdad(17));

const a = 1;
const b = 3;
// operador && and

if (a === 1 && (b === 2 || b === 3)) {
  console.log('a es 1 y b es 2 o b es 3');
}

if (a === 2 || b === 2) {
  console.log('a es 1 o b es 2');
}

// const edad = window.prompt('ingrese su edad');

// esMayorDeEdad(edad);
console.log('nombre', nombre);
//   alert('es mayor de edad');
// }else {
//     alert('es menor de edad');
// }


//for

for (let i = 0; i < 10; i++) {
  console.log('for', i);
}
function pararWhile(){
  i=10;
}
// while
let i = 0;
while (i < 10) {
  console.log('while', i);
  i++;
}

// do while
i = 0;
do {
  console.log('do while', i); // 0, 1, 2
  i++;
} while (i < 3);

const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const cantidadElementos = arreglo.length;


for (let i = 0; i < cantidadElementos-1 ; i++) {
  console.log('arreglo', arreglo[i]);
}

const productos = [
  {
    nombre: 'producto 1',
    precio: 100
  },
  {
    nombre: 'producto 2',
    precio: 200
  },
  {
    nombre: 'producto 3',
    precio: 300
  },
  {
    nombre: 'producto 4',
    precio: 400
  },
  {
    nombre: 'producto 5',
    precio: 500
  }
];
// array.forEach

arreglo.forEach((elemento) => {
  console.log(elemento + 2);
})

productos.map((producto) => {
  console.log('nombre:', producto.nombre);
})

const productosFiltrados = productos.filter((producto) => {
  return producto.precio >= 300;
})

console.warn('productosFiltrados', productosFiltrados);

const arregloMultiplicado = arreglo.map((elemento) => {
  return elemento * 2;
})

console.log('arregloMultiplicado', arregloMultiplicado);
