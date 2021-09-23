import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

export default class Publicaciones {

    public listarPublicaciones(req: Request, res: Response) {
        axios({ url: process.env.path, method: 'GET' }).then(({ data }: IPublicaciones) => {
            res.status(200).send({
                data: data.map(item => {
                    return {
                        usuario: item.userId,
                        id: item.id,
                        titulo: item.title,
                        cuerpo: item.body
                    }
                })
            })
        }).catch(err => res.status(500).send(err))
    }

    public listarPublicacionesPorId(req: Request, res: Response) {
        let id = req.params.id
        console.log(id);
        
        axios({ url: process.env.path+"/"+id, method: 'GET' }).then(({ data }:IPublicacion) => {
            res.status(200).send({
                datos: {
                    
                        usuario: data.userId,
                        id: data.id,
                        titulo: data.title,
                        cuerpo: data.body
                    }
                
            })
        }).catch(err => res.status(500).send(err))
    }

    public listarPublicacionesPorComentario(req: Request, res: Response) {
        let id = req.params.id                
        
        axios({ url: process.env.path+"/"+id+"/comments", method: 'GET' }).then(({ data }:IComentarios) => {
            res.status(200).send({
                data: data.map(item => {
                    return {
                        postId: item.postId,
                        id: item.id,
                        titulo: item.name,
                        cuerpo: item.body,
                        correo:item.email
                    }
                })
            })
        }).catch(err => res.status(500).send(err))
    }

}

interface IPublicaciones extends AxiosResponse {
    data: Opublicaciones[]
}

interface IPublicacion extends AxiosResponse {
    data: Opublicaciones
}

interface IComentarios extends AxiosResponse {
    data: Ocomentarios[]
}

interface Opublicaciones {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Ocomentarios {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}