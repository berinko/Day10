var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(a, b) {
    lion.roar = "roar-roar";
    return lion;
}
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;