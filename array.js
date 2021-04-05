'use strict'

//Array(자료구조)

//1.Declaration (선언하는방법)
const arr1 = new Array();
const arr2 = [1,2]; 

//2.Index position 
//배열이 인덱스기준으로 데이터가 저장되므로 
//어떻게 검색해서 삽입, 삭제하는지 아는지가 중요
//index를 통해서 어떻게 데이터를 접근하는지 
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //index의 값이 없어 undefined가 나온다.
console.log(fruits[fruits.length - 1]); //배열은 index는 0부터 시작하기 때문에 총길이에 -1 해야 마지막 데이터를 받아 올 수 있다.
//배열에서 대괄호를 이용해서 접근가능 
//object에서는 'key'라는 String을 이용하면 즉 String안에 있는 key에 상응하는 벨류를 받아왔었는데
//배열은 숫자 index를 전달하면 index해당하는 번호를 전달하면 값을 받아올수 있다.
//배열을 찾을때는 첫번째 아이템을 찾을때는 0을 많이쓰고 마지막 데이터를 찾고싶으면 배열의 length-1로 값을 찾을 수 있다.
console.log('--------');
//3.Looping over an array 
//print all fruits

//1번째 for 
for(let i = 0; i <fruits.length; i++){ //i가 0부터 fruits의 배열 갯수만큼 돌리는것을 의미함.
    console.log(fruits[i]);
}
console.log('------');

//2번째 for of
for(let fruit of fruits){
    console.log(fruit);
}

//3번째 for forEach
//컨트롤 우클릭으로 forEach()를 확인 할 수 있다. 이함수는 무엇인지 파라미터는 어떤 파라미터인지 리턴되는 값은 떤건지 확인하면서 쓰면서 연습해야 실력은 올라간다.
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array); // 보통 array는 생략 가능하다
});
//에로우 함수사용한 forEach
fruits.forEach((fruits, index) => console.log(fruits,index));
//forEach =  array에있는 들어있는 값마다 callback함수를 수행. forEach는 2개의 파라미터를 전달 받는데 첫번째는 callback함수 즉 우리가 전달한 함수를 밸류 하나하나 마다 호출 2번째는 ?로 되어있으면 파라미터를 전달해줘도 되고 안해도 된다.
//value index array를 전달 받을 수 있다. 

//4.Addtion, deletion, copy (뒤에서부터 값을 추가, 제거하는 법.)
//push : add an item to the end 배열에 값 추가하기
fruits.push('🍓', '🍑'); //맨뒤로 값을 추가한다.
console.log(fruits);

//pop : remove an item from the end 배열에 값 삭제하기
const poped = fruits.pop(); //값을 리턴 받을 수도 있다.
fruits.pop();// 맨 마지막에있던 값이 제거가 된다.
console.log(fruits);

// unshift: add an item to the benigging (앞에서부터 값을 추가)
fruits.unshift('🍓', '🍋');
console.log(fruits);
// shift: remove an item from the benigging(앞에서부터 값을 삭제)
fruits.shift();
console.log(fruits);

//note!! 
//unshift와 shift는 pop과 push보다 정말 느리게 작동한다.
//배열에 아이템들이 들어있을 때 뒤에서부터는 빈공간이여서 데이터를 넣었다가 지웠다가를 반복 할 때
//기존에 있던 데이터들은 움직이지 않아서 넣고 빼고가 되기 때문에 빠른 기능이 되지만
//반대로 앞에서 데이터를 넣게 될려면 기존에있던 데이터를 옆으로 한칸씩 옴겨서 새로운 데이터를 받아드린다.
//삭제도 앞에서 데이터를 지우고 오른쪽에 있던 데이터를 옴겨오기때문에 계속 해서 반복해서 하기때문에 배열이 길이가 길면 길수록 데이터 이동이 많아서 가능하면 shift와 unshift보단 pop과 push를 사용하는것을 추천한다.
//젤뒤에서 아이템을 접근하는 것은 빠르고 중간에 데이터를 넣고 빼는것도 index를 활용해서 하기때문에 빠르다
//shift, unshift를 사용하여 데이터들이 움직인다면 느려질수가 있다.

//remove an item by index position 
//splice : remove an item by index position(지정한 번호를 사용하여 값제거하기)
fruits.push('🍓', '🍑', '🍋');
fruits.splice(1,1); // 어디서부터 지울건지 index번호를 지정해주고 몇개나 지울껀지 적거나 적지 않아도된다.하지만 값을 적지 않으면 시작지점부터 배열의 값을 다 지워버린다.
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); //1번째 index 부터 하나만 지우고 사과와 수박을 값을 넣는다. splice = 이어주다.
fruits.splice(1, 0, '🍏', '🍉'); //지우지는 않고 데이터를 넣을 수도 있다.
console.log(fruits);

//combine two arrays (두가지의 배열을 묶어서 만들 수 있다.)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //concat()함수 = 기존에있던 fruits와 fruits2가 값이 합쳐져서 리턴이 된다.
console.log(newFruits);

//5.Searching (배열검색 하기)
//indexOf 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍋')); //몇번째 index가 있는지 확인 할 수 있다.
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🥥')); //배열안에 해당하는 값이 없으면 -1이 나온다.

//includes
console.log(fruits.includes('🍓')); //배열에 아이템이 있는지 없는지 검사해준다. 있으면 True, 없으면 false가 나온다.
console.log(fruits.includes('🥥'));

//lastIndexOf
console.clear();
fruits.push('🍋');//똑같은 값 추가
console.log(fruits);
console.log(fruits.indexOf('🍋')); //똑같은 값이 있을때 제일 첫번째에있는 index값을 리턴한다.
console.log(fruits.lastIndexOf('🍋'));//위에꺼랑 반대로 제일 마지막에 있는 index값을 리턴한다.
