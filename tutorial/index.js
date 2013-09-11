/**
 * Created with JetBrains PhpStorm.
 * User: wangxufeng
 * Date: 13-9-11
 * Time: 下午4:55
 * To change this template use File | Settings | File Templates.
 */

var server = require('./server');
var router = require('./router');

server.start(router.route);