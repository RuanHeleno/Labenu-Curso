let idade = 19;
let isMaiorIdade = true;
let isCursandoOutraFaculdade = false;

const ensinoMedio = (idade, maiorIdade, faculdade) => {
    if(idade >= 18) console.log("A pessoa é maior de idade");
    else console.log("A pessoa é menor de idade");

    if(maiorIdade) console.log("A pessoa concluiu o ensino médio");
    else console.log("A pessoa não concluiu o ensino médio");

    if(faculdade) console.log("A pessoa está cursando faculdade");
    else console.log("A pessoa não está cursando faculdade");
}

ensinoMedio(idade, isMaiorIdade, isCursandoOutraFaculdade);