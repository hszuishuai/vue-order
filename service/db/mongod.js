const mongoose=require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/test');
const conn = mongoose.connection
conn.on('connected', function () {
    console.log('数据库连接成功!')
})

const userSchema=mongoose.Schema({
  'name':{type:String ,require:true},
    'pwd': {type: String, require:true},
    // 类型
    'phone': Number
})

const user=mongoose.model('User',userSchema)
module.exports={
    getModel(name){
        return mongoose.model(name)
    }
}
