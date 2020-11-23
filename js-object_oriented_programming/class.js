class Person{
    constructor(name, first, second){
        this.name=name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return (this.first+this.second);
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first,second);
        // 슈퍼에 괄호가 있으면 부모클래스의 생성자, 괄호가 없으면 부모클래스 자체를 뜻한다. 
        // 만약 슈퍼라는 기능이 없으면, 자식클래스에서 부모클래스의 속성과 기능에 추가적인 무언가를 넣어 활용때 
        // 다시 부모클래스의 코드를 사용해야하는 중복이 발생할 것이다.
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim',10,20,30);
console.log(kim.sum());
console.log(kim.avg());
