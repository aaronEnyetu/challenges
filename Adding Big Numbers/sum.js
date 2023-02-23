/* eslint-disable no-console */
function sum(str1, str2) {
    let str1Length = str1.length;
    let str2Length = str2.length;
    let str1Array = Array.from(str1, Number);
    let str2Array = Array.from(str2, Number);
    let sumOfDigit = 0;
    let result = [];
    let maxLengthStr = Math.max(str1Length, str2Length);
    while (maxLengthStr--) {
        sumOfDigit += (str1Array.pop() || 0) + (str2Array.pop() || 0);
        result.unshift(sumOfDigit % 10);
        sumOfDigit = Math.floor(sumOfDigit / 10);
    }

    while (sumOfDigit) {
        result.unshift(sumOfDigit % 10);
        sumOfDigit = Math.floor(sumOfDigit / 10);
    }

    return result.join('');
}

console.log(sum('99', '1'));