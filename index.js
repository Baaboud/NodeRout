const http = require("http");
const fs = require("fs");
const url = require("url");

server = http.createServer( function(req, res) {
    var u = url.parse(req.url, true);
    // let p= u.pathname;
    let q= u.query;
    if(Object.keys(q).length !== 0){
        if(q.role=="admin"){
            fs.readFile('admin.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }else{
            fs.readFile('login.html', function(err, page) {
                res.writeHead(403, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
    }else
    {
        if( req.url== "/home.html" || req.url== "/"){
            fs.readFile('home.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }else if( req.url=="/blog.html"){
            fs.readFile('blog.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
        else{
            fs.readFile('404.html', function(err, page) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
    }
});

server.listen(8080);