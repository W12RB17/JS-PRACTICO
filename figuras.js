//Codigo cuadrado
console.group('Cuadrados');

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd()

//Codigo triangulo
console.group('Triangulos');

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo circulos
console.group('Circulos');

function perimetroCirculo(radio){
    const diametro = radio * 2;
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();