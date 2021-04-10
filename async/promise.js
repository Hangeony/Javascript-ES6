'use strict'

//Promise 는 Javascript안에 오브젝트이다. 
//Ansynchronous 비동기적인것을 수행 할때  콜백함수 대신에 유용하게 쓰임
//1.State(상태) : pending(우리가 지정한 operation수행중일때) -> fulfilled(성공적으로 다끝나게 되면, 완벽하게끝) or Rejected(파일을 찾을 수 없거나 네트워크가 문제가 생길때)
//2.Producer vs Consumer

//1.Producer
//promise를 만드는순간 우리가 전달한 excutor라는 콜백함수가 바로 실행되는 것을 볼 수있다.
//promise안에 네트워크 통신이 되는 코드를 작성했다면 promise가 만드는 그순간 네트워크 통신을 바로 수행하게 된다.
//중요한 포인트는 네트워크 요청을 사용자가 요구했을때만 해야하는 경우라면 네트워크 요청하는 경우라면 promise를 사용했다면 불필요한 네트워크 통신이 일어날 수 있다. 이점을 유의하고 사용해야함.
//새로운 promise가 만들어지면 excutor()라는 함수가 바로 실행.
const promise = new Promise((resolve, reject) =>{
    //좀 해비한 일을 함(네트워크를 받아오거나, 파일에서 큰 데이터를 읽는다던가 하는일을 비동기로 처리하는게 좋다, )
    //시간이 꾀 걸리는 작업을 synchronous로 처리하면 다음에 오는 코드를 읽어오는데 시간이 오래 걸린다.
    console.log('doing something...');
    setTimeout(() => {
        //resolve('geony'); // resolve() -> .then()  | reject() -> .catch()
        reject(new Error('Not found network ')); //javascript에서 제공해주는 오브젝트이다. 에러가 발생했을때에는 정확히 어떤 에러인지 알려주는것이 좋다
    },2000);//우리가 원하는 함수를 2초정도 있다가 할건데 성공 했다면 resolve()함수를 불러온다. 사용자의 이름은 'geony'야라고 전달한다.
});//성공했다면 resove -> 실패라면 reject를 호출
//2.Consumers : then, catch, finally
//.then() = value라는 파라미터는 promise가 정상장적으로 잘 수행되어서 마지막으로 resovle에 있는 네임값이 들어온다.
promise //promise에 then()을 호출 하게 되면 then()은 결국에 똑같은 promise를 리턴 하기 때문에 그리턴된 primes에 catch를 호출 할수있다 이를 chaining.
.then((value) => { //성공적일때
    console.log(value);
})
.catch(error => { //오류일때
    console.log(error);
})
.finally(() => { //성공이든 실패하던 상관없이 어떤기능을 마지막으로 실행하고 싶을때
    console.log('finally');
});

//3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber //다른 비동기적인 아이들을 묶어서 처리 할 수도 있다.
.then(num => num * 2) //1 * 2 = 2 =num
.then(num => num * 3) // 2 * 3 = 6 = num
.then(num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num - 1), 1000);
    }); // 6 - 1 = num 총 2초뒤에 5가 출력.
})
.then(num => console.log(num));

// 4. Error Handling
//어떻게 에러를 handling 하는지 
const getHen = () => //암닭을 불러오는
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen => //치킨으로 부터 닭을 불러오는거
  new Promise((resolve, reject) => {
    setTimeout(() => resolve((` ${hen} => 🥚`)), 1000);
  });
const loseEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg => //닭걀을 받아와서 요리하는것.
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
// .then(hen => getEgg(hen)) callbackfn를 전달할때 받아오는 value를 이렇게 다른 함수로 바로 하나로 받아오는 경우에는 생략이 가능하다.
.then(getEgg) //자동적으로 .then에서 받아오는 value를 바로 getEgg함수에 전달해서 암목적으로 전달해서 호출해준다.
// .then(egg => cook(egg))
.then(cook)
// .then(meal => console.log(meal));
.then(console.log);

getHen() 
.then(loseEgg) //여기서 생긴 에러를 바로 케치를 써서 잡는게 좋는게 좋다.
.catch(error => {
  return '🥛'
})
.then(cook)
.then(console.log)
.catch(console.log); //error가 발생했지만 젤밑으로 전달되면서 catch에서 잡혀진다.

