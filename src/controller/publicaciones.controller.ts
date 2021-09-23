import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

export default class Publicaciones {
    
    public listarPublicaciones(req: Request, res: Response) {
        axios({ url: process.env.path, method: 'GET' }).then(({ data }: IPublicaciones) => {
            res.status(200).send({
                //data
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

    public listarPublicacionPorId(req: Request, res: Response) {
        const id: string = req.params.id;
        //axios.get({ url: process.env.path + `/${id}`, method:'GET'}).then(({ data }: IPublicacionesPorID) => {          
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }: IPublicacionesPorID) => {   
            res.status(200).send({                   
                data: {
                    usuario: data.userId,
                    id: data.id,
                    titulo: data.title,
                    cuerpo: data.body
                }              
            })
        }).catch(err => res.status(500).send(err))
    }

    public listarComentarios(req: Request, res: Response) {
        let id: string = req.params.id;
        //axios.({ url: process.env.path+`/${id}`+'comments',method:'GET'}).then(({ data }: IComentarios) => {   
        axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`).then(({ data }: IPublicaciones) => {          
            
            res.status(200).send({                   
                data               
            })
        }).catch(err => res.status(500).send(err))
    }
}


interface IPublicaciones extends AxiosResponse {
    data: Opublicaciones[]
}

interface IPublicacionesPorID extends AxiosResponse {
    data :  Opublicaciones
}

interface Opublicaciones {
    userId: number,
    id: number,
    title: string,
    body: string
}


interface IComentarios extends AxiosResponse{
    data: IComentario []
}

interface IComentario {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
