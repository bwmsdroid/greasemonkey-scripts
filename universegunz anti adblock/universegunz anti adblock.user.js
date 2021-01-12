// ==UserScript==
// @name     universegunz anti adblock
// @version  1
// @grant    none
// @match  *://*.universegunz.net/*
// ==/UserScript==

  var $wrapper = document.querySelector('body');
 
    // String de texto
    HTMLNovo = '<ins id ="aswift_1_expand">';
// Insere o texto antes do conteúdo atual do elemento
$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);//}