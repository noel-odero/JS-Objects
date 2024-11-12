// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// function subsetString(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             result.push(str.slice(i, j));
//         }
//     }
//     return result;
// }
function subsetString(str){
    let newArr = []
    for(let i =0; i < str.length; i++){
        for (let j = i + 1; j <= str.length; j++){
            newArr.push(str.slice(i, j));

        }
    }
    return newArr
}

let data = "Anjeline";
console.log(subsetString(data));