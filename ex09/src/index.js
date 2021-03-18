function myFunction(myObj, checkProp) {
    if (myObj.hasOwnProperty(checkProp) === true) {
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "actor"));

module.exports = myFunction;