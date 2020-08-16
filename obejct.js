const ironMan = {
    name : '토니 스파크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

// 사용방법 1
function print(hero) {
    // 객체 비구조화(객체 구조분해) 라고도 말함
    const {name, actor, alias} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

// 사용방법 2
function print2({name, actor, alias}) {
    // 객체 비구조화(객체 구조분해) 라고도 말함
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

print2(ironMan);
print2(captainAmerica);

// 객제 비구조화 사용방법 3
const {name} = ironMan;
console.log(name);
