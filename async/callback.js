'use strict'
//JavaScript is Synchronous. 동기적이다.
//hoisting이 된 이후 부터 코드가 우리가 짜둔 순서대로 실행된다.
//hoisting : var 변수와 function  declaration 함수 선언들이 자동 적으로 제일 위로 올라가는것이다. 
//hoisting된 이후 부터 코드가 나타나는 순서대로 자동적으로 실행된다 
//Synchronous = 정해진 순서에 맞게 실행된다.
//Ansynchronous = 비동기적으로 언제 코드가 실행될지 모르는 것이다.

//Synchronous
console.log('1');
console.log('2');
console.log('3');

//Ansynchronous 비동기
console.log('1');
setTimeout(()=> //web api 브라우저가 제공, 우리가 지정한 시간이 지나면 callbackfn이 실행됨.
    console.log('2'), 1000);
console.log('3');

//callback 나중에 다시 실행해서 callback이라고한다.

//Synchronous callbackfn
function printImmediately(print){ 
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callbackfn
function printWithDelay(print, timeout){ //print와 timeout으로 얼마정도 지연할껀지 인자를 두개를 받아올것이다.
    setTimeout(print, timeout); //print라는 callbackfn을 호출하고 timeout인자를전달하는 전달받은 setTimeout으로 요청 
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example
class UserStorage{ //server에서 데이터를 받아올때  2가지의 api를 있다고 가정하고 만들때 
    loginUSer(id, password, onSuccess, onError){ // 사용자의 아이디와 비밀번호, 사용자의 데이터와 함께 호출해주고 로그인실패, 네이트워크에 문제 할때  
        setTimeout(() => {
            if(
                (id === 'geony' && password === 'Han') ||
                (id === 'minsub' && password === 'Oh')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        } ,2000); //2초뒤에 코드블록이 실행되는데 , 아이디가 geony이고 비밀번호가 Han 이거나 , 아이디가 minsup이고 비밀번호가 'oh'이면 onSuccess 둘다 아니면 onError콜백을 불러주면서 error 오브젝트를 만들어서 전달해줌
    }
    getRoles(user, onSuccess, onError) { //사용자의 데이터를 받아서 관리자인지, 게스트인지 (원래는 백앤드의 정보를 한번에 맞는게 맞다.)
        setTimeout(() => { //1초뒤에 코드가 실행되고 사용자가 geony이면 이름은 geony이고 역활이 admin을 호출하고 user가 geony가 아니면 권리가 없다고 전달해줄것이다.
            if(user === 'geony'){
                onSuccess({name : 'geony' , role : 'admin'});
            }else {
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('ID를 입력해주세요');
const password = prompt('비밀번호를 입력해주세요');
userStorage.loginUSer(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userWithRole => {
          alert(
            `안녕 ${userWithRole.name}, 너의 계급은 ${userWithRole.role} 이거야`
          );
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );
  //여기서 문제점 
  //1. 읽기가 너무 거북하다.
  //2.가독성이 너무 많이 떯어진다
  //3.어디서 어떻게 연결되는지 어렵고 비지니스로직이 어렵다.
  //4. 나중에 에러가 발생했을때 디버깅 하기 어렵다. 
  //5.유지보수가 어렵다
