// Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'
// Use the splice method
// Expected Output: [ 'An', 'je', 'cat', 'fob', 'string cheese', 'ne' ]

function spliceStr(str){
    let newArr = str.split('')
    newArr.splice(2, 3, 'cat', 'fob', 'string cheese')
    return newArr.join('')
}