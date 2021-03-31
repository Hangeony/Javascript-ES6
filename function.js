//function
//프로그렘에있어서 가장기본적인 빌딩블록 이라고 할수있음
//장점. 서브 프로그레밍이라고 불리며 여러번 재사용가능
//한가지의 테스크나 어떠한 값을 계산하기 위해서 사용

//1.function declaration
//function name {param1, param2}{body...return;}
// 함수 이름 {파라미터를 쭉 나열}{기본적인 비지니스 로직 ... 리턴}
//하나의 함수는 하나의 일만 하도록 만들어야함
//naming : doSomething, command, verb
//함수이름을 작성할때 무언가 동작하는 것이기때문에 동사형태로 이름을 지정
//함수이름을 지정하기 어려울땐 세분화 할작업이 필요하다.
//자바스크립트에서 function은 object이다 변수에 할당 파라미터에 전달 리턴타입
function printHello(){
    console.log("Hello minsub");
}
printHello();
//조금 유용한 함수 파라미터를 메세지에 전달
//로그라는 함수를 호출해서 메세지를 전달.
function log(message){
    console.log(message);
}
log('Hello@');
log(1234);
//TypeScript에서는 항상 파라미터나 리턴타입을 명시해줘야함.

//2.Parameters
//premivive 메모리에 벨류가 그대로 저장 벨류가 전달
//Object 메모리에 레퍼런스가 저장되어 그대로 레퍼런스가 전달
//전달된 오브젝트에 이름을 무조건 바꾸는 함수, 메모리에 저장되어 있는 오브젝트의 
//저장되어있는 geony의 이름을 minsub으로 바꿔줄수 있다.
//함수안에서 오브젝트에 이름을 바꾸면 그대로 저장된다.
function changeName(obj){
    obj.name='minsub';
}
const geony = {name : 'geony'};
changeName(geony);
console.log(geony);

//3.Default parameters (added in es6) 새로 추가된 문법
//밑에 함수는 message와 from의 두개의 파라미터를 불러오는 함수이지만
//message의 파라미터만 불러왔을때 from의 파라미터의 값이 정리되지 않았을때 
//조건문을 정해서 undefined의 값을 정리했지만 ,지금은 파라미터 옆에 디폴트값을 바로 정리가 가능하다.
function showMessage(message, from ='Maplestroy'){
    // if(from === undefined){
    //     from = 'Maplestroy'
    // } 생략가능
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4.★Rest parameters (added in es6) 새로 추가됨 ★
//... ->배열을 의미함★ 민섭이가 중요하다고함
function printAll(...args){ //3개의 값을 가지고 있는 배열을 의미함.
    for(let i = 0; i < args.length; i ++){
        console.log(args[i]);
    }
    
    for(const arg of args){ //★중요함 args의 있는값을 하나씩 arg에 넣는다.
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('geony','minsub','jinsuBro');

//스프레드 연산자. ★민섭이가 중요한부분.
const test1 = { name: 'als' };
const test2 = { ...test1 }
console.log(test1);
console.log(test2);
console.log(test1 === test2);

//5.Local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';//지역변수 안에서만 접근 가능
    console.log(message); // local variable
    console.log(globalMessage); // 어느곳에서 사용가능
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 오류코드
}
printMessage();

//6.Return a value
function sum (a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

//7.Early return, early exit
//블록안에서 사용하면 가동성이 줄어들음 
//조건이 맞지 않을때만 빨리 리턴해서 함수를 종료해서 조건이 맞을떄만 필요한 로직을 사용할떄가 더 좋다

//나쁜예
function upgradeUser(user){
    if(user.point > 10){
        //log uprade logic...
    }
}
//좋은예
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic .
}

//First-class function
//funtion은 변수 할당 되고, function 파라미터에 전달 되며 , return값으로 return이 된다.
//할당된 다음된 다음부터 호출이 가능한 반면에 호이스팅이 된다.
//함수가 선언되기 이전에 호출해도 가능하다 이것은 자바스크립트 엔진이 선언된것을 제일위로 올려줘서 그렇다.

//1.function expression
const print = function(){ // anonymous function 이름이 없는 함수. 아니면 함수의 이름을 작성 할수있음 
    console.log('print');
}
print(); //함수처럼 사용 할 수있음. 바로 print가 출력
const printAgain = print;  //다른변수에 또 할당하게 되면 
printAgain(); //결국 printAgain은 함수 print를 가르키게된다.
const sumAgin = sum;
console.log(sumAgin(1,3));

//2.callback function using function expression
//함수를 전달해서 상황이 맞으면 전달된 함수를 불러가 callback function이다.
//즉 두가지가 파라미터로 전달받아서 함수의 구현사황에 맞게 호출된다.        
//                 전달받을놈, 호출이맞으면, 호출이 틀리면      
function randQuize(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function 이름 없는 함수
const printYes = function(){
    console.log('yes !');
}
//named function 이름 있는 함수
//디버깅할때 디버깅 스텍에서 이름이 나올때 확인
//함수안에서 자신스스로 또다른 함수를 호출 = recursions 라고함
//정말 필요할 때 피부나 치수 반복되는 평균값을 계산등 사용한다.
const printNo = function print(){
    console.log('no !');
}
randQuize('love you',printYes, printNo);
randQuize("I don't know javascript", printYes, printNo);

//Arrow function
//항상 이름없는 함수를 사용할때
//간결 하게 사용가능 , 함수 배열 리스트일때 더욱더 활용도가 높음
const simplePrint = function(){
    console.log('simplePrint!')
}
//☆const 변수를 또 선언해서 생겼던 에러임.
const simplePrint1 =  () => console.log('simplePrint !');

const add1 = (a, b) => a + b;

const add2 = function(a, b){
    return a + b;
};

const simpleMultiply = (a, b) =>{
    //do something more
    //함수안에서 좀더 다양한 일을해서 블록이 필요하다면 리턴이라는 키워드를 통해서 값을 넘겨줘야함.
    return a * b;
};

//IIFE : Immediately Invoked Function Expression
//함수를 선언을 하면 함수를 따로 호출해줘야하지만 선과 동시에 호출하려면 ()로 묶고 사용하면 바로 호출가능하다.
function hello(){
    console.log('IIFE');
}

(function hello(){
    console.log('IIFE');
})();

//function Quize time
//function calulate(command, a, b)를 사용해서 더하거나 뺴거나 사용하게 하시오.

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;

function calulate(command, a, b){
    switch (command){
        case 'add':
            return add(a,b);
        case 'substract' :
            return substract(a,b);
        case 'divide' :
            return divide(a,b);
        case 'multiply' :
            return multiply(a,b);
        case 'remainder' :
            return remainder(a,b);
        default :
            throw Error('unkonw command');
    }
}

console.log(calulate('substract', 2, 3));
