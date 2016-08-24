var sum = function(array) {
    return array.reduce(function(a,b) {
        return a + b
    }, 0)
}

module.exports.sum = sum