var trap = function(height) {
    let result = 0;
    let maxHeight = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] < maxHeight) {
            let nextPeak = checkDownStreamForGreatestVal(height, i, maxHeight);
            if (nextPeak > 0) {
                result += Math.min(maxHeight, nextPeak) - height[i];
            }
        }
        else if (height[i] > maxHeight) maxHeight = height[i];
    }
    return result;
};
    
var checkDownStreamForGreatestVal = function(array, idx, currentMax) {
    let greatestVal = 0;
    for (let i = idx + 1; i < array.length; i++) {
        if (array[i] > array[idx] && array[i] > greatestVal) {
            greatestVal = array[i];
        }
        if (greatestVal >= currentMax) return greatestVal;
    }
    return greatestVal;
}
