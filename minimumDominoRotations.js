var minDominoRotations = function(A, B) {
    let numsA = new Set();
    let numsB = new Set();
    let minSwaps = -1;
    for (const num of A) {
        numsA.add(num);
    }
    for (const num of B) {
        numsB.add(num);
    }
    if ([...numsB].length === 1 || [...numsA].length === 1) return 0;
    let counter = 0;
    numsA.forEach((num) => {
        counter = 0;
        for (var i = 0; i < A.length; i++) {
            if (A[i] !== num && B[i] === num) {
                counter++;
            } else if (A[i] === num) {
                continue;
            } else break;
        }
        if (i === A.length) {
            if (minSwaps < 0) minSwaps = counter;
            else if (minSwaps > 0 && counter < minSwaps) minSwaps = counter;
        }
    })
    numsB.forEach((num) => {
        counter = 0;
        for (var i = 0; i < B.length; i++) {
            if (B[i] !== num && A[i] === num) {
                counter++;
            } else if (B[i] === num) {
                continue;
            } else break;
        }
        console.log(counter)
        if (i === B.length) {
            if (minSwaps < 0) minSwaps = counter;
            else if (minSwaps > 0 && counter < minSwaps) minSwaps = counter;
        }
    })
    return minSwaps > 0 ? minSwaps : -1;
};
