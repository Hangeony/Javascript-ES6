//1.String concatenation
//string Concatenation 
//리터럴의 좋은점 줄바꿈을 해줘도 중간에 싱글코트를 써도 그대로 문자열로 바꿔줌
//중간에 특수기호를 연결안되는데 싱글 코트가 연결 해줘야 나옴
// 문자열 중간에 '을 사용할꺼면 (" ' ")사용해야 문법오류가 안난다,  '\n'줄바꿈 '\t' 탭키.
console.log('my' + 'cat'); //문자와 문자가 연결됨
console.log('1' + 2); //문자열과 숫자더함.
console.log(`string lierals : 
''''
1 + 2 = ${1 + 2} `);
console.log("Geony's \n\t Book");

//2.Number operators
console.log(1 + 1); //더하기
console.log(1 - 1); //빼기
console.log(1 * 1); //곱하기
console.log(1 / 1); //나누기
console.log(5 % 2); //나머지
console.log(2 ** 3); //제곱 

//3.Increment and Decrement Operators

//counter = counter +1;같은 뜻임 
//perIncrement = counter;
let counter = 2; 
const preIncrement = ++counter; //여기서 하나 증가되고 3 = postIncrement이 성립됨. 
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

//postIncrement = counter;
//conter = counter +1
const postIncrement = counter++; //postIncrement 값은 preIncrement의 값을 가져오고 counter의 값은 나중에 업데이트됨
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

// --counter | counter-- 
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement : ${postIncrement} , counter : ${counter}`);

 
//4.Assignment operators 
let x = 3;
let y = 6;
x += y; // x = x + y; 반복되는 x는 생략해서 작성가능
x -= y;
x *= y;
x /= y;

//5.Comparison operators
//비교 연산자 (왼쪽이 기준값으로 비교함.)
console.log(10 < 6); 
console.log(10 <= 6); 
console.log(10 > 6); 
console.log(10 >= 6);

//6. Logical operators : ||(or), && (and), !(not)
const value1 = false;
const value2 = 4 > 2;

// ||(or) 처음으로 값이 true가 나오면 멈춤.
console.log(`or : ${value1 || value2 || check()}`);
//연산을 많이 하는 함수를 호출하거나 연산이 복잡한 연산자를 맨뒤에 둬야함.
// 3개중에 하나라도 트루라도 트루로 출력됨.
// check는 true를 리턴함. 처음으로 트루가 나오면 멈춤.
//추가 설명 value1부터 참이면 value1이 실행 거짓이면 value2가 실행되고 value2도 거짓이면 check()함수가 실행된다.

// &&(and), 값이 모두 참이여야 값이 출력됨 ,하나라도 false값이 나오면 안됨.
console.log(`and : ${value1 && $value2 && check()}`);

function check(){ 
    for(let i = 0; i < 10; i ++){
        //wasting time 
        console.log('Sexyking minsub');
    }
    return true;
}
// let a = null;
// let b = a || '1232';
// console.log (b);

//often used to compress long if-statment
//nullableObject && nullableObject.something
//굳이 코드를 풀어쓸때 ?
// if(nullableObject != null){
//     nullableObject.somethimg;
// }

//!(not) 값을 반대로 바꿔줌
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion //문자열과 숫자열을 비교하지만 자바스크립트 문법에선 같은 5가 비교 되므로 참이 나옴.
console.log(stringFive == numberFive); 
console.log(stringFive != numberFive);

//=== strict equality, no type conversion //타입이 신경써서 타입까지 비교해서나옴. 왠만하면 ===을 써서 값을 비교하는게 좋을것임. 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
//geony1 과 geony2에는 똑같은 데이터가 들어가지만 다른레퍼런스가 들어가서 서로다른 오브젝트를 가르킴
//geony1 의값을  geony3이 똑같은 값을 할당받아서 참이나온다.
const geony1 = {name : 'geony'};
const geony2 = {name : 'geony'};
const geony3 = geony1;
console.log(geony1 == geony2);
console.log(geony1 === geony2);
console.log(geony1 === geony3);

//equality - puzzler(variable.js booleanType참고.)
console.log(0 == false); //0,emtpyString은 false로 간주로 됨  
console.log(0 === false); //but 0은 booleanType이 아니기때문에 
console.log('' == false); // 위와 동일
console.log('' === false); 
console.log(null == undefined); // null과 undefinend는 같은값으로 출력되지만
console.log(null === undefined); //다른 타입이여서 false

//8.Conditional operators : if
//if, esle if, else
const name = 'geony';
if(name === 'geony'){ //name값이 geony이거나
    console.log('javascript c8');
} else if(name === 'minsub'){ // name이 minsub이거나 
    console.log('javascript good'); 
}else {  //둘다아니거나
    console.log("I don't know");
}

//9.Ternary operator: ? (3항 연산자)
//condition ? value1 : value2; 간단할때만 사용할때 사용함.
console.log(name === 'geony' ? 'yes' : 'no'); // ?기준으로 트루면 왼쪽이 출력되고 아니면 오른쪽이 출력함. 여러개를 묶고 비교할때는 비효율적 if, swich를 사용하는것을 추천

//10. Switch statement
//else if를 반복한다면 swich문을 활용하는것이 좋다.
//Ts 에서 정해져있는 타입을 검사하거나 이넘타입을 검사할때 가동성이 좋다.
const browser = 'Geony';
switch (browser){
    case 'Geony':
        console.log('Go');
        break; //멈추고
    case 'Chrome': //Chrome이랑 Firefox랑 같은 값을 출력하면 한개로 묶을수 있다.
    case 'Firefox':    
        console.log('LoL');
        break;
    // case 'Firefox':// 여기부분 생략가능.
    //     console.log('LoL');
    //     break;
    default:
        console.log('Good');
        break;
}

//11. Loops
//whie loop (statement가 ture가 될 때까지 반복시킴)
let i = 3;
while (i > 0){
    console.log(`while : ${i}`);
    i--;
}

//do while loop 먼저 블록을 실행시킨다음 조건이 만족후 실행시킴 
//(위에서 i가 0이 되었으므로 do에서 조건을 먼저 검사한 후 값이 출력된 뒤 while이 실행됨.)
//블록을 먼저 실행 시킬때에는 while do를 실행시키고 , 조건을 만족 할때만 실행시키고 싶다 하면 do while을 사용
do{
    console.log(`do while : ${i}`);
    i--
}while (i > 0);


//for loop, for(시작; 컨디션; 어떤스텝을 쓸건지)
//시작은 딱한번만 준비시켜두고 하나감소시키고 출력한다.
//시작을 한번만 호출하고 그다음 블록을 실행하기전 컨디션이 맞는지 안맞는지 검사하구 블록을 실행하고 스텝을 실행한다.
for(i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}

for(let i = 3; i > 0; i--){
    //변수를 인라인안에서 사용하는것도 좋은 방법이다.
    console.log(`inline variable for : ${i}`);
}

//nested loops
//i가 0일때 j를 0~9까지 반복시키고 i가 1이증가 되고 j가 또 다시 0부터 9까지 반복한다.
//nested로 작성하게되면 O(n²) cpu에좋지 않다.
for(let i = 0; i <10; i++){
    for(let j = 0; j <10; j++){
        console.log(`i : ${i}, j : ${j}`);
    }
}
//break, countinue
//Q1. 0~10까지 출력하는데 짝수번호만 출력하게하기
for(let i = 0 ; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`Q1.${i}`);
    }
}

//Q2. 0~10까지루핑을 하는데 숫자 8을 만나면  break;를 사용해서 종료시켜라
for(let j = 0; j <= 10; j++){
    if(j > 8){
        break; // for문에서도 break;가 먹힌다
    }
    console.log(`Q2.${j}`);
}
