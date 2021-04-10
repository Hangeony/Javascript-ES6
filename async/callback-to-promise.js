//callback지옥을 이쁘게 꾸미기.
class UserStorage{ 
    loginUSer(id, password){ 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'geony' && password === 'han') ||
                    (id === 'minsub' && password === 'oh')
                ){
                    resolve(id);
                } else{
                    reject(new Error('not found id'));
                }
            } ,2000); 
        });
    }
    getRoles(user) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'geony'){
                    resolve({name : 'geony' , role : 'admin'});
                }else if(user === 'minsub'){
                    resolve({name : 'minsub' , role : 'guest'});
                }else {
                    reject(new Error('no access'));
                }
            },1000);
        });    
    }
}

const userStorage = new UserStorage();
const id = prompt('ID를 입력해주세요');
const password = prompt('비밀번호를 입력해주세요');
userStorage
.loginUSer(id, password)
.then(userStorage.getRoles)
.then(user => alert(`어서오세요 ${user.name}, 당신은 ${user.role} 입니다.`))
.catch(console.log);
