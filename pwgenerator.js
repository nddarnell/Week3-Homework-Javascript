// need to add prompt for amount of characters, confirm for special characters, confirm for numeric characters, confirm for lowercase characters, confirm for uppercase characters
function generateStart(){
    var howManyChar = prompt("How many characters would you like your password to have? Must be betwen 8 and 128 characters.");

    if (howManyChar < 8) {
        alert("Password must contain between 8 and 128 characters.")
        generateStart.exit()
    }
    else if (howManyChar > 128) {
        alert("Password must contain between 8 and 128 characters")
        generateStart.exit()
    }
    
    var charResult = parseInt(howManyChar, 10);
    var returnChar = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
    var returnNumber = [48, 49, 50, 51, 52, 53, 54, 55, 56]
    var returnLower = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
    var returnUpper = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    var final = []
    var pass= ""
//special character confirmation
    var specialChar = confirm("Do you want your password to have special characters?");
    
    if (specialChar === true) {
        final = final.concat(returnChar)
    }
    else if (specialChar === false) {
        alert("Your password must contain a special character")
        generateStart.exit()
    }
// number confirmation
    var number = confirm("Do you want your password to include numbers?");

    if (number === true) {
        final = final.concat(returnNumber)
    }
    else if (number === false) {
        alert("Your password must contain a number")
        generateStart.exit()
    }
//lowercase confirmation
    var lower = confirm("Do you want your password to include lowercase letters?");

    if (lower === true) {
        final = final.concat(returnLower)
    }
    else if (lower === false) {
        alert("Your password must contain a lowercase character.")
        generateStart.exit()
    }
//uppercase confirmation
    var upper = confirm("Do you want your password to include uppercase letters?");

    if (upper === true) {
        final = final.concat(returnUpper)
    }
    else if (upper === false) {
        alert("Your password must contain an uppercase character.")
        generateStart.exit()
    }

    for (i = 0; i < parseInt(howManyChar, 10); i++) {
        pass += String.fromCharCode(final[Math.floor(Math.random() * final.length)])
    }

    document.getElementById("GeneratedPassword").innerHTML = pass;
}

function secondGenerateSpecial() {
    var specialCharNumber = prompt("How many characters do you want? (Unlimited amount of characters allowed!)")
    var specialCharacters = confirm("Do you want special characters? You can opt out of special characters.")
    var specialNumber = confirm("Do you want numbers in your password? You can opt out of numbers.")
    var specialUpper = confirm("Do you want uppercase letters? You can opt out of uppercase characters.")
    var specialLower = confirm("Do you want lowercase letters? You can opt out of lowercase characters.")
    var specialPass = ""
    var numsArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
    var specialsArray = [33, 35, 36, 37, 38, 42, 43, 60, 61, 62, 63, 64]
    var uppersArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]
    var lowersArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
    var specialFinal = []



    if (specialCharacters) {specialFinal = specialFinal.concat(specialsArray)}
    if (specialNumber) {specialFinal = specialFinal.concat(numsArray)}
    if (specialUpper) {specialFinal = specialFinal.concat(uppersArray)}
    if (specialLower) {specialFinal = specialFinal.concat(lowersArray)}



    for (i = 0; i < parseInt(specialCharNumber, 10); i++) {
        specialPass += String.fromCharCode(specialFinal[Math.floor(Math.random() * specialFinal.length)])
    }
    document.getElementById("SpecialGenerate").innerHTML = specialPass;
  }