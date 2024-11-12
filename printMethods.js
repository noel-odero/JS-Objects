// Write a JavaScript function to print all the methods in a Javascript object
function printMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(key);
        }
    }
}

// Example usage:
const exampleObject = {
    method1: function() {},
    method2: function() {},
    property1: 'value1',
    property2: 'value2'
};

printMethods(exampleObject); // Output: method1, method2

