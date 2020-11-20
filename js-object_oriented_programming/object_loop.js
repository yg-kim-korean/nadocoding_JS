var memberArray = ['egoing','graphittie','leezche'];
console.group('Array loop');
var i = 0;
while (i<memberArray.length){
    console.log(memberArray[i])
    i+=1;
}
console.groupEnd('array loop');
var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}
console.group('Object');
for (var key in memberObject){
    console.log(key+' : '+ memberObject[key]);
}
console.groupEnd('Object');