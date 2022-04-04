/* 
* 
* Sendo Calculo de Área Quadrada 
*
*/

let paredeAComprimento = 3.00;
let paredeBComprimento = 8.90;
let r = 5.90; 
let s = 2.50;
let t = 1.15;
let v = 0.98;
let x = 1.50;
let z = 2.78;

let paredeAltura = 2.80;

const somaValores = paredeAComprimento + paredeBComprimento + r + s + t + v + x + z;

const areaQuadrada = () => {
    
    resultado = (somaValores) * paredeAltura;
    return resultado;
}
areaQuadrada();
console.log(`O total de área da sala de treinamento é ${resultado} m²`);




/* 
*
* Calculo de Área Cubica 
*
*/

let tanqueLadoA = 2.0;
let tanqueLadoB = 2.0;
let tanqueLadoC = 2.0;
let tanqueLadoD = 2.0;

let tanqueAltura = 4.0;

const somaLados = tanqueLadoA + tanqueLadoB + tanqueLadoC + tanqueLadoD;

const metroCubico =  () => {

    resultadoMetroCubico = (somaLados) * tanqueAltura;
    return resultadoMetroCubico;

}
metroCubico();
console.log (`Este tanque tem ${resultadoMetroCubico} m³`);