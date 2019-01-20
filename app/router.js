'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.resources('users', '/users', controller.users); // RESTful 风格
  router.resources('posts', '/posts', controller.posts); // RESTful 风格
};
