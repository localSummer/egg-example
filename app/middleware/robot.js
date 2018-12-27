module.exports = (options, app) => {
  return async function middleware(ctx, next) {
    const source = ctx.get('userAgent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    }
    else {
      await next();
    }
  }
};