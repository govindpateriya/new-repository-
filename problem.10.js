let numbers = [5, 3, 9, 1, 44, 6];
let count = [];
let output = [];
let i = 0;
let max = Math.max(...numbers);

for (i = 0; i <= max; i++) {
    count[i] = 0;
}

for (i = 0; i < numbers.length; i++) {
    output[i] = 0;
}

for (i = 0; i < numbers.length; i++) {
    count[numbers[i]]++;
}

for (i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
}

for (i = numbers.length - 1; i >= 0; i--) {
    output[--count[numbers[i]]] = numbers[i];
}

for (i = 0; i < output.length; i++) {
    console.log(output[i]);
}
