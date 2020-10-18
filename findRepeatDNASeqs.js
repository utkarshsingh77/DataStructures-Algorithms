/**
 * @param {string} s
 * @return {string[]}
 */

//Approach with two sets to keep track of what subseq has been seen and also what has already been added to results.
//This is much faster runtime than the below hash table solution
var findRepeatedDnaSequences = function(s) {
    let seen = new Set();
    let added = new Set();
    let results = [];
    for (let i = 0; i < s.length - 9; i++) {
        let currentSub = s.slice(i, i + 10);
        if (seen.has(currentSub) && !added.has(currentSub)) {
            results.push(currentSub);
            added.add(currentSub)
        } else {
            seen.add(currentSub)
        }
    }
    return results;
};


//Approach with just one hash table which sets a subseq to true once seen, only added when true and set to false once added.
var findRepeatedDnaSequences = function(s) {
    let seen = {};
    let results = [];
    for (let i = 0; i < s.length - 9; i++) {
        let currentSub = s.slice(i, i + 10);
        if (seen[currentSub] === true) {
            results.push(currentSub);
            seen[currentSub] = false;
        } else if (seen[currentSub] === false) {
            continue;
        } else {
            seen[currentSub] = true;
        }
    }
    return results;
};
