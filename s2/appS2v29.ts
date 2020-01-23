let userInput: unknown; // better than any b/c can still do some type checking
let userName: string;

userInput = 5;
userInput = "Cj";

if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result = generateError("Error occurred", 500);
console.log("e", result);
