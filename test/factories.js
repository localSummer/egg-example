'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;
  // 定义 user 和默认数据
  factory.define('user', app.model.User, {
    name: factory.sequence('User.name', n => `name_${n}`),
    age: 18,
  });
};
