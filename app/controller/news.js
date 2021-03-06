'use strict';
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ],
    };
    const ctx = this.ctx;
    this.logger.info(ctx.service === this.service); // true
    this.logger.info(ctx === this); // false
    // const newsList = await ctx.service.news.list(page);
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;

