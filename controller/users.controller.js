var Users = require('../models/user.model');

var UsersCtrl = {
    login: function(type, name, passwd) {
        console.log('%%%%%%%%% type: ' + type + ' name: ' + name + 'passwd: ' + passwd)
        if (type == 1) {
            Users.get(name, passwd)
                .then(function(user) {
                    if (user) {
                        data.error.returnCode = 0;
                        data.data = user;
                    } else {
                        data.error.returnCode = 1;
                        data.data = null;
                    }
                    return data;
                });
        }
    }
}



module.exports = UsersCtrl;