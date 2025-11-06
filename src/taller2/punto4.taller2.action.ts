function missingNumbersAction(lista: number[]): number[] {
  for (let i = 0; i - 1 < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[j] < lista[i]) {
        let temp: number = lista[i];
        lista[i] = lista[j];
        lista[j] = temp;
      }
    }
  }
  let numero: number = lista[0];
  let lista2: number[] = [];
  for (let i = 1; i - 1 < lista.length; i++) {
    numero += 1;
    if (numero !== lista[i]) {
      while (numero < lista[i]) {
        lista2.push(numero);
        numero += 1;
      }
    } 
  }
  return lista2;
}

export default missingNumbersAction;