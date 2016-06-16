var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    process: true,
    colors: true,
    hot: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}));


app.get('/', function (request, response){
    require('fs').readFile('./index.html', 'utf-8', function(err, data) {
        response.send(data);
    });
})

app.listen(3080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3080');
});
