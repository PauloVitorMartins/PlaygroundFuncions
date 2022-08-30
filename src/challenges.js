// Desafio 1
function compareTrue(word1, word2) {
  if(word1 === true && word2 === true){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2  
}

// Desafio 3
function splitSentence(frase) {
  let fraseDividida = frase.split(' ',)
  return fraseDividida;
}

// Desafio 4
function concatName(array) {

    let arrayParaJuntar =  array[array.length - 1] ;
    let arrayJunto = array[0];
    return (arrayParaJuntar + ', ' + arrayJunto)
  }


// Desafio 5
function footballPoints(wins, ties) {
   let pointsW = wins * 3;
   let pointsT = ties * 1;
  return pointsW + pointsT;
}

// Desafio 6
function highestCount(arraydenum) {
  let numeroMaior = arraydenum[0];
  for(let i = 1; i < arraydenum.length; i += 1){
    if(numeroMaior < arraydenum[i]){
      numeroMaior = arraydenum[i]
    }
  }
    let repeticoes = 0;
    for(let i in arraydenum){
      if(numeroMaior == arraydenum[i]){
        repeticoes += 1
      }
    }
    return repeticoes
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let distanciaGato1 = mouse - cat1;
  let distanciaGato2 = mouse - cat2;
   if(distanciaGato1 > distanciaGato2 && distanciaGato1 != mouse && distanciaGato1 >=0 ){
      return 'cat1';
    }
    else if (distanciaGato2 > distanciaGato1){
      return 'cat2';
    }
      return 'os gatos trombam e o rato foge';
  }



// Desafio 8
function fizzBuzz(arraydenum) {
  let arrayUm = [];
  for(let i in arraydenum){
     if(arraydenum[i]%3 === 0 && arraydenum[i]%5 === 0){
      arrayUm.push('fizzBuzz')
    }
   else if(arraydenum[i]%5 === 0 ){
    arrayUm.push('buzz')
    }
    else if(arraydenum[i]%3 === 0){
      arrayUm.push('fizz') 
    }
    else {
      arrayUm.push('bug!')
    } 
  }
  return arrayUm
}



// Desafio 9
function encode(word) {
  let stringUm = '';
  let palavraDividida = word.split('');
  for(let index in palavraDividida){
     if(palavraDividida[index] === 'a'){
       palavraDividida[index] = 1;
     } 
     
     else if(palavraDividida[index] === 'e') {
      palavraDividida[index] = 2;
     
     }
       else if(palavraDividida[index] === 'i')  {
        palavraDividida[index] = 3;
       }
    else if (palavraDividida[index] === 'o') {
      palavraDividida[index] = 4;
    }
     else if(palavraDividida[index] === 'u') {
      palavraDividida[index] = 5;
     }
    }
    for(let ix = 0; ix < palavraDividida.length; ix += 1){
        stringUm = stringUm + palavraDividida[ix];
    }
    return stringUm;
  }
  



function decode(numero) {
  let numeroDividido = numero.split('')
     for(let i in numeroDividido){
          if(numeroDividido[i] === '1'){
         numeroDividido[i] = 'a'
     } 
     
     else if(numeroDividido[i] === '2') {
        numeroDividido[i]= 'e'
  
     }
       else if(numeroDividido[i]=== '3')  {
       numeroDividido[i] = 'i'
        
       }
    else if (numeroDividido[i] === '4') {
       numeroDividido[i] = 'o'
     
    }
     else if(numeroDividido[i] === '5') {
       numeroDividido[i] = 'u'  
     } 
     }
     let numeroJunto = numeroDividido.join('')
     return numeroJunto;
 }

 
  
   
  


  


// Desafio 10
function techList(tech,people) {

    if(tech.length === 0){
      return "Vazio!"
    }
    let retorno = [];
    tech.sort()
    for(let i = 0; i <= tech.length - 1; i += 1){
         retorno.push({
           tech:  tech[i],
            name: people
                              })
    }
    return retorno
  }
  


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
