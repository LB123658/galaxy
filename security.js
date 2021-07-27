var query = location.search.split("=")[1].split("&")[0].replace(/\+/gi, " ");
var text = query.toLowerCase();

if (text == "dark web") {
block();
} else if (text == "illegal downloads") {
block();
} else if (text == "hacking") {
block();
} else if (text == "how to hack") {
block();
} else if (text == "mail.ru") {
block();
} else if (text == "maga") {
block();
} else if (text == "trump hats") {
block();
} 

function block() {
location.replace("https://lb123658.github.io/galaxy/blocked" + location.search);
}
