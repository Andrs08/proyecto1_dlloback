function findMaxAction(lista: number[]): number {
  let mayor: number = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
  }
  return mayor;
}

export default findMaxAction;