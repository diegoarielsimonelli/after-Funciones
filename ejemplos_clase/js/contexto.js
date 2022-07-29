"use strict";



let variableGlobal = 30;

function pruebaContexto() {
    var variableLocal = 10;
    alert(`Valor global: ${variableGlobal} `)
}

variableGlobal = 20;

pruebaContexto();

variableGlobal = 50;

pruebaContexto();
console.log(variableLocal);