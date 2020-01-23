let userInput: unknown; // better than any b/c can still do some type checking
let userName: string;

userInput = 5;
userInput = "Cj";

if (typeof userInput === "string") userName = userInput;
