var removeDuplicateLetters = function(s) {
    let lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    let stack = [];
    let seen = new Set();
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        if (seen.has(currentLetter)) continue;
        if (stack.length) {
            let topLetter = stack[stack.length - 1]
            while (currentLetter < topLetter  && lastIndex[topLetter] > i) {
                let removed = stack.pop();
                seen.delete(removed);
                if (stack.length === 0) break;
                topLetter = stack[stack.length -1]
            }
        }
        stack.push(currentLetter);
        seen.add(currentLetter);
    }
    return stack.join('');
};
