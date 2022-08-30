let vector = [1,2,3,4,5,6,7,8,9,10];
let auxiliar,  mitad = vector.length/2;

for(let i=0; i<mitad; i++){
    auxiliar = vector[i];
    vector[i] = vector[vector.length-i-1];
    vector[vector.length-i-1] = auxiliar;
}

console.log(vector);

// CASTELL RODRÍGUEZ RICARDO 3H