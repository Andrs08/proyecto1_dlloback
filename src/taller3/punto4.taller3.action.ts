function descomposicionAction(palabras: string): string[] {
  let diccionario: string[] = palabras.split(",");
  let palabra: string = diccionario[0];
  let componen: string[] = [];
  for (let i = 1; i < diccionario.length; i++) {
    for (let j = 1; j < diccionario.length; j++) {
      if (i !== j) {
        if (diccionario[i] + diccionario[j] === palabra) {
          componen.push(diccionario[i]);
          componen.push(diccionario[j]);
        }
      }
    }
  }
  return componen;
}

export default descomposicionAction;