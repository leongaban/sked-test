const catchAsync = require('../utils/catchAsync');

const getPosts = catchAsync(async (req, res) => {
  // TODO get list of posts
  return res.status(200).send('Hello world');
});

module.exports = {
  getPosts,
};
