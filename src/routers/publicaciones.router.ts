import express, { IRouter } from "express";
import Controller from '../controllers/publucaciones.controller'

export const api: IRouter = express.Router()
const publicaciones = new Controller()

api.get('/', publicaciones.listarPublicaciones)
api.get('/:id', publicaciones.listarUnaPublicacion)
api.get('/:id/:comentarios', publicaciones.listarComentarios)
