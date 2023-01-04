import { HandlerInput, RequestHandler } from "ask-sdk";

export const itemRequest: RequestHandler = {

  canHandle(handlerInput: HandlerInput) {
    return true;
  },

  handle(handlerInput: HandlerInput) {
console.log(handlerInput);

    const speechText = "TEST";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();

  },

};