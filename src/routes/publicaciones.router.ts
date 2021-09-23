import express, { application, IRouter } from "express";
import Controller from '../controller/publicaciones.controller'

export const api: IRouter = express.Router()
const publicaciones = new Controller()

api.get('/', publicaciones.listarPublicaciones)
api.get('/:id', publicaciones.listarPublicacionPorId)
api.get('/', publicaciones.listarComentarios)