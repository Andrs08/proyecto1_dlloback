import {Request, Response} from "express";
import cors from "cors";
import express from "express"

import taller1Routes from "./taller1/taller1.routes"
import taller2Routes from "./taller2/taller2.routes"

const app = express();
app.use(cors());
app.use(express.json());

const pref = "/api/proyecto1/";

app.use(pref + "taller1", taller1Routes);
console.log("Ruta cargada:", pref + "taller1");

app.use(pref + "taller2", taller2Routes);

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

app.listen(8080, () => {
    console.log("Server listening to port 8080")
});