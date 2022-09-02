class Dado {
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
}

class Tablero {
    constructor(){
        this.casillas = [0,36,0,0,0,0,7,23,0,0,0,0,0,0,11,-10,0,0,0,0,21,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,-21,0,0,-38,0,16,0,0,0,0,0,0,0,0,0,0,-43,0,-4,0,0,0,0,0,0,
            20,0,0,-21,0,0,0,20,0,0,0,0,0,0,0,0,7,0,0,0,0,-2,0,0,-20,0,0,0,-19,0];
    }
    
    checarCasillas(numero){
        return this.casillas[numero];
    }
}

class Jugador{
    constructor(numero){
        this.position = 0;
        this.numero = numero;
    }

    turno(dado){
        return dado.lanzar();
    }

    avanzar(numero){
        this.position+=numero;
        if(this.position>100){
            this.position=100;
        }
    }

    verificarCasillas(){
        this.position += tablero.checarCasillas(this.position-1)
    }
}

let lanzamiento = new Dado();
let jugador1 = new Jugador(1);
let jugador2 = new Jugador(2);
let tablero = new Tablero();


do{
    jugador1.avanzar(jugador1.turno(lanzamiento));
    jugador1.verificarCasillas();
    jugador2.avanzar(jugador2.turno(lanzamiento));
    jugador2.verificarCasillas();

    console.log(`Jugador 1 en la posición ${jugador1.position}`);
    console.log(`Jugador 2 en la posición ${jugador2.position}`);
}while(!(jugador1.position==100 || jugador2.position==100));

console.log("-------------------------------------");

if(jugador1.position==jugador2.position){
    console.log("EMPATE");
}else if(jugador1.position>jugador2.position){
    console.log("Él jugador 1 ganó.");
}else{
    console.log("Él jugador 2 ganó.");
}

// CASTELL RODRÍGUEZ RICARDO 3H