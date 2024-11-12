// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function clock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return(`${hours}:${minutes}:${seconds}`)
}
console.log(clock())