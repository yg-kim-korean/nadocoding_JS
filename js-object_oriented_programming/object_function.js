var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(a){
    return a+this.first + this.second;
}
// sum.call(); //== sum();
 
// sum.call(kim); 
// ==> this = kim 이 되는것
//------------------------- call ----------------------------
console.log('sum.call(kim) =>',sum.call(kim,2));
console.log('sum.call(lee) =>',sum.call(lee,5));

//------------------------- bind ----------------------------

var kimSum = sum.bind(kim,5);
console.log('kimsum() => ',kimSum());