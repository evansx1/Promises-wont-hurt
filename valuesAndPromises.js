function attachTitle (string) {
    return 'DR. ' + string
}

var promise = Promise.resolve('MANHATTAN')

promise.then(attachTitle)
.then(console.log)