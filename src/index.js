module.exports = function reverse (n) {
    let num = Math.abs(n);
    let reverseNum = [...String(num)].reverse().join('');
    return Math.abs(Number(reverseNum));
};
