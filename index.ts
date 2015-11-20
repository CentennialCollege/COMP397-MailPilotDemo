/// <reference path="typings/tsd.d.ts"/>

//register node modules
import express = require('express');
import path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,"/")));

app.get('/', (req:express.Request, res:express.Response)=>{
	res.sendFile("index.html");
});

var server = app.listen(process.env.PORT || 3000, ()=> {
  var host:string = server.address().address;
  var port:number = server.address().port;

  console.log('Server for MailPilot is listening at http://%s:%s', host, port);
});