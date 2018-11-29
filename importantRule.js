function alwaysThrows (){
    return Promise.reject(Error('OH NOES'))
}
function iterate (argument){
    console.log(argument)
    return argument + 1
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)

.catch(error =>{
    console.log(error.message)
})
.done()