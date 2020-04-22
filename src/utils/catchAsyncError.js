module.exports = fn => {
  return (event, context, callback) => {
    fn(event, context, callback).catch(err => callback(err));
  }
}