const Sequelize = require('sequelize');
const seq=require('./seq');


//创建User模型.数据表的名字是users
const User = seq.define('user',{
	//id 会自动创建,并设为主键,自增
	userName:{
		type:Sequelize.STRING, //相当于vatchar(225)
		allowNull:false
	},
	password:{
		type:Sequelize.STRING, //相当于vatchar(225)
		allowNull:false
	},
	nickname:{
		type:Sequelize.STRING, //相当于vatchar(225)
		allowNull:false,
		comment:'昵称' //注释
	},
	//自动创建:createdAt 和 updateAt
})

//创建Blog 模型

const Blog = seq.define('blog',{
	title:{
		type:Sequelize.STRING,
		allowNull:false
	},
	content:{
		type:Sequelize.TEXT,
		allowNull:false
	},
	userId:{
		type:Sequelize.INTEGER,
		allowNull:false
	}
})
//外键关联 
// 方式一
Blog.belongsTo(User,{
	//创建外键Blog.userId -> User.id
	foreignKey:'userId'
}) 
// 方式二
User.hasMany(Blog,{
	//创建外键Blog.userId -> User.id
	foreignKey:'userId'
})

module.exports = {
	User,
	Blog
}
