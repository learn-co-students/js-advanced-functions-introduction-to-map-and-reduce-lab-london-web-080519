// Your code here
function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i<sourceArray.length; i++) {
        r.push(-sourceArray[i])
    }
    return r
}

function mapToNoChange(sourceArray) {
    let r = []
    for (let i = 0; i<sourceArray.length; i++) {
        r.push(sourceArray[i])
    }
    return r
}

function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i<sourceArray.length; i++) {
        r.push(sourceArray[i]*2)
    }
    return r
}

function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i<sourceArray.length; i++) {
        r.push(sourceArray[i]**2)
    }
    return r
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let r = startingPoint
    for (let i = 0; i<sourceArray.length; i++) {
        r += sourceArray[i]
    }
    return r
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return false
}