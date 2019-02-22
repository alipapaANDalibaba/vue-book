let http = require('http'),
    fs = require('fs'),
    url = require('url');
let sliders = require('./sliders');

http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url);
    if(pathname==='/sliders'){
      res.setHeader('Content-Type','application/json;charset=utf-8');
      res.end(JSON.stringify(sliders))
    }
}).listen(3000)
