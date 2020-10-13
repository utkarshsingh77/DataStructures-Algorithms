//This is Kadane's Algorithm!!

function maxSubsetSum(array) {
	let maxEndingHere = array[0];
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
		max = Math.max(max, maxEndingHere);
	}
	return max;
}
