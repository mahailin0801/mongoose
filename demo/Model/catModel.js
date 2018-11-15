const mongoose = require('../db/conn');
const CatModel = mongoose.model('Cat', { name: String },'Cat');

//数据的显示
var getData = (callback)=>{
	CatModel.find().then((data)=>{
		callback(data)
	})
}


//数据添加
var addData = (kw,callback)=>{
	new CatModel({name:kw}).save().then((data)=>{
		callback(data)
	})
}


//数据删除
var delData = (id,callback)=>{
	CatModel.remove({_id:id}).then(()=>{
		callback()
	})
}


//数据的查找
var finData = (mz,callback)=>{
	CatModel.find({name:new RegExp(mz)}).then((data)=>{
		callback(data)
	})
}


//数据的修改
var modData = (id,callback)=>{
	CatModel.find({_id:id}).then((data)=>{
		callback(data)
	})
}

var okData = (id,mf,callback)=>{
	CatModel.update({_id:id},{$set:{name:mf}}).then(()=>{
		callback()
	})
}


//分页
var pageData = (page,pageSize,callback)=>{
	CatModel.find().limit(Number(pageSize)).skip((page - 1)*pageSize).then((data)=>{
		callback(data)
	})
}
module.exports = {
	getData,
	addData,
	delData,
	finData,
	modData,
	okData,
	pageData
}

