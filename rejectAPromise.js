let promise = new Promise((fulfill, reject)=>{
    setTimeout(()=>{
        reject(Error('REJECTED!'))
    },300)
})
.then(null, respond =>{
    onReject(respond)
})
function onReject (error) {
    console.log(error.message)
}