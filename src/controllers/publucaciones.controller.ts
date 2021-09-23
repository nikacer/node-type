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
        console.log(req.params)
        console.log(process.env.path+id);
        
        axios({ url: process.env.path+id, method: 'GET' }).then(({ data }: IPublicaciones) => {
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



interface IPublicaciones extends AxiosResponse {
    data: Opublicaciones[]
}

interface Opublicaciones {
    userId: number,
    id: number,
    title: string,
    body: string
}

