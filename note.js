//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference <- 자바스크립트 문법정리 공식사이트
//Class
// field , method를 묶어둔것을 class를 말함 
//간혹혹 field만 묵어둔걸 데이터 클레스라고함.
//관련있는 변수나 함수를 묶어둔것 class,
//안에보이는것과 밖에 보이는것을 나누는것을 캡슐화
//클래스를 이용해서 상속과 다양성을 얻어내는것을 객체지향언어라고 말함.
//객체지향을 잘 알면 프로그레밍을 잘 구현 할 수있다.
class person{ 
    name;  //속성 (field)
    age;
    speak();//행동(method)
}
//class는 틀을 말함 청사진, 템플릿이라고 말함
//class자체에는 데이터가 들어가지 않고 템플릿만 정리함
//이러이러한 데이터가 들어올수있어 데이터만 한번만 선언
//class를 이용해서 사용하는것이 Object이다. 

//array(자료구조)
//비슷한 데이터 종류들을 자료구조 라고 한다.
//비슷한 종류의 오브젝트를 묶어두는것을 자료구조라고 한다. 자료구조는 동일한 오브젝트만 담을수 있다.
//JavaScript === dynamically typed language 타입이 동적으로 정해진다.
//자료구조를 공부할때 삽입, 삭제, 검색,정렬을 어떻게 할것인지 공부하는것이 좋다.
//배열은 index번호로 지정 되는데 맨앞부터 0부터 시작한다.
//삽입과 삭제는 index번호로 쉽게 할 수 있다.

//json
//client들이 server와 통신하는 것을 정의 한것이 http이다.
//HTTP = HyperText Transfer Protocal을 의미한다. 
//client가 server에 데이터를 request(요청) 할수있고,
//server는 client에게 그에 맞는 정보를 response(응답)을 보낸다.
//HyperText는 웹사이트에서 이용되는 link들만 말하는게 아니라 문서나 이미지등을 말한다.
//AJAX = Asynchronous JavaScript And Xml 웹페이지에서 동적으로 서버에게 데이터를 주고받는것을 의미함
//XHR = XMLHttpRequest OBJECT는 브라우저api에서 제공하는 오브젝트중 하나로 오브젝트를 사용하면 간단하게 서버에게 데이터를 요청하고 받아올수있다.
//최근 추가된 fetch() API를 이용하면 간편하게 데이터를 주고받을수 있다.(무조건 신상이라고 해서 사용 할 수 있는게 아니다. 인터넷 브라우저에서 지원하지 않는다.)
//XML = html과 같은 마크업 언어와 같다. 테그들을 이용해서 데이터를 나타내는데 데이터를 표현할수 있는 한가지 방법이다.
//서버와 데이터를 주고받을땐  xml만 가능한가 ? xml뿐만 아니라 굉장히 다양한 파일포멧을 주고 받을순있다.
//클라이언트와 서버에서 데이터를 주고받을때 다양한 타입에 데이터를 주고 받을 수 있있다.
//외부로 노출되는 api는 명확하게 이름을 지을필요가 있다. 
//서버와 통신 할때 XMLHttpRequest을 사용하거나 fetch()를 사용 할 수있다.
//xml을 사용하면 불필요한 테그가 많아서 파일사이즈가 커질뿐만아니라 가독성도 좋지 않기 때문에 많이 사용안하는 추세이다.
//요즘에는 json방식을 더 선호한다. 
//Json = javascript Object Notation 약자로 자바스크립트 오브젝트 관련된 파일
//json도 똑같이 {key : value}로 이루워짐 브라우저 뿐만아니라 모바일에서 써버와 통신할때도 서버와 통신 하지 않아도 object를 파일시스템에  저장할 때도jsondatatype으로 저장됨

//json은 데이터를 주고 받을때 가장 간단하다.
//text로 기반으로 가볍다
//사람눈으로도 읽기도 편하다
//key-value로 이루워저 있다
//데이터를 보통 서버와 주고 받을때 serialization을 위해서 사용 (serialization 직열화 데이터를 전송)
//프로그렘 언어와 플레폼에 상관없이 쓸수있다.

//Object를 어떻게 serialize해서 변환 할지
//json을 deserialize 해서 object로 변환 할 것인지 두가지를 중점으로 공부하면된다.
//json에는 두가지 함수가 있다.(stringfy, parse)
//parse(text: string, reviver?: (this: any, key: string, value: any) => any): any; 콜백함수인데  결과값으로 뭔가 변환한다. string을 object로 변환 할때 세밀하게 조정할수있따.
//stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string; 어떤 타입 오브젝트를 받아서 string으로 만드는데 좀더 세밀하게 작업하고 싶으면 콜백함수를 전달하면 좀 더 세밀한 string을 만들 수 있다.
//stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;}
//동일한 이름으로 함수가 두개가 있고 전달하는 매개변수가 차이가 있다 = overloading


//promise  = (한국어로 약속을 의미함.) 
//Javascript에서 제공하는 비동기를  간단하게 object이다.
//장시간기능을 수행하고 나서 정상정으로 기능이 작동하면 성공메세지와 함께 결과물을 전달해주고 기능을 수행하다가 예상치 못했던 기능을 했다면 error를 보낸다.

//async - await promise를 좀더 간결하고 간편하고 동기적으로 실행되게 보이는것임.
//새로운것이 추가 된게아니라 간편한 api를 사용해서 좀더 간편하게 하기 위한것
//이것을 syntactic suger라고 부름
