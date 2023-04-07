const express = require('express')
const taskRouter = require('./routes/task')

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/v1/tasks', taskRouter )
const port = 3000

app.listen(port, ()=>{
    console.log(`Sever is running at port: ${port}`);
})