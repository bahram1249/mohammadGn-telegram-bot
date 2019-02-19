const functions = require('firebase-functions');
const express = require('express');
const app = express();
const robot = require('./routes/gkljsdofieroipomcxjljdsoprwekjxvojpowerjklsdfoewrlkjsdfhierGn');
const getMe = require('./telegram/config').getMe;
const setWebhook = require('./telegram/config').setWebhook;
const getWebhookInfo = require('./telegram/config').getWebhookInfo;

app.use('/gkljsdofieroipomcxjljdsoprwekjxvojpowerjklsdfoewrlkjsdfhierGn', robot);
// getMe();
// setWebhook();
// getWebhookInfo();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
