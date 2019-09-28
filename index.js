// Your code here
function mapToNegativize(sourceArray) {
    let answer = []
    for (let i=0; i<sourceArray.length; i++) {
        answer.push(sourceArray[i] * -1)
    }
    return answer
}
function mapToNoChange(sourceArray) {
    return sourceArray
}
function mapToDouble(sourceArray) {
    let answer = []
    for (let i=0; i<sourceArray.length; i++) {
        answer.push(sourceArray[i] * 2)
    }
    return answer
}
function mapToSquare(sourceArray) {
    let answer = []
    for (let i=0; i<sourceArray.length; i++) {
        answer.push(sourceArray[i] * sourceArray[i])
    }
    return answer
}

function reduceToTotal(sourceArray, startingPoint) {
    let memo = 0
    for (let i=0 ; i< sourceArray.length; i++) {
        memo += sourceArray[i]
    } 
    return (startingPoint ? startingPoint + memo : memo )
}

function reduceToAllTrue(sourceArray) {
    let memo = true
    for (let i=0; i<sourceArray.length; i++) {
        if (!sourceArray[i]) {
            memo = false
        }
    }
    return memo
}

function reduceToAnyTrue(sourceArray) {
    let memo = false
    for (let i=0; i<sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            memo = true
        }
    }
    return memo
}