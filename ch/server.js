var websocketserver=require('ws').Server
wss=new websocketserver({port:8181})
wss.on('connection',function(ws){
console.log('client connected')
ws.on('message',function(l){
    console.log(l)
})
})

