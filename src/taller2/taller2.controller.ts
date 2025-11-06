import findMaxAction from "./punto1.taller2.action"
import includesAction from "./punto2.taller2.action"
import sumAction from "./punto3.taller2.action"
import missingNumbersAction from "./punto4.taller2.action"

async function findMax(lista: number[]): Promise<number> {
    const resultado = await findMaxAction(lista);
    return resultado;
}

async function includes(lista: number[], numero: number): Promise <boolean> {
    const resultado = await includesAction(lista, numero);
    return resultado;
}

async function sum (lista: number[]): Promise <number> {
    const resultado = await sumAction(lista);
    return resultado;
}

async function missingNumbers (lista: number[]): Promise<number[]> {
    const resultado = await missingNumbersAction(lista);
    return resultado;
}

export {findMax, includes, sum, missingNumbers};
