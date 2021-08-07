const express = require('express')

const app = express()
//允许跨域
app.use(require('cors')())
//加入中间件，将请求参数转换成json

app.use('/json',express.static(__dirname+'/json'))


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})