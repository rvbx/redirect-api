/**
 * Retorna um número aleatório entre dois valores
 * @param min number
 * @param max number
 */
export const randomN = (min: number, max: number) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};


/**
 * Retorna true/false dependendo da probabilidade
 * @param pocentagem number
 */
export const probabilidade = (pocentagem: number = 50) => {
  return Math.ceil(Math.random() * 100) <= pocentagem;
};
