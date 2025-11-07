import {Router, Request, Response} from "express"
import { desglosarString, twoSum, conversionRomana, descomposicion} from "./taller3.controller"

const taller3Routes = Router();

async function desglosar(request: Request, response:Response) {
    const{palabra, tipo} = request.body;
    const resultado = await desglosarString(palabra, tipo);

    response.status(200).json ({
        "cantidad": resultado
    })
}

taller3Routes.post("/punto1", desglosar);

async function sum(request: Request, response: Response) {
    const {lista, numero} = request.body;
    const resultado = await twoSum(lista, numero);

    response.status(200).json ({
        "indices": resultado
    });
}

taller3Routes.post("/punto2", sum);

async function conversion (request: Request, response: Response) {
    const {num_romano} = request.body;
    const resultado = await conversionRomana(num_romano);

    response.status(200).json ({
        "numero_arabico": resultado
    });
}

taller3Routes.post("/punto3", conversion);

async function descomp(request: Request, response: Response) {
    const {palabras} = request.body;
    const resultado = await descomposicion(palabras);

    response.status(200).json ({
        "palabras": resultado
    });
}

taller3Routes.post("/punto4", descomp);

export default taller3Routes;