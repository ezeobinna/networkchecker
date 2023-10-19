
"use strict";

const inputPhoneNumber = document.getElementById('phonenumber');
const logo = document.querySelector('.logo');

// function to display the network logo
const imageDisplay = function(path, carrier) {
    logo.innerHTML = `<img src=${path} alt=${carrier} style="width: 30px; height: 30px; border-radius: 50%;">`;
}

// function to recognise a valid phone number
const validNumber = function () {
    phoneNumber.length <= 4 || (phoneNumber.length <= 4 && phoneNumber.startsWith("+234"));
}




inputPhoneNumber.addEventListener("input", function () {
    const phoneNumber = inputPhoneNumber.value.replace(/\s+/g, "");
    
  // phone number validation using a javascript Regex.
  const mtnPattern =
    /^(\+234|234|0)?(703|704|706|803|806|810|813|814|816|903|906|913|916)/; 
  const airtelPattern =
    /^(\+234|234|0)?[-]?(802|808|812|817|902|904|907|901|909|701|708)/;
  const gloPattern =
    /^(\+234|234|0)?[-]?(805|807|815|811|905|915|705)/;
  const ninemobilePattern =
    /^(\+234|234|0)?[-]?(809|818|909|908)/;

    // conditions display the logo
  if 
    (mtnPattern.test(phoneNumber) && validNumber) {
    imageDisplay("./img/mtn11.png", "MTN");
  } else if (airtelPattern.test(phoneNumber) && validNumber) {
    imageDisplay("./img/Airtel_Networks_Limited-Logo.wine.png", "Airtel");
  } else if (gloPattern.test(phoneNumber) && validNumber) {
    imageDisplay("./img/Globacom_Limited_Logo.svg", "Glo");
  } else if (ninemobilePattern.test(phoneNumber) && validNumber) {
    imageDisplay("./img/download.jpeg", "9mobile");
  } else { 
      logo.innerHTML = ""
  };   
  
});

