function Person(name,first,second,third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function (){
        return this.first+this.second+this.third;
    }
}

// var kim = {
//     name : 'kim',
//     first : 10,
//     second : 20,
//     // sum:function(f,s){
//     third: 30,
//     sum:function(){
//         // return f+s;
//         return this.first+this.second+this.third;
//     }
// }
var kim = new Person('kim',10,20,30);
// var lee = {
//     name : 'lee',
//     first : 10,
//     second : 10,
//     // sum:function(f,s){
//     third: 10,
//     sum:function(){
//         // return f+s;
//         return this.first+this.second+this.third;
//     }
// }
var lee = new Person('lee',10,10,10);
// console.log(kim.sum(kim.first,kim.second));
console.log(kim.sum());
console.log(lee.sum());

var d1 = new Date('2020-11-22');
console.log(d1.getMonth());


console.log(Person());
console.log(new Person());
