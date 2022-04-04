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
console.log(`1) O total de área da sala de treinamento é ${resultado} m²`);



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
console.log (`2) Este tanque tem ${resultadoMetroCubico} m³`);



/* 
*
* Calculo de Área Linear 
*
*/

let areaFabricaComprimentoA = 50.0;
let areaFabricaComprimentoB = 27.0;
let areaFabricaComprimentoC = 15.0;
let areaFabricaComprimentoD = 2.30;
const fabrica = (areaFabricaComprimentoA + areaFabricaComprimentoB + areaFabricaComprimentoC + areaFabricaComprimentoD);

let areaFerramentariaA = 12.85;
let areaFerramentariaB = 12.85;
let areaFerramentariaC = 2.15;
const ferramentaria = (areaFerramentariaA + areaFerramentariaB + areaFerramentariaC);

let estacionamentoLadoA = 39.85;
let estacionamentoLadoB = 29.90;
const estacionamento = (estacionamentoLadoA + estacionamentoLadoB);

const somaDasAreas = (fabrica + ferramentaria + estacionamento);

const metrosLineares = () => {

    resultadoDaSoma = somaDasAreas;
    return resultadoDaSoma;

}
metrosLineares();
console.log(`3) O quatitativo de metros lineares levantandos no dia 04/04/2022 é de ${resultadoDaSoma}`);
