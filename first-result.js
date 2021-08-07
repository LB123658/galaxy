if (text.search(" ") == -1) {
first.innerHTML = text + ".com - suggested website<br><a href='https://" + text + ".com' title='This link has not been verified and may be unsafe'>" + text + ".com</a>";
quick.innerHTML = "<b>Galaxy is working on having better results</b><br><p style='text-align:center;'><span class='material-icons' style='color:#5765f2;'>feedback</span></p>The first result has not been checked and may not actually lead to a website.";
quick.style.visibility = "visible";
}
