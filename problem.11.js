function sortDescending(num) {
    return Number(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(sortDescending(3, 3, 4, 4, 7, 8,));
