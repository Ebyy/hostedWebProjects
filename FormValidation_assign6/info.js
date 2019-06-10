var form = document.querySelector("form");

form.onsubmit = function validateForm(){
  clearErrors();
  var valid;
  var valFName = validName();
  var valAge = validAge();

  if(valAge && valFName){
    valid=true;
  }
  else{
    valid = false;
  }
  return valid;
}

function validName(){

  var err = document.querySelector(".errorss");
  var inputValue = form.fName.value.trim();
  var patt= /^[A-Z][a-z]+$/;
  var fvalid = patt.test(inputValue);
  if (!fvalid){

    err.innerHTML += "<p>*Wrong format: must start with uppercase</p>"; 
    form.fName.focus();
    return false;   
  }

  return true;
}  


function validAge(){
  var err = document.querySelector(".errorss");
  
  var age = form.ageid.value.trim();

  if(age < 18 || age > 60){
    err.innerHTML += "<p>*Age must be in range 18-60</p>";
    form.ageid.focus();    
    return false;
  }
  else{
    return true;}
}



function clearErrors(){
  var err = document.querySelector(".errorss");
  err.innerHTML = "";
}
