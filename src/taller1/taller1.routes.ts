import {Router, Request, Response} from "express";
import {convertidorTemp, resolvedor, mejorParidad, peorParidad} from "./taller1.controller"

const taller1Routes = Router();

async function convertirTemp(request: Request, response: Response) {
    const {gradosCentigrados} = request.body;
    const resultado = await convertidorTemp(gradosCentigrados)
    
    response.status(200).json({
        "temperatura_fahrenheit": resultado
    })
}

taller1Routes.post("/punto1", convertirTemp)

async function ecuacion(request: Request, response: Response){
    const {valorA, valorB, valorC, raizPositiva} = request.body;
    const resultado = await resolvedor(valorA, valorB, valorC, raizPositiva);

    response.status(200).json ({
        "x": resultado 
    })
}

taller1Routes.post("/punto2", ecuacion);

async function mejorPar(request: Request, response: Response) {
    const {numero} = request.body;
    const resultado = await mejorParidad(numero)

    response.status(200).json ({
        "es_par": resultado
    })
}

taller1Routes.post("/punto3", mejorPar);

async function peorPar (request: Request, response: Response) {
    const {numero} = request.body;
    const resultado = await peorParidad(numero);

    response.status(200).json ({
        "es_par": resultado
    })
}

taller1Routes.post("/punto4", peorPar);

export default taller1Routes;
