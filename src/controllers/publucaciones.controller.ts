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

    public listarPublicacionesById(req: Request, res: Response) {
        let {id} = req.params
       
        if(id.length <=2){
            axios({ url: process.env.path, method: 'GET', params:{id} }).then(({ data }: IPublicaciones) => {
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
    }

    public listarPublicacionesComments(req: Request, res: Response) {
        let {id} = req.params
        let comments = 'comments'
            axios({ url: `${process.env.path}/${id}/${comments}`, method: 'GET' }).then(({ data }: IComments) => {
                res.status(200).send({
                    data: data.map(item => {    
                        return {
                            idPublicacion: item.postId,
                            nombre: item.name,
                            correo: item.email,
                            cuerpo: item.body
                        }
                    })
                })
            }).catch(err => res.status(500).send(err))
    }
}



interface IPublicaciones extends AxiosResponse {
    data: Opublicaciones[]
}

interface IComments extends AxiosResponse {
    data: Ocomments[]
}

interface Opublicaciones {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Ocomments {
    postId: number,
    name: string,
    id: number,
    email: string,
    body: string
}

