const Static = require("koa-static");
const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.post("/ir/send/:code", ctx => {
	const code = ctx.params.code;

	console.log(code);
});

app
	.use(Static("site"))
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(80);
