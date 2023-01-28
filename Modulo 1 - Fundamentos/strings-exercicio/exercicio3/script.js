const phrase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
const phraseModified = phrase.replace("verde", "rosa").replace("azul", "laranja");

console.log(`Modified phrase includes green? ${phraseModified.includes("verde")} 
and orange? ${phraseModified.includes("laranja")}
`);

console.log(`Modified phrase UpperCase: ${phraseModified.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")}`);