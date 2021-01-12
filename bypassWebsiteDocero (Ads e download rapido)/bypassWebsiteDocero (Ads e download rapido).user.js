// ==UserScript==
// @name     bypassWebsiteDocero (Ads e download rapido)
// @version  1
// @grant    none
/ @match    *://forum.universegunz.net/*
// ==/UserScript==

function bypassWebsiteDocero(){

	unsafeWindow.ads_unblocked = true; // adblock
  unsafeWindow.Download.startDownload(0); // ja inicia
  document.getElementById("recap-show").style.display = "none";
  
}

window.onload = bypassWebsiteDocero();