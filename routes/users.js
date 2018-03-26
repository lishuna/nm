var express = require('express');
var router = express.Router();
var usersCtrl = require('../controller/users.controller');
/* GET users listing. */
router.route('/pcweb/login')
    .get(function(req, res, next) {
        usersCtrl.login(req.param('loginWay'), req.param('mobile'), req.param('password'));
    }).post(function(req, res, next) {
        var data = usersCtrl.login(req.body.loginWay, req.body.mobile, req.body.password)
        console.log(data);
        res.send(data);
    });

router.post('/pcweb/getQrCode', function(req, res) {
    var resData = {
        error: {
            "returnCode": 0,
            "returnMessage": "操作成功",
            "returnUserMessage": "操作成功"
        },
        data: {
            "type": "webLogin",
            "content": "8c476ab3bc2cf9b3d7efbf6124f4f9a9f1d1be0427d51df36e9780be1785eb92"
        }
    };
    res.send(resData);
}).get('/pcweb/getQrCode', function(req, res) {
    var resData = {
        error: {
            "returnCode": 0,
            "returnMessage": "操作成功",
            "returnUserMessage": "操作成功"
        },
        data: {
            "type": "webLogin",
            "content": "8c476ab3bc2cf9b3d7efbf6124f4f9a9f1d1be0427d51df36e9780be1785eb92"
        }
    };
    res.send(resData);
});

module.exports = router;