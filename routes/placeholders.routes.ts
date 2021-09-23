import expres,{IRouter} from 'express'
import controller from '../controller/placeholder.controller'

export const api: IRouter = expres.Router();
const publicaciones = new controller();

api.get('/',publicaciones.listarPublicaciones);
api.get('/:id/',publicaciones.listarPublicacionesID);
api.get('/:id/comments',publicaciones.listarPublicacionesIDCommen);
