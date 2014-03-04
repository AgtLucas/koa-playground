var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();

var render = views(__dirname + '/views', { ext: 'ejs' });

var user = {
  name: {
    first: 'Lucas',
    last: 'Churchill'
  },
  age: 22
};

app.use(function *() {
  this.body = yield render('user', { user: user });
});

if (!module.parent) app.listen(4000);