import {Request,response,Response} from 'express'
import axios, { AxiosResponse } from 'axios'


export default class Publicaciones{
    public listarPublicaciones(req:Request,res:Response) {
       
axios({url: process.env.path, method:'GET'}).then(({data}: IPublicaciones)=> {
res.status(200).send({data: data.map(item =>{
    return {
        usuario: item.userid,
        id: item.id,
        titulo : item.title,
        cuerpo: item.body
    }
}
)})
}).catch(err  => res.status(500).send(err))
}


public listarPublicacionesID(req:Request,res:Response) {
    const {id} = req.params;
    console.log(id)
    axios({url: process.env.path+ '/' + id , method:'GET'}).then(({data}: IPublicaciones)=> {
    res.status(200).send({data: data.map(item =>{
        return {
            usuario: item.userid,
            id: item.id,
            titulo : item.title,
            cuerpo: item.body
        }
    }
    )})
    }).catch(err  => res.status(500).send(err))
    }

    public listarPublicacionesIDCommen(req:Request,res:Response) {
        const {id} = req.params;
        console.log(id)
        axios({url: process.env.path+'/' + id + '/comments', method:'GET'}).then(({data}: IPublicacionesIdCommen)=> {
        res.status(200).send({data: data.map(item =>{
            return {
                Postid: item.postId,
                id: item.id,
                name : item.name,
                email: item.email,
                body: item.body
            }
        }
        )})
        }).catch(err  => res.status(500).send(err))
        }


}


interface IPublicaciones extends AxiosResponse{
data:Opublicaciones[]
}

interface Opublicaciones{
userid: number,
id: number,
title: string,
body: string

}

interface IPublicacionesIdCommen extends AxiosResponse{
    data:OpublicacionesIdCommen[]
    }
    
    interface OpublicacionesIdCommen{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string

    
    }