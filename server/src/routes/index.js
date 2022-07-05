const express = require('express');
const postRoute = require('./post.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/posts',
    route: postRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.get('/', (req, res) => res.status(200).send('Server is running'));
  router.use(route.path, route.route);
});

module.exports = router;
