//1.Use strict
// flecible == dengerous
//added ECMAScript s 비상식적인 것을 막음
'use strict';

console.log("hello word");
let a;
a = 6;
console.log(a);

//2.Variable 변수 변경될수있는것 
//let (added in ES6) (읽고 쓰는거 가능)
let global= 'global name'; 
//global scope은 어느 곳에서나 접근 가능 
//application을 실행부터 끝날때까지 메모리에 탑재 for if같이 쓸수 있을때 효율 극대 
{
    let name = 'geony'; // name을 geony로 저장함
    console.log(name); 
    name = 'hello';   //다른값을 넣어서 저장함.
    console.log(name);
    console.log(global);
}
console.log(name); // {}->block scope 블럭 밖에서는 더이상 볼수가 없음.
console.log(global);

//var 왜 쓰면 안되는가 ? -> 선언하지 않아도 실행됨
//var hoisting (★어디에 선언 햇냐 상관없이 항상 제일 위로 선언을 끌어 올려주는것을 말함.)
console.log(age);//age가 선언이 안되어두 값이 나옴. undefined가 나옴
{
    age = 4;
    var age;
}
console.log(age); //블록을 철저히 무시함. 어디에서나 사용 가능함. 초창기에는 유연해서 자연스럽게 사용 됬지만 현재는 불편해짐
//BABEL을 사용 해서 es5로 다운그래이드

//3. Contants (읽는것만 가능)
//한번 할당하면 값이 절대 안바뀜. 값을 선언함과 동시에 값을 변경 불가능
//Mutable data type (let)  변경이 가능한 변수  | Immutable data type (contans) 변경 불가능
//장점
//1보안상으로 값을 변경하는것을 막음. 
//2. application을 실행되면 한가지가 실행되는데 Thread들이 동시에 실행 할때 여러개의 값을 변경하지 않게 하려구 사용함, 보다 안전해짐
const daysinweek = 7;
const maxNumber = 5;

//note!
//Mutable  Object , array data type  대부분의 오브젝트는 타입을 변경 가능하다.
//Immutable data type 절대 변경 불가 data type : premitive -> string type 변경 불가 ,frozen


//4. Variable type
//primitive 한가지 아이템을 말함 (number, string boolean, null, undefiendn, symbol)
//object, box container  싱글아이템을 여러개 묶은것을 말함 
//function, first-class 변수에 할당이 가능 함수에 파라미터 리턴타입으로도 지원가능함.
//javascript는 number하나로 통일 Java,C 언어처럼 따른것을 신경안써두됨 (굳이 타입을 지정하고 싶었을 때 ex: let a: number = 12; , let b: number = 1.2;)
 const count = 18; // integer;
 const size = 12.5; //decimal number;
 console.log(`value:${count}, type:${typeof count}`);
 console.log(`value:${size}, type:${typeof size}`);
 
//number 에서 특별한 숫자
//연산할때 무엇을 연산할것인지 알고 써야함
 const infinity = 1 / 0; //무한대의 숫자값 
 const negativeInfinity = -1 / 0; 
 const nAn = 'not a number' / 2; // string 을 숫자로 나눌때  
 console.log(infinity);
 console.log(negativeInfinity);
 console.log(nAn);
//bigInt
//숫자뒤에 n만 붙혀주면됨 새로 추가됨 (크롬이랑 파이어폭스에서만 지원)
const bigInt = 12345678901234567890123456789n; //over((-2*53)~ 2*53)) 까지 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
 
//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value:${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) 변수의 값이 자동으로 붙혀져서 나옴.
console.log(`value : ${helloBob}, type:${typeof helloBob}`);  //밑에랑 같은뜻 ``을 사용하면 + 기호 생략가능함.
console.log('value : ' + helloBob + 'type: ' + typeof helloBob);

//boolean 밑에표 참.
//true : any other value
//false : 0, null, undefined, NaN, ''
const canRead = true; 
const test = 3 < 1 ; 
console.log(`value : ${canRead} type : ${typeof canRead}`);
console.log(`value : ${test} type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing} type : ${typeof nothing}`);
//undefind
let x; // 값이 없을 때  x,y가 같은값이 출력됨
let y = undefined;
console.log(`value : ${x} type: ${typeof x}`);
console.log(`value : ${y} type: ${typeof y}`);

//symbol, create unique identifiers for objects
//고유한 식별자에서 사용됨,동시에 다발적으로 나올떄 우선순위를 사용할때 
//간혹 String을 만들때 다른 파일에서 동일하다고 식별되는 것을 방지하기 위해서 symbol을 사용.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//동일한 Symbol을 만들때 사용함,
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`) //string으로 변환해서 사용해야함.

//object, real-life object, data structure
//다른 object 할당을 변경불가능
const G = {name: 'geony', age : 20};
G.age = 21; // object의 변경법.
G.name = 'Han';
console.log(G);

//5.Dynamic typing 
//변수를 선언할때 어떤 타입을 어떤 선언을 안해두 됨.
//자바스크립트는 중간에 타입이 변경될 수 있기 때문에 런타입 오류가 생김
//이를 방지하기위해서 TimeScript를 생겨남. 
let text = 'hello';
console.log(text.charAt(0));//0부터 앞글자가 들어감 
console.log(`value : ${text} type : ${typeof text}`);
text = 5;
console.log(`value : ${text} type : ${typeof text}`);
text = '8' + 5;
console.log(`value : ${text} type : ${typeof text}`);
text = '5' / '5'; 
console.log(`value : ${text} type : ${typeof text}`);
