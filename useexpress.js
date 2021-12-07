//引入express
const express = require('express');
const { request, response } = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/serve', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const me = {
        name: 'wu',
        age: 21
    }
    setTimeout(()=>{
        response.send(JSON.stringify(me));
    },3000);
});

app.post('/serve', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Acxess-Control-Allow-Headers','*');
    response.send('hello ajax post');
});

app.get('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {
        name: 'yuqi',
        age: 23
    }
    let str = JSON.stringify(data);
    response.send(str);
});

//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})