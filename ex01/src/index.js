var myPet = {
    species: "Labrador",
    name: "Munja",
    legs: 4,
    friends: ["John", "Wick"]
};

function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };