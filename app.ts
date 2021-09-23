import express, { Express } from 'express';
import { api } from './routes/placeholders.routes'


const app: Express = express();
const port = 3001;

process.env.path = 'https://jsonplaceholder.typicode.com/posts'

app.use('/', api)
app.use('/:id/', api)
app.use('/:id/comments', api)

app.listen(port, () => {
    return console.log(`server is listening on  ${port}`);
});