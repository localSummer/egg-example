'use strict';
const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.toInt = str => {
  if (typeof str === 'number') {
    return str;
  }
  if (!str) {
    return str;
  }
  return parseInt(str, 10) || 0;
};
