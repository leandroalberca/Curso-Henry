function viajar(destino) {
    if (destino === "brasil"){
        console.log("gire a la izquierda");
    } else if (destino === "argentina"){
        console.log("gire a la derecha");
    } else {
        console.log("nos perdimos");
    }  
}
viajar("poto");

function puedeMandejar(edad){
    if(edad >= 18) {
        console.log("true");
    }else {
        console.log("false");
    }
}
puedeMandejar(20);

Math.random (10);

console.log(21 % 5);