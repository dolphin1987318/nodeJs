/**
 * Created with JetBrains PhpStorm.
 * User: wangxufeng
 * Date: 13-9-11
 * Time: 下午3:26
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        console.log('Request Received');

        var path_name = url.parse(request.url).pathname;
        console.log('request for ' + path_name + ' received.');

        route(path_name);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started!");
}

exports.start = start;