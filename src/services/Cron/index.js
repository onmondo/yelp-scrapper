'use strict';
const catchAsyncError = require('../../utils/catchAsyncError');
const standardResponse = require('../../utils/standardResponse');

module.exports.cron = catchAsyncError(async (event, context, callback) => {
  const now = new Date();
  const message = `The time is ${now}`;

  console.log(message);

  // callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
});
