function receitadebRIGADEIRO(porcoes){
    // Receita de brigadeiro

    const qtdLeiteCondensado = 1;
    const qtdAchocolatado = 1;
    const qtdManteiga = 1;
    const qtdGranulado = 1;
    let saida = `Receita de Brigadeiro para ${porcoes} de pessoas\n`;
    saida = saida + `${qtdAchocolatado * porcoes} achocolatado, ${qtdGranulado * porcoes} qtdGranulado, 
    ${qtdManteiga * porcoes} manteiga, ${qtdLeiteCondensado * porcoes} leite condensado `;
     
    return saida;
          
}

const resultadoReceitaBrigadeiro = receitadebRIGADEIRO(5);
//console.log(resultadoReceitaBrigadeiro);


let imprimirReceita = `

1. Em uma panela, coloque o leite condensado, a manteiga e o chocolate em pó.
2. Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.
3. Deixe esfriar e faça pequenas bolas com mão passando a massa no granulado. \n`;


const resul1 = receitadebRIGADEIRO();
//console.log(result);

const resulta = (resul1+ imprimirReceita).replaceAll("e","u");
//console.log(resulta);
const aad = resulta.replaceAll("a", "u");
//console.log(aad);

//console.log(imprimirReceita);

const lowerCase = aad.toUpperCase();
console.log(lowerCase);


                   


