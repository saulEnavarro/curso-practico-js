//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
function perimetroCuadrado(lado){
return lado*4
}
function areaCuadrado(lado){
return lado*lado
}

console.groupEnd()

//Código del Triangulo

console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const altura = 5.5;

function perimetroTriangulo(ladoT1,ladoT2,base){
return (ladoT1+ladoT2+base)
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}


//Código del Circulo 
const radio=4
const diametro=8
const pi=3.1416
const pi2 = Math.PI

function diametroCirculo(radio){
    return radio*2
}

function perimetroCirculo(radio){ 
    const diametro = diametroCirculo(radio)
    return diametro*pi2    
}


function areaCirculo(radio){
    return pi2*(radio*radio)
}



//Interactuando con el HTML
function CalcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value =input.value;
    const perimetro=perimetroCuadrado(value)
    alert(perimetro)
}
function CalcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value =input.value;
    const area = areaCuadrado(value)
    alert(area)
}
//Calculo de Triangulo
function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTri1");
    const input2 = document.getElementById("InputTri2");
    const input3 = document.getElementById("InputTri3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro =perimetroTriangulo(value1,value2,value3)
    alert(perimetro);

}
function CalcularAreaTriangulo(){
    const input1 = document.getElementById("InputTri3")
    const input2 = document.getElementById("InputTri4")
    const value1 = input1.value;
    const value2 = input2.value;
    const area = areaTriangulo(value1,value2)
    alert(area)
}
//Calculo de circulo
function CalcularPerimetroCirculo(){
    const input1 = document.getElementById("InputCir");
    const value1 = parseInt(input1.value);

    const perimetro =perimetroCirculo(value1)
    alert(perimetro);

}
function CalcularAreaCirculo(){
    const input1 = document.getElementById("InputCir")
    const value1 = input1.value;
    const area = areaCirculo(value1)
    alert(area)
}