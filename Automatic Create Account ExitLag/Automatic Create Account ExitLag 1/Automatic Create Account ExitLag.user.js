// ==UserScript==
// @version  1
// @grant    GatoLouco
// @name    Automatic Create Account ExitLag
// @include /^https?\:\/\/(.*|www\.)exitlag.com\/..\/(teste-gratis|free-trial|prueba-gratis)/

// ==/UserScript==


CONFIG_EMAIL = "mamamiamuchachu@gmail.com" // only gmail
CONFIG_PASSWORD = "my_password"
CONFIG_ACTIVATE_SCRIPT = true
CONFIG_AUTOMATIC_CLICK_REGISTER_BUTTON = false
CONFIG_AUTOMATIC_REDIRECT_BACK = true
/** aux functions **/ 


function setCookie(cname,cvalue,exdays) { // https://qastack.com.br/programming/4825683/how-do-i-create-and-read-a-value-from-cookie
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}


function getCookie(cname) { // https://qastack.com.br/programming/4825683/how-do-i-create-and-read-a-value-from-cookie
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function eventFire(el, etype){ // https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript#answer-2706236
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }

}

function return_all_possible_emails(email){

	myemail = email.split("@")[0]
  all_possible_emails = []
  for (x=1;x< myemail.length ;x++){
    new_e = myemail.slice(0,x) + "." + myemail.slice(x,myemail.length)	
    all_possible_emails.push(new_e+ "@gmail.com")
  }
  for (x=1;x<myemail.length;x++){
    new_e = myemail.slice(0,x) + "." + myemail.slice(x,myemail.length)	
    for(y=x+2; y<=myemail.length;y++){
      new_e2 = new_e.slice(0,y) + "." + new_e.slice(y,new_e.length)	
      all_possible_emails.push(new_e2+ "@gmail.com")
    }

  }
	return all_possible_emails
}



 /** Function that complete the register form and click in the register button **/

function complete_data(login,email){
  document.getElementsByClassName("transition")[14].textContent = "Create Account (Don't need proxy)"
  
   var contador = ""
  contador = getCookie("dados_registro_c")
  
  if (contador == "" ){
  	setCookie("dados_registro_c", 0, 1000)
 		complete_data(login, email)
  }
  
  
 

  cont = parseInt(contador, 10)
  
  
  all_possible_emails = return_all_possible_emails(email)
	
 
  console.log(all_possible_emails)  
 
  if(cont > all_possible_emails.length -1){
  	alert("ALL THE POSSIBILITIES OF USE THIS EMAIL ARE OVER! PLEASE CHANGE THE EMAIL IN THE END OF THE SCRIPT!")
    setCookie("dados_registro_c", 0, 1000)
  }
  
  //login += String(contador)
  
  // WE NEED TO DO ALL THIS STUFFS BECAUSE THEY DO ALL BY EVENTS.
  document.getElementById("email").focus()
  document.getElementById("email").click()
	document.getElementById("email").value = all_possible_emails[cont]
  eventFire(document.getElementById("email"), 'change')
  eventFire(document.getElementById("email"), 'input')
  eventFire(document.getElementById("email"), 'compositionstart')
  eventFire(document.getElementById("email"), 'compositionstart')
  
  
   document.getElementById("password").focus()
  document.getElementById("password").click()
  document.getElementById("password").value = login
  document.getElementById("password").type = "" 
  eventFire(document.getElementById("password"), 'change')
  eventFire(document.getElementById("password"), 'input')
  eventFire(document.getElementById("password"), 'compositionstart')
  eventFire(document.getElementById("password"), 'compositionstart')
  
  
  
    document.getElementById("confirm-password").focus()
  document.getElementById("confirm-password").click()
  document.getElementById("confirm-password").type = ""
  document.getElementById("confirm-password").value = login
    eventFire(document.getElementById("confirm-password"), 'change')
  eventFire(document.getElementById("confirm-password"), 'input')
  eventFire(document.getElementById("confirm-password"), 'compositionstart')
  eventFire(document.getElementById("confirm-password"), 'compositionstart')
  
  //alert(1)
  document.getElementsByClassName("transition")[14].onclick = function (){
  	c = String(parseInt(getCookie("dados_registro_c"), 10)+1)
		setCookie("dados_registro_c", c, 1000)
  }
  
  sleep(1000).then(() => {
   if(CONFIG_AUTOMATIC_CLICK_REGISTER_BUTTON){ document.getElementsByClassName("transition")[14].click()}
  });
  //alert(2
  
  
  
}





 /** HERE IS ACTUALLY WHERE THE CODE START **/

if(CONFIG_ACTIVATE_SCRIPT){
  
  sleep(1000).then(() => { // give it a time to load
    
      
   window.onload = 'load',complete_data(CONFIG_PASSWORD,CONFIG_EMAIL); // wait til all load and call the function ABOVE
      
    
  });
}










