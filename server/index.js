const { exec } = require('child_process');
const Static = require("koa-static");
const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.post("/ir/:code", ctx => {
	exec(`ir-ctl -s ir-codes/panasonic/${ctx.params.code}.txt`);
});

app
	.use(Static("site"))
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(80);
