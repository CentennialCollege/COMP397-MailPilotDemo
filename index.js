/// <reference path="typings/tsd.d.ts"/>
//register node modules
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "/")));
app.get('/', function (req, res) {
    res.sendFile("index.html");
});
var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    //console.log('Server for MailPilot is listening at http://%s:%s', host, port);
});
//# sourceMappingURL=index.js.map