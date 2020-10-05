//Bitwise
var bitwiseComplement = function(N) {
    return N ? (Math.pow(2, Math.ceil(Math.log2(N))) - 1) & ~N : 1;
};

//Naive
var bitwiseComplement = function(N) {
    let binary = N.toString(2);
    let binaryArr = binary.split('')
    for (let i = 0; i < binaryArr.length; i++) {
        if (binaryArr[i] === '1') binaryArr[i] = 0;
        if (binaryArr[i] === '0') binaryArr[i] = 1;
    }
    binaryArr = binaryArr.join('');
    return parseInt(binaryArr, 2);
};
    
