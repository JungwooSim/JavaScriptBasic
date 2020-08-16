function hello(name) {
    console.log(`hello ${name}`);
}
hello("big")

const add = (a, b) => {
    return a + b;
}
const sum = add(1,2);
console.log(sum);

const add2 = (a, b) => a + b;
const sum2 = add2(1,2);
console.log(sum2);
