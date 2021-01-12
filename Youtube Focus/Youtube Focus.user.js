// ==UserScript==
// @name     Unnamed Script 339705
// @version  1
// @grant    none
// @name Youtube Focus
// @match *://www.youtube.com/watch*
// ==/UserScript==

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
sleep(5000).then(() => {
for (x=0;x<99999;x++){    
  						document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer")[0].remove(0);
							document.getElementsByClassName("style-scope ytd-comments")[0].remove(0);
  						document.getElementsByClassName("style-scope ytd-video-secondary-info-renderer")[0].remove(0);
}

});