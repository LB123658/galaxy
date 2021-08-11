const d = new Date();
var searchHistory = localStorage.getItem("search_history");
var addedHtml = "<a href='" + window.location.href + "' target='_blank'><button class='history'>" + location.search.split("=")[1].split("&")[0].replace(/\+/gi, " ") + " - Galaxy Search <span style='float:right;'>" + d.toLocaleTimeString() + "</span></button></a>";

function trackSearch() {
localStorage.setItem("search_history",searchHistory + addedHtml); 
}
trackSearch();
