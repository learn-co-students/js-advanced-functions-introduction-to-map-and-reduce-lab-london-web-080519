// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(element => -element);
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  return sourceArray.map(element => element * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(element => element * element);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  const reducer = (element, total) => total + element;
  return sourceArray.reduce(reducer, startingPoint);
}
function reduceToAllTrue(sourceArray) {
  let booleanArray = sourceArray.map(element => {
    if (element) {
      return true;
    } else {
      return false
    }
  });
  return booleanArray.every(element => element === true)
}

function reduceToAnyTrue(sourceArray) {
  let booleanArray = sourceArray.map(element => {
    if (element) {
      return true;
    } else {
      return false
    }
  });
  return booleanArray.some(element => element === true)
}
