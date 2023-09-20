// Maneras de llmar una función


var a = 50;
var b = 40 ; 
function multiplicar(x, y) {
    console.log(x * y);
}
 multiplicar(a, b);

// primero
 function sumaX(x){
    return x + 3;
 };
// segundo

var sumaX = function(x){
    return x + 3;
};

// tercero

var sumax = (x) => {
    return x + 3;
};