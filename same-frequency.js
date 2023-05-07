// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for (let i = 0; i < str1.length; i++) {
        counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
    }

    for (let j = 0; j < str2.length; j++) {
        counter2[str2[j]] = (counter2[str2[j]] || 0) + 1;
    }

    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}
