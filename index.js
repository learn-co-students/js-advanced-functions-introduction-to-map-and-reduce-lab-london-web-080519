// Your code here

const mapToNegativize = sourceArray => {
    let newArray = []
    sourceArray.forEach(element => newArray.push(-element))
    return newArray
}

const mapToNoChange = sourceArray => {
    let newArray = []
    sourceArray.forEach(element=> newArray.push(element) )
    return newArray}

 const mapToDouble = sourceArray => {
     let newArray = []
     sourceArray.forEach(element => newArray.push(element * 2))
     return newArray
 }

 const mapToSquare = sourceArray => {
     let newArray = []
     sourceArray.forEach(element => newArray.push(element * element))
     return newArray
 }

 const reduceToTotal = (sourceArray, start = 0) => {
    let total = start 
    sourceArray.forEach(element => total += element)
    return total
 }

 const reduceToAllTrue = sourceArray => { 
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) return false
    }
    return true
  }

  const reduceToAnyTrue = sourceArray => { 
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) return true
    }
    return false
  }