const posts = require('../../../public/data/posts.json');

const get = async () => {
  return posts;
};

module.exports = {
  get,
};
