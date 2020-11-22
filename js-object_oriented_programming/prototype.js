function Person(name,first,second,third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    
}
Person.prototype.sum = function (){
    return this.first+this.second+this.third;
}//생산성을 높이며 메모리 사용량을 줄일 수 있다.
var kim = new Person('kim',10,20,30);
kim.sum = function(){
    return 'this: ' + this.first+this.second+this.third;
}
var lee = new Person('lee',10,10,10);

console.log(kim.sum());
console.log(lee.sum());

