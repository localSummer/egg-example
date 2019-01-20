'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.toInt(ctx.query.limit),
      offset: ctx.helper.toInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.post.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.post.find(ctx.helper.toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const post = await ctx.service.post.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = post;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const updates = {
      title: ctx.request.body.title,
      content: ctx.request.body.content,
    };
    ctx.body = await ctx.service.post.update({ id, user_id: ctx.request.body.user_id, updates });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.toInt(ctx.params.id);
    const user_id = ctx.helper.toInt(ctx.request.body.user_id);
    await ctx.service.post.destroy({ id, user_id });
    ctx.status = 200;
  }
}

module.exports = PostController;
