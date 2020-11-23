// -----------------------__proto__ 상속 --------------------------------------
// var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj; // sub가 super의 자식이다.
// console.log('subObj.subVal =>',subObj.subVal);
// console.log('subObj.superVal =>',subObj.superVal);

// subObj.superVal = 'sub';
// console.log('superObj.superVal =>',superObj.superVal);
// console.log('subObj.superVal =>',subObj.superVal);
// -----------------------Object 사용 상속 --------------------------------------
var superObj = {superVal:'super'}
var subObj = Object.create(superObj);
subObj.subVal = 'sub' ; 
debugger;
console.log('subObj.subVal =>',subObj.subVal);
console.log('subObj.superVal =>',subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>',superObj.superVal);
console.log('subObj.superVal =>',subObj.superVal);

var kim = {
    name : 'kim',
    first : 10, second : 20,
    sum: function() { return this.first+this.second}
}
// var lee = {
//     name : 'lee',
//     first: 10 , second: 10,
//     avg : function(){
//         return (this.first+this.second)/2
//     }
// }
// lee.__proto__ = kim;
var lee = Object.create(kim);
lee.name = 'lee'
lee.first = 10
lee.second = 10
lee.avg = function(){
    return (this.first + this.second) / 2
}
console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
console.log('lee.sum() : ', lee.avg());

/** prototype vs __proto__
 * funtion xx (){}->    객체 ==== var Person = new Function();
 * 
 */