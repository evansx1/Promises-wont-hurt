function onFulfilled (respond){
    console.log(respond)
}

first()
.then(respond =>{
    return second(respond)
})
.then(respond =>{
    onFulfilled(respond)
})
