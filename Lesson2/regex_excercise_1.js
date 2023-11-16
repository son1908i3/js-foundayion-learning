const emailRegex = /^(?!.*\.{2,})(?!^\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const email = "Dangbinhson.123@.gmail.com";
console.log(emailRegex.test(email));