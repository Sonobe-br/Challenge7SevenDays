let valorSalario = 4000;
let planoDeSaude = 100;
let cestaBasica = 10;

let salarioBruto = valorSalario + planoDeSaude + cestaBasica; 

let inss = 90;

const calculoSalario = () => {
    
    let resultado = parseFloat(salarioBruto) -= inss;
    return resultado;
    
}
calculoSalario();
console.log(resultado); 



