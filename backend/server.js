const express = require('express')
const socket  = require('socket.io')

const app = express()

const PORT = 5000

const server = app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

const io = socket(server,{
    cors:{
        origin:'*',
        method:['GET','POST']
    }
})

io.on('connection',(socket) => {
  socket.emit('connection',null)
  console.log("new user connected")
  console.log(socket.id)  
})