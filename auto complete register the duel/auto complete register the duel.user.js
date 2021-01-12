// ==UserScript==
// @name     Unnamed Script 808308
// @version  1
// @grant    none
// @name    auto complete register the duel
// @match    *://www.theduel.com.br/cadastro*
// ==/UserScript==

// script the duel register









function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}


function getCookie(cname) {
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






function complete_data(login,email){
  
  document.getElementsByClassName("formsubmit")[0].innerHTML = "<input type=\"submit\" name=\"submit\" value=\"Cadastrar (USE UMA PROXY!)\">"
  
   var contador = ""
  contador = getCookie("dados_registro_c")
  
  if (contador == "" ){
  	setCookie("dados_registro_c", 0, 1000)
 		complete_data(login, email)
  }
  
  

  cont = parseInt(contador, 10)
  
  
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
	
 
  console.log(all_possible_emails)  
 
  if(cont > all_possible_emails){
  	alert("atenção, todas as possibilidades de uso deste emais estão esgotadas, troque de email!")
    setCookie("dados_registro_c", 0, 1000)
  }
  
  login += String(contador)
  document.getElementsByName("password1")[0].value = login
  document.getElementsByName("password1")[0].type = ""
  document.getElementsByName("password2")[0].value = login
  document.getElementsByName("password2")[0].type = ""
  document.getElementsByName("birthday")[0].value = "02/01/2008"
  document.getElementsByName("nome")[0].value = "irineu santos"
  document.getElementsByName("user")[1].value = login
  document.getElementsByName("email")[0].value = all_possible_emails[cont]
  
  
  document.getElementsByName("submit")[1].onclick = function (){
  	c = String(parseInt(getCookie("dados_registro_c"), 10)+1)
		setCookie("dados_registro_c", c, 1000)
  }
}





complete_data("kakaka","thefluider@gmail.com")














