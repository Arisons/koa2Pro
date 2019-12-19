const {User,Blog} = require('./model');
!(async function(){
	let zhangsan =await User.create({
		userName:'张三',
		password:'1234',
		nickname:'zhangsan'
	})
	
	console.log('张三:',zhangsan.dataValues)
})()