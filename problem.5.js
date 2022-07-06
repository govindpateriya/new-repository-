const cToF = function (celsius) {
    const cTemp = celsius;
    const ToFahr = cTemp * (9 / 5) + 32;
    const msg = `${cTemp}\ xBOC is ${ToFahr}\ xBOF.`;
    return msg;
}
console.log(cToF(12));

//second method

let celsius = 12;
farh = celsius * (9 / 5) + 32;
console.log(farh.toFixed(2));
