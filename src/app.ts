import express, { Request, Response } from 'express';
import axios from 'axios'

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
    return console.log(`server is listening on  ${port}`);
});