var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    // sum:function(f,s){
    sum:function(){
        // return f+s;
        return this.first+this.second;
    }
}

// console.log(kim.sum(kim.first,kim.second));
console.log(kim.sum());