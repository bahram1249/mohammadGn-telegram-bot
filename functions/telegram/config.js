const token = '733624373:AAFkC2QIIC7vJgnX9Wk1Lk1FO5KAeHJ_ct8';
const url = 'https://api.telegram.org/bot' + token;
const webAppUrl = 'https://mamadgn-502a7.firebaseapp.com/gkljsdofieroipomcxjljdsoprwekjxvojpowerjklsdfoewrlkjsdfhierGn';
const request = require('request');


module.exports.getMe =  function() {
    request.get(url + '/getMe', (err, req, res) =>{
        console.log(res);
    });
}
  
module.exports.getUpdates = function () {
    // var responce = UrlFetchApp.fetch(url + "/getUpdates");
    // Logger.log(responce.getContentText());
}

module.exports.setWebhook = function() {
    request.get(url + '/setWebhook?url=' + webAppUrl, (err, req, res) => {
        console.log(res);
    });
}

module.exports.getWebhookInfo = function() {
    request.get(url + '/getWebhookInfo', (err , req, res) => {
        console.log(res);
    });
}