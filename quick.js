// JUST FOR THE FIRST SUGGESTION
function setquickAnswer() {
var query = location.search.split("=")[1].split("&")[0].replace(/\+/gi, " ");
var first = document.getElementById("first");
var quick = document.getElementById("quick");
var text = query.toLowerCase();

if (text == "google") {
first.innerHTML = "Google<br><a href='https://www.google.com' target='blank'>www.google.com</a>";
quick.innerHTML = "<b>Google - technology company</b<br><p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.</p><br><br><a href='https://www.google.com' target='blank'>www.google.com</a>";
quick.style.visibility = "visible";
} else if (text == "youtube") {
first.innerHTML = "YouTube<br><a href='https://www.youtube.com' target='blank'>www.youtube.com</a>";
quick.innerHTML = "<b>YouTube - video sharing company</b<br><p>YouTube is an American online video sharing and social media platform launched by Steve Chen, Chad Hurley, and Jawed Karim in February 2005. Its users watch more than one billion hours of videos each day.</p><br><br><a href='https://www.youtube.com' target='blank'>www.youtube.com</a>";
quick.style.visibility = "visible";
} else if (text == "facebook") {
first.innerHTML = "Facebook<br><a href='https://www.facebook.com' target='blank'>www.facebook.com</a>";
quick.innerHTML = "<b>Facebook - social media</b<br><p>Facebook, Inc., is an American multinational conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his fellow roommates and students at Harvard College</p><br><br><a href='https://www.facebook.com' target='blank'>www.facebook.com</a>";
quick.style.visibility = "visible";
} else if (text == "gmail") {
first.innerHTML = "Gmail<br><a href='https://mail.google.com' target='blank'>mail.google.com</a>";
quick.innerHTML = "<b>Gmail - email service</b<br><p>Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide. A user typically accesses Gmail in a web browser or the official mobile app. Google also supports the use of email clients via the POP and IMAP protocols.</p><br><br><a href='https://mail.google.com' target='blank'>mail.google.com</a>";
quick.style.visibility = "visible";
} else if (text == "amazon") {
first.innerHTML = "Amazon<br><a href='https://www.amazon.com' target='blank'>www.amazon.com</a>";
quick.innerHTML = "<b>Amazon - online store</b<br><p>Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. </p><br><br><a href='https://www.amazon.com' target='blank'>www.amazon.com</a>";
quick.style.visibility = "visible";
} else if (query.length > 18) {
quick.innerHTML = "<b>" + query + "</b><br><p>Galaxy is working to have better results and quick answers available for popular topics. This is currently not available for your search.</p>";
quick.style.visibility = "visible";
} else {
quick.style.visibility = "hidden";
}
}
setquickAnswer();
