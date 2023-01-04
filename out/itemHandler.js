"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRequest = void 0;
exports.itemRequest = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput) {
        console.log(handlerInput);
        const speechText = "TEST";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
