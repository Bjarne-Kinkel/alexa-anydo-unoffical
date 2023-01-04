import { HandlerInput } from "ask-sdk"
import { RequestHandler } from "ask-sdk-runtime";
export const itemRequest = {
    canHandle(handlerInput: HandlerInput){
        return true;
    }, handle(handlerInput: HandlerInput){
        console.log(handlerInput);
        
    }
} as RequestHandler<HandlerInput,void>;