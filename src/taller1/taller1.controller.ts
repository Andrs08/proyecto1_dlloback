import convertidorTempAction from "./punto1.taller1.action"
import resolvedorAction from "./punto2.taller1.action"
import mejorParidadAction from "./punto3.taller1.action"
import peorParidadAction from "./punto4.taller1.action"


async function convertidorTemp (gradosC: number): Promise<number> {
    const resultado = await convertidorTempAction(gradosC);
    return resultado;
}

async function resolvedor(a: number, b: number, c: number, raizpositiva: boolean): Promise<number> {
    const resultado = await resolvedorAction(a, b, c, raizpositiva);
    return resultado;
}

async function mejorParidad(numero: number): Promise<boolean> {
    const resultado = await mejorParidadAction(numero);
    return resultado;
}

async function peorParidad(numero: number): Promise<boolean> {
    const resultado = await peorParidadAction(numero);
    return resultado;
}


export {convertidorTemp, resolvedor, mejorParidad, peorParidad};



