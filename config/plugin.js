'use strict';

// had enabled by egg
// exports.static = true;
const path = require('path');
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};
