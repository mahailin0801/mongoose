const userControl = require("../Model/userModel");

//注册
var regData = (req,res)=>{
	userControl.regData({username:req.body.username,pasword:req.body.pasword},()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}



//登录
var logData = (req,res)=>{
	
	let {username,pasword} = req.body;
	
	userControl.logData({username,pasword},(data)=>{
		if(data.length > 0){
			res.json({
				ret:true,
				data:true
			})
		}
		else{
			es.json({
				ret:true,
				data:false
			})
		}
	})
}

module.exports = {
	regData,
	logData
}
