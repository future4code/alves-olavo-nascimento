// Exercício 4**

// Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` 
// passam por um processo de conversão de typescript para Javascript para que 
// possam ser lidos e executados. Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no 
// terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use 
// comentários para responder as questões.

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse
// arquivo typescript em um arquivo javascript?

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// // como já criei os scripts

// "scripts"
// "startExer1": "tsc && node ./build/exercicio-1.js",
//     "startExer2": "tsc && node ./build/exercicio-2.js",
//         "startExer3": "tsc && node ./build/exercicio-3.js",
//             "startExer4": "tsc && node ./build/exercicio-4.js"

// apenas rodo o comando npm startExer4

// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo 
// seria diferente? Se sim, descreva as diferenças.

// não, pois usando o scrip posso rodar ele de qualquer pasta, contanto que 
// esteja dentro da pasta onde se encontras os escripts

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso
// conheça, explique como fazer.

// na verdade uso apnas o tsc, se tiver varios arquivos .ts  na mesma pasta e ele tranpila todos de uma vez.