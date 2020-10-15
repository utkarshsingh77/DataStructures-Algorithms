var rotate = function(nums, k) {
    let resultArr = new Array(nums.length);
    //From the very last num in nums up to kth from last, add it the beginning of nums
    let counter = k;
    for (let i = 0; i < nums.length; i++) {
        resultArr[(i+k) % nums.length] = nums[i]
    }
    // Now slice off all the elements you added to the beginning above 
    for (let i = 0; i < nums.length; i++) {
        nums[i] = resultArr[i];
    }
};
