const express = require('express');
const Alexa = require('ask-sdk');
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const { itemRequest } = require('./itemHandler');

const app = express();

const skill = Alexa.SkillBuilders.custom().addRequestHandlers(itemRequest).create();
const adapter = new ExpressAdapter(skill, true, true);

app.post('/skill', adapter.getRequestHandlers());

app.listen(3000);