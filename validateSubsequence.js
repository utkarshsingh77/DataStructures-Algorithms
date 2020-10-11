function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrPointer = 0;
	let subPointer = 0;
	while (arrPointer < array.length && subPointer < sequence.length) {
		if (array[arrPointer] === sequence[subPointer]) subPointer++;
		arrPointer++;
	}
	return subPointer === sequence.length;
}
