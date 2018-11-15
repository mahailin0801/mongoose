const catModel = require("../Model/catModel");

//数据的显示
var getList = (req,res)=>{
	catModel.getData((data)=>{
		res.json({
			list:data
		})
	})
}


//数据的添加
var addData = (req,res)=>{
	catModel.addData(req.params.kw,()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}


//数据的删除
var delData = (req,res)=>{
	catModel.delData(req.params.id,()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}


//数据的模糊查找
var finData = (req,res)=>{
	catModel.finData(req.params.mz,(data)=>{
		res.json({
			list:data
		})
	})
}


//数据的修改
var modData = (req,res)=>{
	catModel.modData(req.params.id,(data)=>{
		res.json(data)
	})
}

var okData = (req,res)=>{
	catModel.okData(req.params.id,req.params.mf,()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}


//分页
var pageData = (req,res)=>{
	catModel.getData((da)=>{
		catModel.pageData(req.params.page,req.params.pageSize,(data)=>{
			res.json({
				list:data,
				count:Math.ceil(da.length/req.params.pageSize)
			})
		})
	})
}


//导出方法
module.exports = {
	getList,
	addData,
	delData,
	finData,
	modData,
	okData,
	pageData
}
