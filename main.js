const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let password = "";
    length = document.getElementById("length-input").value;

    if (length == 0) {
        length = 15;
    } else if (length > 30) {
        length = 30;
    }

    console.log(length);
    for (let i = 0; i < length; i++) {
        let randNum = Math.floor( Math.random() * characters.length );
        password += characters[randNum];
    }

    console.log(password);

    let passwordBox = document.querySelector(".password-el.hidden");
    passwordBox.style.display = "flex";
    passwordBox.textContent = password;
} 