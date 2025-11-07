function conversionRomanaAction(cifra: string): number {
  const numerosRomanos: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let cifrArabig: number = 0;
  for (let i = 0; i < cifra.length - 1; i++) {
    if (numerosRomanos[cifra[i]] >= numerosRomanos[cifra[i + 1]]) {
      cifrArabig += numerosRomanos[cifra[i]];
    } else {
      cifrArabig -= numerosRomanos[cifra[i]];
    }
  }
  cifrArabig += numerosRomanos[cifra[cifra.length - 1]];
  return cifrArabig;
}

export default conversionRomanaAction;