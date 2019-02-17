const  express=require('express')
const path=require('path')
const app=express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

const index=require('./router/index.js')

app.set('views', path.join(__dirname, 'views'));  //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')))


//session  中间件的使用
app.use(session({
    secret: '12345',
    cookie: {maxAge: 1000*60*60*24 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}))

app.use('/',index)

module.exports=app