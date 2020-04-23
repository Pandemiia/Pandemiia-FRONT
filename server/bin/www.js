require('module-alias/register');

const express = require('express');
const fileupload = require('express-fileupload');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const pe = require('parse-error');
const path = require('path');
const log4js = require('log4js');

const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

const routes = require('../routes/index');

const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 3000;
const APP_STATIC_PATH = path.join(__dirname, '../../static/');

log4js.configure({
  appenders: { server: { type: 'file', filename: 'server.log' } },
  categories: { default: { appenders: ['server'], level: 'error' } }
});

const app = express();

app.set('port', PORT);

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log
  })
);

app.use(fileupload());

app.use(favicon(path.join(APP_STATIC_PATH, 'favicon.ico')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(compression());

app.use(cors());

app.use(express.static(APP_STATIC_PATH));

app.listen(app.get('port'), err => {
  if (err) {
    return console.error(err);
  }

  console.log(`Node server started from ${APP_STATIC_PATH} on http://localhost:${app.get('port')}`);
});

routes(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});
