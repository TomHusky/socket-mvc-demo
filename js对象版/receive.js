var receive = {

  getTime: function (body, data) {
    const dataJson = body;
    addData(dataJson, data);
  },

  testSendText: function (body, data) {
    let dataJson = body;
    if (data.type == 1) {
      dataJson = body.data;
    }
    console.log(dataJson);
    addData(dataJson, 1);
    addInfo(data, 1);
  }
}