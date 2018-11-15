const mongoose = require('mongoose');

//连接mongoose数据库
mongoose.connect('mongodb://localhost/test',(err)=>{
	if(err){
		console.log("连接失败")
	}
	else{
		console.log("连接成功")
	}
})

//导出数据库信息
module.exports = mongoose;

