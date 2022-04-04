let alunoDanielPrimeiraNota = 10;
let alunoDanielSegundaNota = 8.5;
let alunoDanielTerceiraNota = 7.0;
let alunoDanielQuartaNota = 5.5;

let somaDasNotas = alunoDanielPrimeiraNota + alunoDanielSegundaNota + alunoDanielTerceiraNota + alunoDanielQuartaNota;

/* const mediaDasNotas = () => {

    mediaFinal = (somaDasNotas) / 4;

    console.log (mediaFinal, typeof mediaFinal);

}
mediaDasNotas(); */


function mediaNotas (mf) {

    mf = (somaDasNotas) / 4;
    console.log (mf);
}
mediaNotas();