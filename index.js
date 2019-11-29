const padStart = require('pad-start');

/**
 * Calcula os fatores do dígito verificador
 * @param {String} barcode 
 */
const calculaFatoresDv = (barcode) => {
  let indice = barcode.length - 1;
  let fator = 1
  let totalDv = 0;
  while(!(indice < 0)){
    if(indice != 4){
      if(fator == 1){
        fator = 2 ;
      } else {
        fator = 1 ;
      }
      let result = padStart((barcode[indice] * fator).toString(), 2, 0);
      totalDv += Number(result[0]) + Number(result[1]);
    }
    indice--;
  }
  
  let soma = totalDv;
  soma = Math.floor(soma/10);
  soma = soma * 10;
  digito = totalDv - soma;

  if(digito != 0){
    digito = 10 - digito;
  }
  if(digito == 10){
    digito = 0;
  }
  
  return digito;
}

/**
 * Substitui o dígito verificador do código de barras
 * @param {String} barcode
 * @param {Number} chr
 */
const replaceDigito = (barcode, chr) => {
  return barcode.substr(0, 3) + chr.toString() + barcode.substr(4);
} 

/**
 * Retorna o dígito verificador do boleto no padrão febraban
 * @param {String} barcode - Código de barras com 44 caracteres com a quarta posição (dígito) substituído por zero
 */
exports.getDigitoVerificador = (barcode) => {
  return calculaFatoresDv(barcode);
}

/**
 * Retorna o código de barras atualizado com o dígito verificador calculado
 * @param {String} barcode - Código de barras com 44 caracteres com a quarta posição (dígito) substituído por zero
 */
exports.getCodigoBarrasDv = (barcode) => {
  const digito = calculaFatoresDv(barcode);
  return replaceDigito(barcode, digito);
}