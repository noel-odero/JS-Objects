// Write a JavaScript program to get the length of a JavaScript object.

function getLength (obj){
    return Object.keys(obj).length
}
// Example usage:
const exampleObject = {
    method1: function() {},
    method2: function() {},
    property1: 'value1',
    property2: 'value2'
};

console.log(getLength(exampleObject));