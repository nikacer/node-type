import express, { Express } from 'express';
import { api } from './routers/publicaciones.router'


const app: Express = express();
const port = 3001;

process.env.path = 'https://jsonplaceholder.typicode.com/posts'

app.use('/', api)

app.listen(port, () => {
    return console.log(`server is listening on  ${port}`);
});