//class.js를 prototype으로 변경

function Person(name, first,second){
    this.name=name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first,second,third){
    Person.call(this,name,first,second); //==class에서 super 의 역할을 함
    this.third=third;

}
// PersonPlus.prototype.__proto__ = Person.prototype; //밑에꺼와 같음
PersonPlus.prototype = Object.create(Person.prototype); //이거만 하면 kim.constructor는 person을 가리킴
PersonPlus.prototype.constructor = PersonPlus; //해줘야 personplus의 constructor를 가리킴
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3
}

var kim = new PersonPlus('kim',10,20,30);
console.log(kim.sum());
console.log(kim.avg());
console.log("kim.constructor ->",kim.constructor)