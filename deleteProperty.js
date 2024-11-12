// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.



function deleteProperty (obj){
        if(obj.hasOwnProperty("rollno")) {
            delete obj.rollno
        }
        return obj
    }



var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    console.log(deleteProperty(student))