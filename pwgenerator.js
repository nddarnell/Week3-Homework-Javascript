function generateStart(){
    var howManyCharacter = prompt("How many characters would you like your password to have? Must be betwen 8 and 128 characters.");
    if (howManyCharacter < 8) {
        alert("Must be between 8 and 128 characters.")
    }
    else if (howManyCharacter > 128) {
        alert("Must be between 8 and 128 characters.")
    }
    else if (howManyCharacter > 8 < 128) {
        
    }
    var specialCharacter = confirm("Click OK to include special characters")
    if (specialCharacter != confirm) {

    }
}