let data = require('q-io/http')

data.read('http://localhost:7000/')
.then(id =>{
    return data.read('http://localhost:7001/' + id)
})
.then(JSON.parse)
.then(console.log)