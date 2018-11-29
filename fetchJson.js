var HTTP = require('q-io/http')
HTTP.read('http://localhost:1337')
.then(json =>{
    return JSON.parse(json)
})
.then(console.log)