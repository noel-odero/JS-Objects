// Write a js function to convert an object to an array of key-value pairs.

function objToArr(obj) {
    return Object.entries(obj);
}
// Example usage:
const exampleObject = {
    method1: function() {},
    method2: function() {},
    property1: 'value1',
    property2: 'value2'
};
console.log(objToArr(exampleObject)); // Output: [ [ 'method1', [Function: method1] ], [ 'method2', [Function: method2] ], [ 'property1', 'value1' ], [ 'property2', 'value2' ] ]