let array = new Array();

for (let i = 0; i < 1000; i++) // Creamos los 1000 números.
    array.push(1);

for (let i = 2; i <= 1000; i++) {
    if (array[i] == 1) {
        for (let x = i * 2; x < 1000; x += i)
            array[x] = 0;
        console.log(i);
    }
}

// CASTELL RODRÍGUEZ RICARDO 3H