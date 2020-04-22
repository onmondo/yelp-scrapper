module.exports = (response) => {
  const {statusCode, body} = response;

  return {
    statusCode,
    body: JSON.stringify(body, null, 2)
  };
};