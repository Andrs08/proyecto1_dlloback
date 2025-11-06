function sumAction(lista: number[]): number {
  let contador: number = 0;
  for (let i = 0; i < lista.length; i++) {
    contador += lista[i];
  }
  return contador;
}

export default sumAction;