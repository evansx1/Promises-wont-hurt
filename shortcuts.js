var promise = Promise.reject(Error('This is my error'))
setTimeout(()=>{
    promise.catch(OnRespond)
},2000)

var otherPromise = Promise.resolve('IM RESOLVED')
setTimeout(()=>{
    otherPromise.then(console.log, OnRespond)
},4000)

function OnRespond (respond){
    console.log(respond.message)   
}

