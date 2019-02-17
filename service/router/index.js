const express=require('express')
const router=express.Router()
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
const Model=require('../db/mongod.js')
const md5=require('blueimp-md5')
const svgCaptcha=require('svg-captcha')
var user=Model.getModel('User')



//用户登入验证
router.post('/user', async (req,res)=>{
    const pwd=req.body.pwd;
    const name=req.body.name;
    const captcha = req.body.captcha.toLowerCase();
    console.log(req.session.captcha)
    try {
 
            if (!await user.findOne({name})) {
                return res.send({code: 1, msg: '用户名错误'})
            }
            if (!await user.findOne({pwd})) {
                return res.send({code: 1, msg: '密码错误'})
            }
		  if( await captcha!=req.session.captcha){
            return res.send({code: 1, msg: '验证码错误'})
        }
            await user.findOne({name, pwd}, (err, data) => {
                req.session.userid = data._id;
            }).then((data) => {
                //console.log(data._id)
                res.send({code: 0, data})
            })
        
    }catch (err) {
      res.send(err)
    }
 });
//用户详细信息
router.get('/userinfo',(req,res)=>{
	//console.log(req.session.userid);
    //console.log(req.session.captcha);
    //res.send(req.session.captcha)

    user.findOne({_id:req.session.userid},(err,data)=> {
		console.log(data)
         res.send({code: 0, data:data})
    })
})

//用户退出
router.get('/loginout',(req,res)=>{
    delete req.session.userid;
    res.send({code: 0})
})

/*
一次性图形验证码
 */
router.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1l',
        noise: 2,
        color: true
    });
    req.session.captcha = captcha.text.toLowerCase();
      //console.log(req.session.captcha)
    /*res.type('svg');
    res.status(200).send(captcha.data);*/
    res.type('svg');
    res.send(captcha.data)
});

//mock数据获取商家列表
router.get('/shops',(req,res)=>{
    const data=require('../data/shops.json')
    res.send({code:0,data})
})

router.get('/info',(req,res)=>{
    const data=require('../data/data.json')
    // console.log(data.info)
    res.send({code:0,data:data.info})
})
router.get('/ratings',(req,res)=>{
    const data=require('../data/data.json')
    res.send({code:0,data:data.ratings})
})
router.get('/goods',(req,res)=>{
    const data=require('../data/data.json')
    res.send({code:0,data:data.goods})
})

module.exports=router