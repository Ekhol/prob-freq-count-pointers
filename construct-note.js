// add whatever parameters you deem necessary
function constructNote(msg, chars) {
    const charCount = {};
    const msgCount = {};

    for (let char of chars) {
        charCount[char] = ++charCount[char] || 1;
    }

    for (let char of msg) {
        msgCount[char] = ++msgCount[char] || 1;
    }

    for (let char in msgCount) {
        if (!charCount[char]) {
            return false;
        }
        if (msgCount[char] > charCount[char]) {
            return false;
        }
    }
    return true;
}
