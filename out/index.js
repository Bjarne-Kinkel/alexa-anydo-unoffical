"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ask_sdk_1 = __importDefault(require("ask-sdk"));
const ask_sdk_express_adapter_1 = require("ask-sdk-express-adapter");
const itemHandler_1 = require("./itemHandler");
const app = (0, express_1.default)();
const skill = ask_sdk_1.default.SkillBuilders.custom().addRequestHandlers(itemHandler_1.itemRequest).create();
const adapter = new ask_sdk_express_adapter_1.ExpressAdapter(skill, true, true);
app.post('/skill', adapter.getRequestHandlers());
app.listen(3000);
