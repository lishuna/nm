var mongoose = require('mongoose');

var User = new mongoose.Schema({
    loginId: { type: String },
    passwd: { type: String },
    nickName: { type: String},
    age: {type: Number,default: 0}
});

User.statics = {
    get: function(loginId){
      return this.find({
           loginId: loginId
       })
    //    .select({'loginId': 1, 'age': 1, 'nickName': 1})
       .exec();
    }
}
module.exports = mongoose.model('users',User);