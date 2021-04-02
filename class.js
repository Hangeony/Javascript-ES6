'use strict';
//class : templete
//Object : instance of class -> 템플릿을 이용해서 만드는것이 오브젝트
//ES6때 새로 생긴문제 , 이전에는 Object를 이용해서 만듬
//prototype-based inheritance 클래스만 잘이용하면 된다.

//1.Class declarations 클래스를 사용하는법
class Person{
    //constructor  생성자 오브젝트를 만들때 데이터를 전달
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name} : Hello`); //클레스에 있는 name에 있는 이름을 출력함.
    }
}
//새로운 Object를 만들 때 new keyword를 작성해야한다.
const geony = new Person('geony',27);
console.log(geony.name);
console.log(geony.age);
geony.speak();

//2.Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //get이라는 keyword를 사용해서 값을 리턴한다.
    //get age를 정의하는 순간  this.age는 메모리에 있는 데이터를 읽어오는것이 아니라
    //getter를 호출하게 된다. setter를 정의 하는 순간 
    //this.age = age; 이콜싸인 어싸인에 값을 할당하는것이아니라 age = setter을 호출하게 된다.
    //그리하여 무한정 콜스텍이 발생하는데 그것을 방지하기 위해서 getter와 setter의 this.age의 값을 변경 해줘야한다.
    get age(){
        return this._age;
    }
    //set이라는 keyword를 사용해서 값을 설정 할 수있다.
    //대신에 set은 값을 설정 해줘야 하기 때문에 value를 정해줘야한다.
    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative | 나이는 더이상 마이너스값을 가질수 없다.')
        // }
        this._age = value < 0 ? 0 : value; 
    }

}

const user1 = new User('Geony', 'Han', -1);
console.log(user1.age); //이렇게 되면 나이가 -1된다. (user.age를 사용 할 수 있는 이유는 getter와 setter를 사용하기 때문이다.)

//3.Fields (public, private)
//비교적 최근에 나온 문법. 아직 쓰기엔 이르다
//생성자를 사용하지 않고 필드를 정의 할 수 있는데  
//그냥 적으면 public 외부에서 접근이 가능 |#을 사용하면 private이 된다. class내부에서만 변경,읽을 수가 있다. 외부에선 읽고 쓰는게 불가능하다.   
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //클래스 외부에선 값이 안보여서 undefined가 나온다.

//4. Static properties and methods
//아직 쓰기엔 무리가 있다
//class에 있는 필드와 메소드들은 새로운 오브젝트를 만들때마다 고대로 복제되어서 값만 변경 되어 만들어지는데
//간혹 오브젝트와 데이터가 상관없이 클레스가 가지고 있는 고유의 값과 데이터와 상관없이 동일하게 반복되는 메소드가 있으면
//static이라든 키워드를 사용하면 오브젝트랑 상관없이 class 자체에 연결되어 있다.
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// static을 사용하지 않았다면 object의 publisher을 출력 할 수있었다. 
//오브젝트안에 publisher는 값이 지정되지 않았다. 
//static은 오브젝트마다 할당 되는것이 아니라 class 자체에 붙어있다. 
console.log(article1.publisher); 
console.log(Article.publisher);
Article.printPublisher();
//나중에 type Script사용 할때 많이 사용됨
//object 상관없이 들어오는 데이터와 상관없이 공통적으로 class에서 쓸 수있는 거라면 static과 static method를 사용해서 메모리 사용을 줄일수 있다.

//5. inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color !`);
    }
    getArea(){
        return this.width * this.height;
    }
}
//extends(연장한다)을 사용하면 field와 method를 자동적으로 가져온다
//상속을 이용하면 공통된것을 일일이 작성하지 않아도 extends를 사용해서 동일한것들을 재사용가능
//한곳에서만 고치면 된다.
//필요한 메소드를 override를 사용해서 재정의 할 수 있다.
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log('▲');//더이상 Shape에 생성된 draw()를 불러올수 없다. 
        super.draw(); //super를 사용해서 부모의 draw()를 호출할수있다.
    }
    getArea(){ 
        return (this.width * this.height) / 2;
    }
    toString(){
        return `Triangle : color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceOf 
//class를 이용해서 만들어진 새로운 instance
//instanceOf 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 아닌지 
//즉 Object가 이 class로 만들어지는지 확인 한다 . true와 false를 리턴함.
console.log(rectangle instanceof Rectangle); //rectangle의 Object는 Rectangle는class의 instance  true 
console.log(triangle instanceof Rectangle); 
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape); // 상속받았음 
console.log(triangle instanceof Object); //자바스크립트 에서 만든 모든 object class들은 자바스크립트의 object를 상속한다. object의 컨트롤키 + 클릭하면 정의한것을 볼수있다.
console.log(triangle.toString()); //어떤 오브젝트든지 공통적으로 존재하는 method를 사용 할 수있다.
