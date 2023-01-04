import express, { Request, Response } from 'express';
import Alexa from 'ask-sdk';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { itemRequest } from './itemHandler';


const app = express();

const skill = Alexa.SkillBuilders.custom().addRequestHandlers(itemRequest).create();
const adapter = new ExpressAdapter(skill, true, true);

app.post('/skill', adapter.getRequestHandlers());

app.listen(3000);