import {
    sendMessage
} from './websocket'

export function sendText(msg) {
    const params = {
        url: "/test/sendText",
        body: msg
    }
    addInfo(params, 2);
    sendMessage(params);
}