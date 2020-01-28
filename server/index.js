const Static = require('koa-static');
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/blah', (ctx, next) => {
  ctx.body = 'Hello World';
});

app
  .use(Static('site'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(80);
