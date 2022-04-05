function convertToInt(str){
    return parseInt(str, 16);
}

convertToInt();
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezzos"));

module.exports = convertToInt;

