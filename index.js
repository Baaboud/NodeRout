const http = require("http");
const fs = require("fs");
const url = require("url");

server = http.createServer( function(req, res) {
    // URL full path
    const u = url.parse(req.url, true);
    // URL query
    const q= u.query;
    // if the query is not empty
    if(Object.keys(q).length !== 0){
        // if the role is admin linke: home.html?role:admin
        if(q.role=="admin"){
            fs.readFile('admin.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
        else {
            fs.readFile('login.html', function(err, page) {
                res.writeHead(403, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
    }
    // if there is no query in url
    else {
        // defalut home page rout case
        if( req.url== "/home.html" || req.url== "/"){
            fs.readFile('home.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
        // blog page rout
        else if( req.url=="/blog.html"){
            fs.readFile('blog.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        }
        // other cases
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