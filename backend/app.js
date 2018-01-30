//based on https://github.com/zemirco/express-upload-progress/blob/master/app.js

var express = require('express')
  , http = require('http')
  , path = require('path');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({
  uploadDir: __dirname + '/tmp',
});

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Routes

app.post('/upload', multipartMiddleware, function(req, res) {
  deleteAfterUpload(req.files.myFile.path);
  res.end();
});

// Start the app

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// Private functions

var fs = require('fs');

var deleteAfterUpload = function(path) {
  setTimeout( function(){
    fs.unlink(path, function(err) {
      if (err) console.log(err);
      console.log('file successfully deleted');
    });
  }, 6 * 1000);
};
