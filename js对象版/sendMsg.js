var sendMsg = {
    /**
     * 发送好友消息
     */
    sendText: function (msg) {
        const params = {
            url: "/test/sendText",
            body: msg
        }
        addInfo(params, 2);
        websocket.sendMessage(params);
    }
}