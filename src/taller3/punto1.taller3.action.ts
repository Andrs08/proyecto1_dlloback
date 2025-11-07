function desglosarStringAction(palabra: string, tipo: string): number {
  let cantidad: number = 0;
  let vocales: string[] = ["a", "e", "i", "o", "u"];
  let consonantes: string[] = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (tipo === "vocales") {
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        cantidad += 1;
      }
    }
  } else {
    if (tipo === "consonantes") {
      for (let i = 0; i < palabra.length; i++) {
        if (consonantes.includes(palabra[i])) {
          cantidad += 1;
        }
      }
    }
  }
  return cantidad;
}

export default desglosarStringAction;

