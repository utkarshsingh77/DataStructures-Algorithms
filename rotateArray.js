var rotate = function(nums, k) {
    let resultArr = new Array(nums.length);
    //Build result array with the correct index after applying the rotation
    let counter = k;
    for (let i = 0; i < nums.length; i++) {
        resultArr[(i+k) % nums.length] = nums[i]
    }
    // Copy resultArr into nums as to rotate nums in place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = resultArr[i];
    }
};
