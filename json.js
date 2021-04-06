//Json
//JavaScript Object Notation

//1.Object to Json (object -> json) 
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json); //이렇게 하면 ["aplle", "banana"]로  배열처럼 보이게 표기됨 json의 규격사항

const rabbit = {
    name : 'tori',
    color : 'blue',
    size : null,
    brithDate : new Date(),
    //symbol: Symbol('id'), //javascript에서만 있는 특별한 data도 json에 포함되지 않는다.
    jump : () => { //함수는 object에 있는 Data가 아니기 때문에 함수는 제외 된다.  
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,["name", "color"]); //,를 붙히면 replacer이라는 것이 있는데 함수형태로 전달해도 되고 배열 형태로 전달해도 된다.
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { //모든 key와 value가 콜백함수에 담겨서 출력 할 수 있다. 제일 처음에 전달되는것은 제일 최상이 전달 된다.
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'geony' : value; //key가 name이 들어오게 되면 무조건 geony라고 value로 설정하고 key가 name이 아닐경우 원래 value를 쓰겠다고 설정한다. 좀더 세밀하게 작업이 가능하다.
});
console.log(json);

//2.Json to Object (json -> object)
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj1 = JSON.parse(json); //json으로 부터 object만드는법.
console.log(obj1);
rabbit.jump(); //기존에 만들었던 object에는 jump()가 있어서 출력 되지만,
// obj.jump(); 우리가 json으로 변환할때는 함수는 포함 되지 않아서 json에서 object로 변환할 때에 함수는 실행이 안된다.

console.log(rabbit.brithDate.getDate());
console.log(obj1.brithDate); //birthDate = Object를 Json으로 바꿧을때에는 string으로 바뀌어서 다시 json에서 object로 변환 할때에도 string으로 할당된다.

const obj2 = JSON.parse(json, (key, value) => {
    return key === 'brithDate' ? new Date(value) : value;
});

console.log(obj2.brithDate.getDate());

//유용한 사이트
//jsondiff.com 서버에서 요청했을 때 첫번째로 받아온 데이터와  두번째로 받아온 데이터가 어떻게 다른지 확인할때 유용함
//jsonBeautifier.org 가끔 server에서 받아온 json을 복사 붙혀넣기 하면 망가지는 경우가 있는데 웹사이트에서 간단하게 만들수있다. vscode에서 json파일을 만들어서 포멧을 해도 된다.
//jsonparser.org json방식을 object로 확인하고 싶을때
//tools.learningcontainer.com/json-validator 유용한 json데이터인지 확인해주는 사이트
//jsonminify -> server와 데이터를 주고받을때 데이터의 용량을 줄이는법