var sum = 0;

function addThree() {
    return sum += 3;
  
}

function addFive() {
   return sum += 5;
    
}

addThree();  
console.log("sum from addThree: ", sum);
addFive();
console.log("sum from addFive: ", sum);

module.exports = {
    addThree,
    addFive
};