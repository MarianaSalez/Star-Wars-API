const server=require('./src/server')

// const {Character,Film,Planet} = require('./src/database')

// // Film.get(2).then((res)=>console.log(res))
// // Character.insert({_id:"125", name:"mariana", gender:'female',}).then((res)=>console.log(res))
// Planet.list().then((res)=>console.log(res))
// // Character.find()
// .populate('homeworld', ['_id', "name"])
// .populate('films',['_id', "title"])
// .then((res)=>console.log(res))

const PORT=8004

server.listen(PORT, ()=>{
    console.log(`DB listening on port ${PORT}`)
})