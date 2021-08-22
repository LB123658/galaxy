if (localStorage.getItem("lang")) {
setLanguage();
}
function setLanguage() {
var input = document.getElementById("input");
var linkRow = document.getElementById("link-row");
var info = document.getElementById("info");

if (localStorage.getItem("lang") == "es") {
input.placeholder = "Buscar en privado";
linkRow.innerHTML = "<a href='about'>Acerca de Galaxy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>Privacidad</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>Historial</a>";
info.innerHTML = "Bienvenido a Galaxy en español.";
} else if (localStorage.getItem("lang") == "pl") {
input.placeholder = "Szukaj";
linkRow.innerHTML = "<a href='about'>O Galaxy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>Prywatność</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>Historia wyszukiwania</a>";
info.innerHTML = "Witaj w Galaxy po polsku.";
} else if (localStorage.getItem("lang") == "ru") {
input.placeholder = "Поиск";
linkRow.innerHTML = "<a href='about'>O Galaxy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>Конфиденциальность</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>История поиска</a>";
info.innerHTML = "Добро пожаловать в Galaxy.";
} else if (localStorage.getItem("lang") == "ik") {
input.placeholder = "ᕿᓂᕐᓂᖅ";
linkRow.innerHTML = "<a href='about'>ᒥᒃᓵᓄᑦ Galaxy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>ᑲᙳᓇᖅᑐᑦ</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>ᕿᓂᖅᑐᒃᑯᑦ ᖃᓄᐃᓕᐅᖅᑕᐅᖃᑦᑕᕐᓂᑯᑦ</a>";
info.innerHTML = "ᑐᙵᓱᒋᑦᑎ Galaxy ᐃᓄᒃᑎᑐᑦ.";
} else if (localStorage.getItem("lang") == "am") {
input.placeholder = "ፍለጋ";
linkRow.innerHTML = "<a href='about'>ስለ Galaxy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>ግላዊነት</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>የፍለጋ ታሪክ</a>";
info.innerHTML = "እንኳን በደህና መጡ Galaxy በአማርኛ.";
} else if (localStorage.getItem("lang") == "ud") {
input.placeholder = "Утчан";
linkRow.innerHTML = "<a href='about'>Galaxy сярысь</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='privacy'>Конфиденциальность</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='history'>Историез утчан</a>";
info.innerHTML = "Удмурт кылэз гажасьёс вылын Galaxy.";
} else {
;
}
}
