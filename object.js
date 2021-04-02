//objects
//변수 하나당 값을 하나만 담을 수 있다.
//밑에 처럼 사용하면 추가하면 값을 추가 할때 관리하기가 힘들다
//로지컬하게 그룹으로 묶어서 생각하기가 힘들다.
//이것을 개선하고자 OBJECT를 사용함.
//object = {key : value};
//오브젝트는 key 접근 할수있는 변수 properties와 properties가 가지고 있는 값으로 나누어진다.

// const name = 'geony';
// const age = 27;
// print(name, age);

//1.Literals and properties
const obj1 ={}; //'object literal' syntax문법
const obj2 = new Object(); // 'object constructor' syntax문법

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const geony = { name : 'geony', age: 27}; //클래스가 없어도 {}로 바로 Object를 만들수있다.
//name = key value : 'geony' properties값 
print(geony);
//with JavaScript magic (dynamically typed language)
//can add properties later
//javascript는 동적으로 type이 Runtime으로 결정됨
//Runtime이란 프로그램이 동작하고 있을때를 말한다.
//뒤늦게 값을 추가 할 수 있다.
//너무 동적으로 코딩하면 나중에 유지보수 할 때 어렵다.
geony.hasJob = true;
console.log(geony.hasJob);

//삭제도 가능
// can delete properties later

delete geony.hasJob;
console.log(geony.hasJob);

//2. Computed properties 계산된 properties라는 의미이다.
//properties = StringType으로 지정해서 값을 받아와야함.
// .을 쓰는것과 []을 쓰는 차이는
//.은 coding하는 그순간 그 key 해당하는 값을 받아오고 싶을때 사용한다.
//[]은 정확하게 어떤 key가 모를때 runtime에서 결정 될때 사용한다.
//코딩할땐 그냥 .을 쓰는게 맞다. 실시간으로 원하는 값을 불러올때는 []을 쓰는게 맞다.
console.log(geony.name); 
console.log(geony['name']); //배열에서 데이터를 받아오는 것처럼 접근이 가능, 
geony['hasJob'] = true;
console.log(geony.hasJob);

function printValue(obj, key){
    //console.log(obj.key); // obj에 key에 properties가 들어있니 ? 라고 물어본다.
    console.log(obj[key]);
}
printValue(geony,'name');
printValue(geony,'age');

//3.Property value shorthand
//object를 
const person1 = {name : 'geony', age : 27};
const person2 = {name : 'minsub', age : 27};
const person3 = {name : 'jinsu', age : 29};
const person4 = makePerson('new',30);
const person5 = new Person('function',40);
console.log(person4);
console.log(person5);

//4.Constructor function
//javascript는 properties value shorthand라는 기능이 있어서 key와 value의 값이 동일하다면 생략가능하다.
//object를 필요할때 일일이 만들게 되면 불가피할때 동일한 key와 value를 반복해서 작성해서 만들어야하는 문제점이 있었다
//함수를 이용해서 값만 전달해 주면 이렇게 object를 만드는 함수를 만들 수 있다.
//즉 class의 template과 같다. 
//순수하게 object를 생성하는 함수들은 대문자로 시작하게 함수를 만들고 return이라는 값을 하지 않고 this를 사용함
function makePerson(name, age){
    return {
        //name : name, age : age,
        name, age,
    };
}
function Person(name, age){
    //생략된것은 this = {};
    this.name = name;
    this.age = age;
    //생략된것은 return this;
}

//5.in Operator : property existence check(key in obj)
//in operator = 해당 하는 object안에 key가 있는지 없는지 확인하는것이다.
console.log('name' in geony);
console.log('age' in geony);
console.log('random' in geony); //정의하지 않은 key를 사용하면 false가 나옴
console.log(geony.random);//정의 되있지 않아서 undefined가 출력됨.

//6.for...in vs for...of
//for (key in obj)
//console.clear(); 콘솔 클리어하는 함수.
//이렇게 in이라는 keyword를 사용해서 쓸 수도 있다.
//geony이 가지고 있는 key들이 지역변수 key에 할당이 되어 진다.
//geony안에 있는 key들이 모두 출력된다.
for(key in geony){
    console.log(key);
}
//for (value of iterable) object를 쓰는게것이 아니라 배열과 같은 배열 list 순차적으로 iterable한 아이들일때 사용한다.
const array = [1, 2, 3, 4, 5]; // 순차적으로 데이터가 담겨있는 데이터가 있다고 가정하고 모든 데이터를 출력하려면
for(let i = 0; i < array.length; i ++){
    console.log(array[i]);
}
//위에것을 좀더 쉽게 작성한것.
//array에 있는 모든 값들이 value에 들어간다.
for(value of array){
    console.log(value); 
}

//7.Fun cloning
//Object.assign(dest, [obj1, obj2, obj3....])
//메모리에는 user1 = name : 'geony', age : 27값을 가지고있는데
//user1에 user2에 할당해서 user2에도 동일한 값을 가지게 된다.
const user1 = {name : 'geony', age : 27};
const user2 = user1;
user2.name = 'coder'; // user2에 네임 값을 변경하면 동일한 인스턴스를 가지고 있기때문에 user1에 있는 name의 값이 변경된다. 
console.log(user1);

//old way 낡은 방법
//user1에 있는 object를 수동적으로 값을 넣는방법이다.
const user3 = {};
for(key in user1){ //1key = name, 2key=  age가 된다. 그래서 user3에 있는 값을 추가하는데 값은 기존에 있는 name과 age의 value = coder, 27이 할당된다.
    user3[key] = user1[key]; //user3[key] = user1에있던 value를 할당 해준다.
}
console.log(user3); //값들이 복사된것을 확인 할수 있다.

//다른방법으로는 Object에 있는 Object.assign()을 사용하는방법이다.
//Objects는 javascript에 있는 기본적으로 탑제 되어 있는 중에 하나이고 javascript에 있는 모든 Object는 상속 받는다.
//Object.assign(); assign() <- ctrl키 를 클릭을 누르면 어떤값을 리턴하는지 볼수있다.
//새로운 함수나 api를 사용할때 어떤 파라미터를 전달해서 어떤값을 return하는지 확인하고 사용하는것이 좋다.
//target : T 복사하고자 Target과 복사를 하려고하는 surce: U 를 같이 전달 해주고 return값은 target과 복사하고자 하는것을 T & U가 리턴하는것을 확인 할 수 있다.
const user4 = {};
Object.assign(user4, user1);
console.log(user4);
console.log('user1의 값복사하기');
const user5 = Object.assign({},user1); //위에 user4의 값 복사와 동일한 방법이다.
console.log(user5);

//another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);//값이 뒤에 있을 수록 앞에있던 동일한 프로포티가있다면 값을 덮어 쓰인다. 이런점을 유의해서 assign을 사용해야한다.
console.log(mixed.color);
console.log(mixed.size);

//객체지향을 언어를 공부할때 자바책을 읽는것을 추천한다.