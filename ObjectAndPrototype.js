// prototype -> 객체를 만들고 난 후 공유할 수 있는 변수나, 함수
// Object constructor
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};

Animal.prototype.shardValue = 1;

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

console.log(dog.shardValue);
console.log(cat.shardValue);

dog.say();
cat.say();
