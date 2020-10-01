// O(N) time and space. Still need to optimize for O(1) space

var firstMissingPositive = function(nums) {
    let numsHash = {};
    for (const num of nums) {
        numsHash[num] = true;
    }
    let counter = 1;
    while (true) {
        if (!(counter in numsHash)) return counter;
        counter++;
    }
};
