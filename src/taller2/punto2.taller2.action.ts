function includesAction(lista: number[], numero: number): boolean {
  let controlador: boolean = false;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      controlador = true;
      break;
    }
  }
  return controlador;
}

export default includesAction;