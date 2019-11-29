declare module 'dv-febraban' {
  /**
   * Retorna o dígito verificador do boleto no padrão febraban
   * @param barcode - Código de barras com 44 caracteres com a quarta posição (dígito) substituído por zero
   */
  export function getDigitoVerificadorGeral(barcode: string): number;

  /**
   * Retorna o código de barras atualizado com o dígito verificador calculado
   * @param barcode - Código de barras com 44 caracteres com a quarta posição (dígito) substituído por zero
   */
  export function getCodigoBarrasDv(barcode: string): string;

  /**
   * Retorna a linha digitável de um código de barras
   * @param barcode - Código de barras completo
   */
  export function getLinhaDigitavel(barcode: string): string;
}