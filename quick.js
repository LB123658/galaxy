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
} else if (text == "olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "tokyo olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "2020 olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == " 2021 olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "2020 tokyo olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "summer olympics") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "olympic games") {
first.innerHTML = "2020 Tokyo Olympics<br><a href='https://olympics.com' target='blank'>olympics.com</a>";
quick.innerHTML = "<b>Olympic Games Tokyo 2020</b><br>July 23, 2021 - August 8, 2021<br><br><p>The 2020 Summer Olympics (Japanese: 2020年夏季オリンピック, Hepburn: Nisen Nijū-nen Kaki Orinpikku), officially the Games of the XXXII Olympiad (第三十二回オリンピック競技大会, Dai Sanjūni-kai Orinpikku Kyōgi Taikai) and branded as Tokyo 2020 (東京2020), is an ongoing international multi-sport event that is currently being held from 23 July to 8 August 2021 in Tokyo, Japan, with some preliminary events beginning on 21 July.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png' style='width:100%'><br><a href='https://www.nbcolympics.com/' target='blank'>Watch on NBC</a><br><a href='https://olympics.com/' target='blank'>Olympics website</a><br><a href='https://www.google.com/search?q=Olympic+Games+Tokyo' target='blank'>More information</a>";
quick.style.visibility = "visible";
} else if (text == "zimbabwe") {
first.innerHTML = "Zimbabwe - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Zimbabwe</b<br><p>Zimbabwe, officially the Republic of Zimbabwe, is a landlocked country located in Southeast Africa, between the Zambezi and Limpopo Rivers, bordered by South Africa to the south, Botswana to the south-west, Zambia to the north, and Mozambique to the east. The capital and largest city is Harare. The second largest city is Bulawayo. A country of roughly 15 million people, Zimbabwe has 16 official languages, with English, Shona, and Ndebele the most common.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "zambia") {
first.innerHTML = "Zambia - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Zambia</b<br><p>Zambia, which is officially the Republic of Zambia, is a landlocked country at the crossroads of Central, Southern and East Africa. Its neighbors are the Democratic Republic of the Congo to the north, Tanzania to the north-east, Malawi to the east, Mozambique to the southeast, Zimbabwe and Botswana to the south, Namibia to the southwest, and Angola to the west. The capital city of Zambia is Lusaka, located in the south-central part of Zambia. The population is concentrated mainly around Lusaka in the south and the Copperbelt Province to the north, the core economic hubs of the country.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "yemen") {
first.innerHTML = "Yemen - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Yemen</b<br><p>Yemen (Arabic: ٱلْيَمَن), officially the Republic of Yemen, is a country in Western Asia, on the southern end of the Arabian Peninsula. It borders Saudi Arabia to the north and Oman to the northeast and shares maritime borders with Eritrea, Djibouti, and Somalia. It is the second-largest Arab sovereign state in the peninsula, occupying 527,970 square kilometres (203,850 square miles). The coastline stretches for about 2,000 kilometres (1,200 miles). Yemen's constitutionally stated capital, and largest city, is the city of Sanaa, but the city has been under Houthi rebel control since February 2015 as well as Aden, which is also controlled by the Southern Transitional Council since 2018. Its executive administration resides in Riyadh, Saudi Arabia.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "vietnam") {
first.innerHTML = "Vietnam - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Vietnam</b<br><p>Vietnam (Vietnamese: Việt Nam), officially the Socialist Republic of Vietnam, is a country in Southeast Asia. It is located at the eastern edge of the Indochinese Peninsula, and is divided into 58 provinces and five municipalities, covering 331,699 square kilometres, with a population of over 96 million inhabitants, making it the world's sixteenth-most populous country. Vietnam shares borders with China to the north, Laos and Cambodia to the west; whilst maintaining maritime borders with Thailand through the Gulf of Thailand, and the Philippines, Indonesia and Malaysia through the South China Sea. Its capital is Hanoi and its largest city is Ho Chi Minh City (Saigon).</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "venezuela") {
first.innerHTML = "Venezuela - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Venezuela</b<br><p>Venezuela, officially the Bolivarian Republic of Venezuela (Spanish: República Bolivariana de Venezuela), is a country on the northern coast of South America, consisting of a continental landmass and many islands and islets in the Caribbean Sea. It has a territorial extension of 916,445 km2 (353,841 sq mi), and the population of Venezuela was estimated at 28 million in 2019. The capital and largest urban agglomeration is the city of Caracas.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "vatican city") {
first.innerHTML = "Vatican City - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Vatican City</b<br><p>Vatican City, officially the Vatican City State (Italian: Stato della Città del Vaticano; Latin: Status Civitatis Vaticanae), is an independent city state and enclave located within Rome, Italy. The Vatican City State, also known simply as the Vatican, became independent from Italy with the Lateran Treaty (1929), and it is a distinct territory under juriscidtion of the Holy See, itself a sovereign entity of international law, which maintains the city state's temporal, diplomatic, and spiritual independence.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "vanuatu") {
first.innerHTML = "Vanuatu - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Vanuatu</b<br><p>Vanuatu is an island country located in the South Pacific Ocean. The archipelago, which is of volcanic origin, is 1,750 kilometres (1,090 mi) east of northern Australia, 540 kilometres (340 mi) northeast of New Caledonia, east of New Guinea, southeast of the Solomon Islands, and west of Fiji.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (text == "uzbekistan") {
first.innerHTML = "Uzbekistan - Wikipedia<br><a href='https://wikipedia.org/wiki/" + text + "' target='blank'>wikipedia.org</a>";
quick.innerHTML = "<b>Uzbekistan</b<br><p>Uzbekistan, officially the Republic of Uzbekistan (Uzbek: Oʻzbekiston Respublikasi), is a landlocked country in Central Asia. It is surrounded by five countries: Kazakhstan to the north; Kyrgyzstan to the northeast; Tajikistan to the southeast; Afghanistan to the south, Turkmenistan to the south-west. Its capital and largest city is Tashkent. Along with Liechtenstein, it is one of two doubly landlocked countries.</p><br><img src='https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg' style='width:100%'>";
quick.style.visibility = "visible";
} else if (query.length > 18) {
quick.innerHTML = "<b>" + query + "</b><br><p>Galaxy is working to have better results and quick answers available for popular topics. This is currently not available for your search.</p>";
quick.style.visibility = "visible";
} else {
quick.style.visibility = "hidden";
}
}
setquickAnswer();
