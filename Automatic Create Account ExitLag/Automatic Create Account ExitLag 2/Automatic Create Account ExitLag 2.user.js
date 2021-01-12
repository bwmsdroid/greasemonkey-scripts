// ==UserScript==
// @version  1
// @grant    GatoLouco
// @name    Automatic Create Account ExitLag 2
// @include /^https?\:\/\/(.*|www\.)exitlag.com\/..\/(register-success)/

// ==/UserScript==








function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}



window.onload = ('load',function(){

    location.href = _url = document.getElementsByClassName("button-version-download-site transition router-link-active")[0].href + "free-trial"
 

});