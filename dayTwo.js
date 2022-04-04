let alunoDanielPrimeiraNota = 10;
let alunoDanielSegundaNota = 6.5;
let alunoDanielTerceiraNota = 5.0;
let alunoDanielQuartaNota = 5.5;

let somaDasNotas = alunoDanielPrimeiraNota + alunoDanielSegundaNota + alunoDanielTerceiraNota + alunoDanielQuartaNota;

const mediaDasNotas = () => {

    mediaFinal = (somaDasNotas) / 4;

    console.log (`A sua média final foi ${mediaFinal}. É do tipo ${typeof mediaFinal}!`);


    if (mediaFinal >= 7.0) {

        console.log ("Parabéns! Você foi aprovado!")
        
    } else {
        
        console.log ("Reprovado! Você não atigiu a média. Estude mais!")

    }

}
mediaDasNotas();



/* function mediaNotas (mf) {

    mf = (somaDasNotas);
    console.log (`O resultado desta operação de soma, que mescla tipos de variáveis é ${mf}`);

}
mediaNotas(); */