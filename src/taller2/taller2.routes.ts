import {Router, Request, Response} from "express"

import {findMax, includes, sum, missingNumbers} from "./taller2.controller"

const taller2Routes = Router();

async function find (request: Request, response: Response) {
    const {lista} = request.body;
    const resultado = await findMax(lista);

    response.status(200).json ({
        "mayor_valor": resultado
    });
}

taller2Routes.post("/punto1", find);

async function include (request: Request, response: Response) {
    const {lista, numero} = request.body;
    const resultado = await includes(lista, numero);

    response.status(200).json ({
        "numero_esta_enlista": resultado
    })
}

taller2Routes.post("/punto2", include);

async function suma (request: Request, response: Response) {
    const {lista} = request.body;
    const resultado = await sum(lista);

    response.status(200).json ({
        "suma": resultado
    });
}

taller2Routes.post("/punto3", suma);

async function missing (request: Request, response: Response) {
    const {lista} = request.body
    const resultado = await missingNumbers(lista);

    response.status(200).json ({
        "numeros_faltantes": resultado
    })
}

taller2Routes.post("/punto4", missing);

export default taller2Routes;

