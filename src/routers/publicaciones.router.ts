import express, { IRouter } from "express";
import Controller from '../controllers/publucaciones.controller'

export const api: IRouter = express.Router()
const publicaciones = new Controller()

api.get('/', publicaciones.listarPublicaciones)
api.get('/porId/:id', publicaciones.listarPublicacionesPorId)
api.get('/porId/:id/:comentario', publicaciones.listarPublicacionesPorComentario)

