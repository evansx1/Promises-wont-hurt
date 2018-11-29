function parsePromised(json) {
    try{
        return Promise.resolve(JSON.parse(json))
        
    }catch(error){
        return Promise.reject(error)
    }
}

function onRespond(respond){
    console.log(respond.message)
}

parsePromised(process.argv[2])
.then(null, onRespond)