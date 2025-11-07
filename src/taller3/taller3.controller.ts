import desglosarStringAction from "./punto1.taller3.action"
import twoSumAction from "./punto2.taller3.action"
import conversionRomanaAction from "./punto3.taller3.action"
import descomposicionAction from "./punto4.taller3.action"

async function desglosarString (palabra: string, tipo: string): Promise<number> {
    const resultado = await desglosarStringAction(palabra, tipo);
    return resultado;
}

async function twoSum (lista: number[], numero: number): Promise<number[]> {
    const resultado = await twoSumAction(lista, numero);
    return resultado;
}

async function conversionRomana (cifra: string): Promise<number> {
    const resultado = await conversionRomanaAction(cifra);
    return resultado;
}

async function descomposicion (palabras: string): Promise<string[]> {
    const resultado = await descomposicionAction(palabras);
    return resultado;
}

export{desglosarString, twoSum, conversionRomana, descomposicion};