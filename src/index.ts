import express, { Request, Response } from 'express';
const app = express();

app.all('/', (req: Request, res: Response) => {
    console.log(req);
    res.send('Yo!');
});

app.listen(3000);