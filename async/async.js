//async & await
//꼭 promise를 대체해서 좋은건 아니다
//처음에 이해만 잘하면 편함

//1.async
function fetchUser1(){
    return new Promise((resolve, reject) => {
        //네트워크에서 데이터를 가져오는데 10초가 걸린다고 가정
        resolve ('geony'); //resolve, reject을 호출하지 않고 실행하면 계속 pending상태가 된다. 
    });                     //그래서 꼭 promise를 사용하면 resolve나 reject를 사용해야한다.
}
//무언가 오래걸리는 코드를 비동기적으로 처리하지 않으면 자바스크립트는 동기적으로 코드를 처리하기 때문에
//함수를 호출하면 호출하는 곳으로 가고 실행 되고 나서야 다음줄로 실행되는데
//비동기 적으로 처리하지않으면 뒤에서 웹페이지에서 실행하는 코드가 있다면 웹페이지에 실행되지 않기때문에 오래걸리는 일은 비동기적으로 처리해줘야함.
const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);

//async를 함수 앞에 사용하면 자동적으로 promise로 변환된다.
//async & await를 쓰면 promise를 간편하게 쓸수있는 syntactic suger라고 부른다. 
async function fetchUser2(){
    return 'geony';
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

//2.await 꿀팁
//await는 function앞에 async가 붙어야 사용이 가능하다.
//delay함수는 정해진 promise 를 리턴하는데 정해진 ms가 지나면 resolve를 호출하는 promise를 리턴하는 함수이다. 
//체이닝으로 하는 것보다 동기적으로 하는척으로 만들면 이해하기 편하다.
function delay(ms){
    return new Promise((resolve => setTimeout(resolve, ms) ));
}

async function getApple(){
    await delay(1000); //이딜레이가 끝날때까지 기달려준다. 3초가 있다가 사과를 리턴하는 promise가 만들어진다.
    return '🍎';
}

async function getBanana(){ 
    await delay(2000); //사과랑 동일
    return '🍌';
}
//굳이 promise를 사용하는 함수를 만들기
function getRottenBanana(){
    return delay(1000)
    .then(() => '🥬');
}

//한번에 다 따오는 함수
//이렇게하면 callbackfn이랑 똑같은 콜백지옥이 펼쳐짐.
function pickFruits1(){
    return getApple().then(apple => {
        return getBanana().then(banana => {
            return getRottenBanana().then(RottenBanana => `${apple} + ${banana} + ${RottenBanana}`)
        });
    });
}
pickFruits1().then(console.log);

//콜백지옥을 해결함. 자연스럽게 코드를 자연스럽게 하게되면 너무너무 간편함.
async function pickFruits2(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}
pickFruits2().then(console.log);

//코드 병렬화 시킬때 사과받는데 1초와 바나나를 받는데1초 총 2초가 걸리는데 이것을 개선한것이다.
//서로 연관이 없어서 병렬화를 시키면 실행시킬때 시간이 단축된다.
//동시 다발적으로 수행이 가능할때 사과를 받는데 바나나가 필요없고 할땐 더럽게 사용할 필요가 없다.
async function pickFruits3(){
    const applePromise = getApple(); //promise를 만들면 바로 실행되기때문에 바로 실행.
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits3().then(console.log);

//3.useful Promise applePromise
//.all api를 사용하면 promise 배열을 전달하게 되면 병렬적으로 다받을때까지 모아준다.
function pickAllFruits(){ 
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' ^ '));
}
pickAllFruits().then(console.log);

//먼저 값을 가져오는것을 출력하고 싶을때
//.race api를 사용되면 배열에 전달된 promise중에서 가장 먼저 값을 리턴 받는 아이만 전달이 되어진다.
function pickOnlyOne(){
    return Promise.race([getRottenBanana(), getBanana()])
}

pickOnlyOne().then(console.log);