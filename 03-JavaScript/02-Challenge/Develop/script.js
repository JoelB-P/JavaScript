var generateBtn = document.querySelector("#generate");


function makeid(length) {
  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  var result = "";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}


const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {

  window.alert(makeid(10));
});

