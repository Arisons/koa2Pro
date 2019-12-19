/**
 * @description 环境变量
 */

const ENV = process.env.NODE_ENV  //通过env 判断是线上还是测试环境

module.exports={
	isDev:ENV ==='dev',
	notDev:ENV !=='dev',
	isProd:ENV==='production',
	notProd:ENV !=='production'
} 