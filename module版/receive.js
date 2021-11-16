export function getTime(body, data) {
  const dataJson = body;
  addData(dataJson, data);
}

export function testSendText(body, data) {
  let dataJson = body;
  if (data.type == 1) {
    dataJson = body.data;
  }
  addData(dataJson, 1);
  addInfo(data, 1);
}

export default {
  getTime,
  testSendText
}