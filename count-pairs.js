// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let counter = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            counter++;
            left++;
            right--;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }
    return counter;
}
