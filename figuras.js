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

function calcularPerimetroCuadrado(){
    const  value = document.getElementById("inputCuadrado").value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const value = document.getElementById("inputCuadrado").value;

    const area = areaCuadrado(value);

    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("inputLado1").value);
    const lado2 = parseInt(document.getElementById("inputLado2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = parseInt(document.getElementById("inputBase").value);
    const altura = parseInt(document.getElementById("inputAltura").value);

    const area = areaTriangulo(base, altura);

    alert(area);
}