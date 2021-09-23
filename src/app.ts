import express, { Express } from 'express';
import { api } from './routes/publicaciones.router'


const app: Express = express();
const port = 3001;

process.env.path = 'https://jsonplaceholder.typicode.com/posts'
process.env.pathid =  'https://jsonplaceholder.typicode.com/posts/${id}`)'

app.use('/', api)

app.listen(port, () => {
    return console.log(`server is listening on  ${port}`);
});

