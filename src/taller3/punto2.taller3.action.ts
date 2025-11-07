function twoSumAction(lista: number[], entero: number): number[] {
  let lista2: number[] = [];
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i] + lista[j] === entero) {
        lista2.push(i);
        lista2.push(j);
      }
    }
  }
  return lista2;
}

export default twoSumAction;
