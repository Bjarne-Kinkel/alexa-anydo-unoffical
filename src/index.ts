import express, { Request, Response } from 'express';
import Alexa from 'ask-sdk';
import { ExpressAdapter } from 'ask-sdk-express-adapter';


const app = express();

const skill = Alexa.SkillBuilders.custom().addRequestHandlers().create();
const adapter = new ExpressAdapter(skill, true, true);

app.post('/skill', adapter.getRequestHandlers());

app.all('/skill', (req: Request, res: Response) => {
    console.log(req);
    res.send('Yo!');
});

app.listen(3000);