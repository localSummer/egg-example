'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545046019040_2471';

  // add your config here
  config.middleware = [
    'robot',
  ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // 给中间件robot传入的配置项
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Anicl0ud',
    database: 'egg-sequelize-doc-default',
  };
  return config;
};
