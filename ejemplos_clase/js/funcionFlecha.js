"use strict";

console.log("Declaración de función una función común");
function suma(a, b) {
    return a + b;
 }
  
 let resultado = suma(2, 3);
 console.log(resultado);


 console.log("Declaración de función una función flecha");
 // Esta función flecha tiene exactamente el mismo compartamiento
 // que la función "suma"
 const sumaArrow = (a, b) => {
    return a + b;
 }
 resultado = sumaArrow(2, 3);
 console.log(resultado);

 console.log("Declaración de función una función flecha reducida a una línea");
 const sumaArrowSimple = (a, b) => a + b;
 resultado = sumaArrowSimple(2, 3);
 console.log(resultado);



 

 console.log(restar(10));


 function suma(a, b) {
   return a + b;
}
 
const sumar=(a,b)=>  a+b;



let numero=3;
const restar= ()=> {
   //codigo
   //Codigo//
   //codigo
      return numero*2;
}

console.log(restar())