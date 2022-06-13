// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }
function validateForm()
{
let fname= document.getElementById("fname");
let lname= document.getElementById("fname");
let Address1= document.getElementById("Address1");
let Address2= document.getElementById("Address2");
let city= document.getElementById("city");
let state= document.getElementById("state");
let Postal = document.getElementById("Postal");
let phonenumber = document.getElementById("phonenumber");
let email = document.getElementById("email");
let Feedback = document.getElementById("Feedback");
let suggesions = document.getElementById("suggesions");
let vehicle1 = document.getElementById("vehicle1");
let gender = document.getElementById("gender");

    // var email = document.contactForm.email.value;
    // var mobile = document.contactForm.mobile.value;
if(fname.value==""){
  let text;
  text= 'Please Enter Your First Name'
  document.getElementById("OP1").innerHTML = text;
}
if(lname.value==""){
  let text;
  text= 'Please Enter Your Last Name'
  document.getElementById("OP2").innerHTML = text;
}
if(Address1.value==""){
  let text;
  text= 'Please Enter Your Address'
  document.getElementById("OP3").innerHTML = text;
}
if(Address2.value==""){
  let text;
  text= 'Please Enter Your Address'
  document.getElementById("OP4").innerHTML = text;
}
if(city.value==""){
  let text;
  text= 'Please Enter Your City'
  document.getElementById("OP5").innerHTML = text;
}
if(state.value==""){
  let text;
  text= 'Please Enter Your State'
  document.getElementById("OP6").innerHTML = text;
}
if(Postal.value==""){
  let text;
  text= 'Please Enter Your Postal/Zip Code'
  document.getElementById("OP7").innerHTML = text;
}
if(phonenumber.value==""){
  let text;
  text= 'Please Enter Your Phone Number'
  document.getElementById("OP13").innerHTML = text;
}
if(email.value==""){
  let text;
  text= 'Please Enter Your E-mail'
  document.getElementById("OP8").innerHTML = text;
}
if(Feedback.value==""){
  let text;
  text= 'Please Enter Your Valuable Feedback'
  document.getElementById("OP9").innerHTML = text;
}
if(Suggestions.value==""){
  let text;
  text= 'Please Enter The Suggestions Required'
  document.getElementById("OP10").innerHTML = text;
}
if(vehicle1.value==""){
  let text;
  text= 'required'
  document.getElementById("OP11").innerHTML = text;
}
if(gender.value==""){
  let text;
  text= 'Please Choose Option'
  document.getElementById("OP12").innerHTML = text;
}
}

