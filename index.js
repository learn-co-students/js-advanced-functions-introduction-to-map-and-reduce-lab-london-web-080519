import { start } from "repl";

// Your code here

function mapToNegativize(sourceArray) {
	return sourceArray.map(item => -item);
}

function mapToNoChange(sourceArray) {
	return sourceArray.map(item => item);
}

function mapToDouble(sourceArray) {
	return sourceArray.map(item => item * 2);
}

function mapToSquare(sourceArray) {
	return sourceArray.map(item => item ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
	return (
		startingPoint +
		sourceArray.reduce(function(startingPoint, currentValue) {
			return startingPoint + currentValue;
		})
	);
}

function reduceToAllTrue(sourceArray) {
	return sourceArray.reduce(function(startingPoint, currentValue) {
		return !!(startingPoint && currentValue);
	});
}

function reduceToAnyTrue(sourceArray) {
	return sourceArray.reduce(function(startingPoint, currentValue) {
		return !!(startingPoint || currentValue);
	});
}
