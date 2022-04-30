//Codigo cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);
console.log(`El area del cuadrado es: ${areaCuadrado}cm2`);

console.groupEnd()

//Codigo triangulo
console.group('Triangulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm.`);
console.log(`La altura del triangulo mide: ${alturaTriangulo}cm.`)
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm.`);
console.log(`El area del triangulo es: ${areaTriangulo}cm2.`);

console.groupEnd();

//Codigo circulos
console.group('Circulos');

const radio = 4;
const diametro= radio * 2;
const pi = Math.PI;
const perimetroCirculo = diametro * pi;
const areaCirculo = (radio * radio) * pi;

console.log(`El radio del circulo es: ${radio}cm.`);
console.log(`pi es igual a ${pi}.`);
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm.`)
console.log(`El area del circulo es: ${areaCirculo}cm2.`);

console.groupEnd();