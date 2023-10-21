
"use strict";

const inputPhoneNumber = document.getElementById('phonenumber');
const logo = document.querySelector('.logo');
const errorMessage = document.getElementById('error-message'); //

// function to display the network logo
const imageDisplay = function(path, carrier) {
    logo.innerHTML = `<img src=${path} alt=${carrier} style="width: 30px; height: 30px; border-radius: 50%;">`;
}
// Realtime monitoring of user input
inputPhoneNumber.addEventListener("input", function () {
  const  invalidInput = /[\D]/g ; // Regex pattern for characters that are not numbers
  const phoneNumber = inputPhoneNumber.value.replace(/[\s+]/g, ''); //Hides whitespaces and '+' symbol
  inputPhoneNumber.value = phoneNumber;

    
  // phone number validation using a javascript Regex.
  const mtnPattern =
    /^(\+234|234|0)?(703|704|706|803|806|810|813|814|816|903|906|913|916)/; 
  const airtelPattern =
    /^(\+234|234|0)?[-]?(802|808|812|817|902|904|907|901|909|701|708)/;
  const gloPattern =
    /^(\+234|234|0)?[-]?(805|807|815|811|905|915|705)/;
  const ninemobilePattern =
    /^(\+234|234|0)?[-]?(809|818|909|908)/;

// Other patterns not MTN, GLO, 9Mobile, Airtel
  const otherPattern = 
    /^(?!(\+234|234|0)?(703|704|706|803|806|810|813|814|816|903|906|913|916|802|808|812|817|902|904|907|901|909|701|708|805|807|815|811|905|915|705|809|818|909|908))/; 
    
    // conditions display the logo
        if (mtnPattern.test(phoneNumber) ) {
          imageDisplay("./img/mtn11.png", "MTN");
          
        } else if (airtelPattern.test(phoneNumber) ) {
            imageDisplay("./img/Airtel_Networks_Limited-Logo.wine.png", "Airtel");

        } else if (gloPattern.test(phoneNumber)) {
            imageDisplay("./img/Globacom_Limited_Logo.svg", "Glo");

        } else if (ninemobilePattern.test(phoneNumber)) {
            imageDisplay("./img/download.jpeg", "9mobile");

        } else if (otherPattern.test(phoneNumber) && phoneNumber.length > 5 && !invalidInput.test(phoneNumber)) {
             errorMessage.textContent = 'Unknown Network Provider'; // For prefixes that do not match any of the 4 network providers
        } else if (invalidInput.test(phoneNumber)) {
              errorMessage.textContent = 'Invalid Input, Please enter a number [0-9]'; // for entries that are not numbers
        } else {
              errorMessage.textContent === ' '
              logo.innerHTML = '';
          
        }
  

  // Clearing the Error Messages
  
  if (phoneNumber === '' && (errorMessage.textContent === 'Invalid Input, Please enter a number [0-9]' || errorMessage.textContent === 'Unknown Carrier' )) {
    errorMessage.textContent = ''; 
} else if (phoneNumber !== '' && (!otherPattern.test(phoneNumber) )) {
  errorMessage.textContent = ''; 
    
  } 
}
);

