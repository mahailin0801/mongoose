const mongoose = require('../db/conn');
const userModel = mongoose.model('User', {username: String,pasword:String},'User');

//注册
var regData = (userInfo,callback)=>{
	new userModel(userInfo).save().then(()=>{
		callback()
	})
}

//登录
var logData = (userInfo,callback)=>{
	userModel.find(userInfo).then((data)=>{
		callback(data)
	})
}

module.exports = {
	regData,
	logData
}
