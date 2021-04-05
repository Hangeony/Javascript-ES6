//Q1. 주어진 배열을 String으로 변환하라
//join함수 = join함수란 배열에있는 모든 것을 더해서 String으로 리턴한다. 사용자가 separated를 문자열을 통해서 각각 구분자를통해서 문자열로 만들어준다. join(separator?: string):string; ?는 separator받기도 하고 안하기도 한다 , 모든아이템을 String으로 받는다.
//join()안에 ' and ', ',' 등등 사용자가 넣고싶은것을 넣으면 된다.
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' or '); 
    console.log(result);
}

//Q2. 주어진 String을 배열로 만들어라
//String의 split()함수 = 옵션이 어려개 나오면 ES5를 통해서 됨
//split(separator: string | RegExp, limit?: number) : string[];
//2개의 파라미터를 전달 받는데 separator와 limit을 전달 받는다. 그래서 String을 여러가지 문자열로 나눠 주는데 separator 받아와서 나눠진다.
//limit을 통해서 배열의 사이즈를 정해 질수 있다. 또한 limit은 옵션이여서 전달 안해도 되지만 필수적으로 구분자를 전달 하지 않으면 전체가 문자열로 나온다.
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

//Q3.주어진 배열을 거꾸로 만들어라
//array안에 reverse()라는 api가 있다.
//reverse()는 배열을 거꾸로 만들어준다. 
//리턴된 값이 순서가 바뀌었는데 함수를 호출한 array도 순서가 바뀌었다는 것을 확인 할수 있다. 배열 자체를 변환하구 리턴값 전체를 변형시킨다.
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

//Q4.주어진 배열에서 첫번째와 두번째요소를 제거하고 새로운 배열을 만드시오.
//splice()는 어디서부터 몇개나 지울껀지 적으면 그부분을 삭제하는 api 리턴 되는 값은 삭제되는 값이 리턴된다.  
//slice(start?: number, end?: number): T[]; 배열의 특정한 부분을 리턴하는데 start와 end로 지정할수있다.
//start시작점, end는 exclusive해서 즉 0부터 2까지 지정하면 마지막 2는 배제되어서 0과 1까지만 전달된다.
//splice()는 배열 자체를 수정하는 함수,slice()는 배열에서 원하는부분만 리턴해서 값을 받아오고 싶을때 사용한다.
{
    const array= [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);//
    console.log(result);
    console.log(array);
}
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
 
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

//Q5.90점 이상인 학생을 찾아라
//find()함수
//find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
//predicate = 콜백함수를 받는다. 그리고 함수에는 this, value, index, object 인자가 전달되고 value는 boolean타입으로 전달되는 것을 확인.
//첫번째로 찾아진 요소를 배열안에서 리턴하는데 전달된 콜백함수가 참일때 찾자마자 리턴함, 찾지 못하면 undifined을 리턴
//predicate 콜백함수는 배열에있는 모든 요소들 마다 호출이 되어진다. 호출되어지는 콜백함수가 true가 되면 true가 된요소를 리턴한다.
{   
    //모든 학생들을 말하기때문에 students자리에는 value, item
    const result = students.find((students)=> students.score === 90);
        //console.log(students, index);//잘모를때는 콘솔에 찍어보는것도 좋다.
        
    console.log(result);
}

//Q6.수업에 등록된 학생만 출력하시오.
//filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
//ture인 값만 모아서 새로운 배열을 전달한다.
//우리가 원하는것만 가져 올 수 있다.
{
    const result = students.filter((students)=>students.enrolled);
    console.log(result);
}

//Q7.학생들 배열에서 점수만 뽑아서 배열을 만드시오.
//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
//지정된 callback함수를 호출하면서 각각의 요소들을 함수를 걸쳐서 새로운 값으로 변환하는것을 말한다.
//우리가 전달한 callback함수가 어떤일을 하느냐 따라서 맵핑되어서 만들어진다.
{
    const result = students.map((students) => students.score);
    //함수가 길어지는 경우에 callback함수로 전달되는 인자는 이해하기 쉽게 쓰는것이 좋다.
    console.log(result);
}

//Q8.50점보다 낮은 학생을 찾아보시오.
//some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
//배열의 요소중에서 callback함수가 return이 true가 되는 요소가 있는지 없는지 확인한다.
//배열중에 어떤것이라도 하나가 만족하는 것이 있는지 없는지 검사할때는 some() 함수를,모든 검색조건이 만족할때는 Some()함수를 사용하면 된다.
{
    const result1 = students.some((students) => students.score < 50);
    console.log(result1);

    //every()함수를 써서 동일하게 만들 수 있다.
    // every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    //모든 요소들이 이조건을 만족해야 true가 리턴된다.
    //모든 학생들이 50점보다 높아야하지만 48점인놈이있어서 not연산자를 사용하여 값을 true로 만듬.
    const result2 = !students.every((students) => students.score >= 50);
    console.log(result2);
}

//Q.9 학생들의 평균점수를 구하시오.(이해안됨 ㅁㅊ다...)
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
//callback함수와 initialValue를 전달한다.
//callbackfn는 배열안에 모든 요소들을 호출하고 callbackfn 리턴되는 값은 함께 누적된 값을 전달된다.
//배열안에 있는 모든 요소들의 값을 누적시킨다 라고 생각하면 편하다.(무언가 함께 모아둔다라고 생각하면 편하다.)
//prev는 이전에 callbackfn을 리턴된값을 전달되어서 오고 curr는 배열의 아이템을 순차적으로 전달받는다.
{
    const result1 = students.reduce((prev, curr)=>{
        console.log('-----구분선------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score; 
    },0);//시작을 먼저 0설정한다. 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 사용하는구나 라고 생각하면 편한다
    
    console.log(result1);
    //첫번째로 호출 됬을 때는 값은 a와 b가 출력된다.
    //두번째로 출력했을땐 이전값이 출력되지 않는데 callbackfn함수에서 리턴값을 해줘야 된다.
    //reduce()는 curr이라는것은 배열 하나씩 순차적으로 curr에 전달되는데 prev는 리턴하는것 값이 다음에 호출 될 때 prev로 연결 되어진다. 
    //reduceRight()은 뒤에서부터 호출된다.
    const result2 = students.reduceRight((prev, curr)=>{
        console.log('-----구분선------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score; 
    },0);
    console.log(result2);

    const result3 = students.reduceRight((prev, curr)=> prev + curr.score, 0);
    console.log(result3 / students.length);

}

//Q10.학생들의 모든 점수를 string으로 변환해서 만들어라
//배열에 있는 api를 여러개 사용 할 수 있다.
//여러개를 묶어서 사용하면 간편해진다.
//학생들을 점수로 변환하구 50점이상인 학생만 조인한다.
{
    const result = students.map((students) => students.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

//Bonus! 학생들의 점수를 스트링으로 변환하구 역순으로 출력하시오.
//sort(compareFn?: (a: T, b: T) => number): this;
//callbackfn 이전값a과 현재값b이 전달되는데 만약-값을 리턴 하게되면 첫번째가 뒤에꺼보다 작다고 간주되어서 정렬이된다.
{
    //작은 순서대로 정렬 시킨것.
    const result1 = students.map((students) => students.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result1);

    //점수가 큰순서대로 정렬 시킨것.
    const result2 = students.map((students) => students.score)
    .sort((a, b) => b - a)
    .join();
    console.log(result2);
}

//이해가 되지 않는다면 api를 보면서 값들을 출력시키는것을 하는것을 추천한다.