import {Router, Request, Response} from "express";
import {convertidorTemp, resolvedor, mejorParidad, peorParidad} from "./taller1.controller"

const taller1Routes = Router();

async function convertirTemp(request: Request, response: Response) {
    const gradosCentigrados = request.body;
    const resultado = await convertidorTemp(gradosCentigrados)
    
    response.status(200).json({
        temperatura_fahrenheit: resultado
    })
}

taller1Routes.post("/punto1", convertirTemp)
console.log("taller1.routes.ts cargado correctamente");

export default taller1Routes;
