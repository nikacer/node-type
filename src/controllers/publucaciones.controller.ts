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
    public listarUnaPublicacion(req: Request, res: Response) {
        let {id} = req.params
        const path= process.env.path+'/'+req.params.id
        console.log(path)
        axios({ url: process.env.path, method: 'GET', params: {id} }).then(({ data }: UPublicacion) => {
            res.status(200).send({
                data: data.map(item1 => {
                    return {
                        usuario: item1.userId,
                        id: item1.id,
                        titulo: item1.title,
                        cuerpo: item1.body
                    }
                })
            })
        }).catch(err => res.status(500).send(err))
    }

    public listarComentarios(req: Request, res: Response) {
        console.log(req.params.id)
        console.log(req.params.comentarios)
        const path= process.env.path+'/'+req.params.id+'/'+req.params.comentarios
        console.log(path)
        axios({ url: path, method: 'GET'}).then(({ data }: IComentarios) => {
            res.status(200).send({
                data: data.map(item2 => {
                    return {
                        postId: item2.postId,
                        id: item2.id,
                        nombre: item2.name,
                        correo: item2.email,
                        cuerpo: item2.body
                    }
                })
            })
        }).catch(err => res.status(500).send(err))
    }
}

interface IPublicaciones extends AxiosResponse {
    data: Opublicaciones[]
}

interface UPublicacion extends AxiosResponse {
    data: Opublicacion[]
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

interface Opublicacion {
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
