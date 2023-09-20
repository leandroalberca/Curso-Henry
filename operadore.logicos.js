function operadorOr(str){
    if (str === "Henry" || str.length < 2) console.log (true);
    else console.log (false);
}
operadorOr("Henry");

function negacionOr(permiso){
    if(permiso !== true) console.log ("tiene permiso ");
};

negacionOr(false);

function condicionCompleja(numero){
    if(numero > 9 && numero %2 === 0 || numero === 3) console.log (true);
    else console.log (false);
};  

condicionCompleja(10);
condicionCompleja(9);
condicionCompleja(3);
condicionCompleja(5);
1           // true
0           // false
-1          // true
true        // true
false       // false
'string'    // true
null        // false
undefined   // false
//[]          // truegit clo