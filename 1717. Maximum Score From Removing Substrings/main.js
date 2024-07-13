var maximumGain = function(s, x, y) {
    let result = 0;
    let top, bot;
    let topScore, botScore;
    if (y > x) {
        top = "ba";
        topScore = y;
        bot = "ab";
        botScore = x;
    } else {
        top = "ab";
        topScore = x;
        bot = "ba";
        botScore = y;
    }
    let stack = [];
    for (let char of s) {
        if (char == top[1] && stack.length > 0 && stack[stack.length - 1] == top[0]) {
            result += topScore;
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    let newStack = [];
    for (let char of stack) {
        if (char == bot[1] && newStack.length > 0 && newStack[newStack.length - 1] == bot[0]) {
            result += botScore;
            newStack.pop();
        } else {
            newStack.push(char);
        }
    }
    return result;
};