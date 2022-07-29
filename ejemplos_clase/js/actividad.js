/* Definir una función flecha que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.

Utilizar los métodos .toUpperCase() y .toLowerCase() */

const cadena=(cadena1)=>{
  if(cadena1==cadena1.toUpperCase()){
    cadena1+="tiene mayusculas";
  } else if(cadena1==cadena1.toLowerCase()){
    cadena1+="Tiene minisculas";
  } else{
    cadena1+="tiene minusculas y mayusculas";
  }
  return cadena1;

}

console.log(cadena("Diego"));