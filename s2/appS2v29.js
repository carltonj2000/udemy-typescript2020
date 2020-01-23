var userInput; // better than any b/c can still do some type checking
var userName;
userInput = 5;
userInput = "Cj";
if (typeof userInput === "string")
    userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("Error occured", 500);
console.log("e", result);
