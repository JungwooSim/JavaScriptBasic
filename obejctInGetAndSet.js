// 배열 선언 및 사용 방법(간단한)

const objects = [
    {name : '멍멍이'},
    {name : '야옹이'}
];

console.log(objects[0].name);
console.log(objects[1].name);
console.log(objects.length);

objects.push({name : '뿡뿡이'});
console.log(objects);

console.log(objects.length);

const numbers = [10, 20, 30, 40, 50];

for (let i = 0 ; i < numbers.length; i++) {
    console.log(numbers[i]);
};

for (let number of numbers) {
    console.log(number);
};

const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : 2
};

console.log(Object.entries(doggy)); // GET Key, Value
console.log(Object.keys(doggy)); // GET Key
console.log(Object.values(doggy)); // GET Value

for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`); // 템프리터럴 이란 방식
}

// 배열 내장 함수
const superheroes = [
    '아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'
];

function print(hero) {
    console.log(hero);
};

// 배열 내장 함수 - forEach()
superheroes.forEach(print);
superheroes.forEach(function print(hero) {
    console.log(hero);
});

superheroes.forEach((hero => {
    console.log(hero);
}));

// 배열 내장 함수 - map()
const array = [1,2,3,4,5,6,7,8];
const square = n => n * n;
const squared = array.map(square);
console.log(squared);

const items = [
    {
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

// 배열 내장 함수 - indexOf()
const index = superheroes.indexOf('토르');
console.log(index);

// 배열 내장 함수 - findIndex
const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false
    }
];

console.log(todos.findIndex(todo => todo.id === 3));
console.log(todos[todos.findIndex(todo => todo.id === 3)]);

// 배열 내장 함수 - filter()
const tasksNotDone = todos.filter(todo => todo.done === true);
console.log(tasksNotDone);

// 배열 내장 함수 - splice()
const numbersIndex = numbers.indexOf(30);
console.log(numbers);
numbers.splice(numbersIndex,2); // 인덱스에서 2번째 인자만큼 지우기
console.log(numbers);

// 배열 내장 함수 - unshift(), pop()
numbers.unshift(123); // 가장 앞에 추가하기
console.log(numbers);

console.log(numbers.pop()); // 뒤에서 부터

// 배열 내장 함수 - concat()
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2); // 배열 합치기 (원본 보장)
console.log(concated);

// 배열 내장 함수 - join()
const arr3 = [1,2,3,4,5,6];
console.log(arr3.join()); // 배열을 문자열로
console.log(arr3.join(' ')); // 배열을 문자열로

// 배열 내장 함수 - reduce()
const arr4 = [1,2,3,4,5];

const arr4Sum = arr4.reduce((accumlator, current) => accumlator + current, 0)
console.log(arr4Sum);

const arr4Avg = arr4.reduce((accumlator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumlator + current) / array.length;
    };
    return accumlator + current;
}, 0);

console.log(arr4Avg);

const alphabets = ['a','a','a','b','c','c','d','e'];
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts);
