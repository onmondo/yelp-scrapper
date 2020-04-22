'use strict';
const catchAsyncError = require('../../utils/catchAsyncError');
const standardResponse = require('../../utils/standardResponse');

module.exports.hello = catchAsyncError(async (event, context, callback) => {
  const {name} = event.pathParameters;

  const response = standardResponse({
    statusCode: 200,
    body: {
      message: `Hello there, ${name}`,
      // input: event,
    }
  });

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
});
