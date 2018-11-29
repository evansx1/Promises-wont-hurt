var promise = new Promise((fulfill, reject)=>{
    fulfill('I FIRED')
    reject(Error('I DID NOT FIRE'))
})
.then(console.log,onReject)

function onReject(respond){
    console.log(respond.message)
}
