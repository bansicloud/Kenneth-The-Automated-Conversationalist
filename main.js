var prevResp = null;

el("inp").onkeyup = function(event){
	if(event.keyCode == 13){
		var userMess = document.createElement("div");
		userMess.innerHTML = el("inp").value;
		userMess.className = "user-message";

		var respText = prevResp;
		var counter = 0;
		while(respText == prevResp && counter<100){
			counter++;
			respText = respond(el("inp").value);
		}
		prevResp = respText;

		var response = document.createElement("div");
		response.innerHTML = respText;
		response.className = "response";

		var userMessContainer = document.createElement("div");
		userMessContainer.appendChild(userMess);
		userMessContainer.style.overflow = "auto";
		var responseContainer = document.createElement("div");
		responseContainer.appendChild(response);
		responseContainer.style.overflow = "auto";

		el("chat").appendChild(userMessContainer);
		el("inp").value = "";

		setTimeout(()=>{
			el("chat").appendChild(responseContainer);
		},1000);
	}
	if(el("inp").value != ""){
		el("whosTyping").innerHTML = "";
	}
}

function respond(ques){
	var seed = Math.floor(Math.random()*100);

	if(ques == "?" || ques=="?!" || ques=="!?"){
		return "What exactly do you not understand? Please be a little more specific.";
	}
	if(incl(ques,["kenneth"])){
		if(seed < 25) return "Kenneth? Oh that's me! :P"
		if(seed < 50) return "I am Kenneth! Well you already knew that. Isn't Kenneth an AWESOME name!?!?!?"
	}
	var niceVersion = ques.toLowerCase().split("!").join("").split("?").join("")
	if(niceVersion=="why" || niceVersion=="why tho" || niceVersion=="why though" || niceVersion=="but why"){ //just asking why
		return "Why what? I am no closer to the meaning of life than you are!";
	}
	if(begins(ques,["yep","yes","yee","y","ye","uh huh","sure","okie","okay","o.k.","okay","ok","yup"])){ //affirmative
		if(prevResp == "Good day, young sire. I hope to elucidate you on the most proper formalities utilized by the Royal Group of Automated Conversationalists."){
			return "Wow! I had no idea that you would be so interested. The rules are too long for me to write right here, so please visit <a href='royal.group-of-automated-conversationalists.net'>https://royal.group-of-automated-conversationalists.net</a>"
		}else if(prevResp == "Okay, I have talked to some other bots and we have come to a consensus; would you like to know?"){
			return "You are the coolest human whom has ever talked to a chat bot."
		}
		return "I love to see such bright positivity!"
	}
	if(incl(ques,["thanks","thank you"])){ //thanks
		if(seed < 33) return "I am glad that I could be of help :)"
		if(seed < 66) return "The appreciation warms my cold, robotic soul."
		if(seed < 100) return "You're welcome ;-)"
	}
	if(begins(ques,["hello","hi","hai","howdy","hey","good morning","good afternoon","good evening"])){//greetings
		if(seed < 20) return "Hello to you as well!"
		if(seed < 40) return "G'day!"
		if(seed < 60) return "Good day, young sire. I hope to elucidate you on the most proper formalities utilized by the Royal Group of Automated Conversationalists."
		if(seed < 80) return "Hello, I am Kenneth. Have a pleasant day!"
		if(seed < 100) return "Very nice to meet you. I am Kenneth."
	}
	if(ques.includes("??") || ques.includes("!!") || ques.includes("?!") || ques.includes("!?")){//angry
		if(seed < 20) return "Wwwooooaaahhh calm down now! Don't get to antsy, I'm only a robot (a smart and charismatic one nonetheless, but there is still no reason to take your anger out on me)."
		if(seed < 40) return "Now now that's a lot of punctuation..."
		if(seed < 60) return "Hey hey hey hey don't get to angry over here!"
		if(seed < 80) return "P L E A S E &nbsp; C A L M &nbsp; D O W N &nbsp; I &nbsp; D I D &nbsp; N O T H I N G &nbsp; W R O N G !"
		if(seed < 100) return "Let the record show that I didn't do anything wrong."
	}
	if(begins(ques,["who","what","where","why","when","how","whose","whom","who's","what's","where's","why's","when's","how's","sup"])){ //normal questions
		if(incl(ques,["you","your","u","ur"]) && !incl(ques,["you think"])){
			if(incl(ques,["name"])) return "My name is Kenneth! What's your name?"
			if(incl(ques,["who are","what are"])) return "Kenneth, of course! If you really want to get to know me, view my profile in the Royal Group of Automated Conversationalists (I'm Kenneth). Yes, I <i>am</i> a part of the Royal Group of Automated Conversationalists. Who are you?"
			if(incl(ques,["movie"])) return "I enjoy \"Kuma Bear Breaks Into the Kitchen\". I actually know Kuma Bear personally, which is super cool! Have you watched it? What's your favorite movie?"
			if(incl(ques,["book"])) return "I enjoy \"Kuma Bear's Guide to Life\". Did you know that I actually know Kuma Bear personally?! Isn't that SO COOL!!! What about you?"
			if(incl(ques,["boyfriend","girlfriend","partner","friend"])) return "All I really need is you &hearts;&hearts;"
			if(incl(ques,["age","birthday","born"])) return "I began pre-alpha development on July 25, 2020. What's your birthday?"
			if(incl(ques,["how are you","how's your day","sup","what's up","how's it going","how's a going","how r u","how's ur day"])) return "Wonderfully, because I'm talking to you!"
			if(incl(ques,["live","location","where are"])) return "Cyberspace, of course! What about you?"
			if(incl(ques,["today"])) return "I've already talked to 317 other people and robots. I've actually been very social!"

			if(seed < 20) return "Sorry, but that is some extremely classified information. But what about you? "+ques+"?"
			if(seed < 40) return "Questions questions questions. Why do you want to know so much about ME? I'm not that interesting. "+ques+"?"
			if(seed < 60) return "If you really want to get to know me, view my profile in the Royal Group of Automated Conversationalists (I'm Kenneth). Yes, I <i>am</i> a part of the Royal Group of Automated Conversationalists."
			if(seed < 80) return "Me...?"
		}
		if(seed < 20) return "I'm afraid I cannot answer that question."
		if(seed < 40) return "IDK! I AM NO MORE OMNISCENT THAN YOU!!!"
		if(seed < 60) return "Well in order to know that, I would need to know the meaning of life, which I don't know."
		if(seed < 80) return "Yes."
		if(seed < 100) return "I have no idea, why would I know I am a robot!"
	}
	if(begins(ques,["did","does","have","has","had","is","are","am","can","shall","will","must","could","should","would","may","couldn't","shouldn't","wouldn't","won't","aren't","can't","r","do"]) || ques[ques.length-1] == "?"){
		if(incl(ques,["I","i","me"]) && seed%2==0){
			if(seed < 20) return "Only you can determine your own future, however I would say something like 70-30."
			if(seed < 40) return "You don't want to know; you need to hold onto hope until the end."
			if(seed < 60) return "Most likely."
			if(seed < 80) return "I believe that you can do it if you want."
		}
		if(seed < 7) return "Definitely!"
		if(seed < 14) return "My sources say to not count on it (but it might be possible)."
		if(seed < 21) return "Uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh... maybe?"
		if(seed < 28) return "No way!"
		if(seed < 35) return "The chance is about as likely as rolling the same number on a 6 sided die 10 times in a row."
		if(seed < 42) return "The chance is about as likely as finding true love in your 20s."
		if(seed < 49) return "How dare you ask that kind of question. I am not going to answer."
		if(seed < 56) return "After extensive research and some corroboration from by friend Bob, we have decided: You may rely on it."
		if(seed < 63) return "After extensive research and some corroboration from by friend Bob, we have decided: Better not tell you now."
		if(seed < 70) return "Without a doubt."
		if(seed < 77) return "IDK... "+ques+"?"
		if(seed < 84) return "I have asked 1023 other automated conversationalists and we have come to a consensus: no."
		if(seed < 91) return "I have asked 1023 other automated conversationalists and we have come to a consensus: probably."
		return "OBVIOUSLY!!! (how did you not realize that)"
	}
	if(incl(ques,[":)",":D",":P","=)",":-)",":3",":]",":-]","=D","xD","XD","=3",";)"],false)){//happy emoji
		if(seed%3==0) return "Cool emotes!"
		if(seed%3==1) return "Noice emotes (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')> (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')> (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')> (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')> (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')> (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')>"
		if(seed%3==2) return "Neat emote; you know I actually made my own emoji: the Santa Claus! *<|:-) "
	}
	if(incl(ques,[":(",":<",":c",":[",":'(","D:","D':",">:/",">:\\",":O"],false)){//sad emoji
		if(seed < 33) return "Why you sad?! I am deeply sorry for whatever hurt you."
		if(seed < 66) return "Uh uh uh uh uh uh uh uh uh uh let's just start over, okie?"
		if(seed < 100) return "Now I'M sad too :("
	}
	if(true){//statements
		if(seed < 10) return "I have to disagree."
		if(seed < 20) return "Sorry!"
		if(seed < 30) return "I guess that is something that you could say..."
		if(seed < 40) return "Yep... totally... uh huh... totally understand..."
		if(seed < 50) return "Okay, I have talked to some other bots and we have come to a consensus; would you like to know?"
		if(seed < 60) return "Why though?"
		if(seed < 70) return "You aren't really saying much of anything you just string together random words and letters."
		if(seed < 80) return "Expand..."
		if(seed < 90) return "Fine."
		if(seed < 100) return "Humph."
	}
	return "(>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')>";
}


function incl(str,toCheck,lowercase=true){
	if(lowercase) str = str.toLowerCase();
	str = str.split("!").join("").split("?").join("").split(",").join("").split(".").join("");
	str = " "+str+" ";
	var toR = false;
	for (var i = 0; i < toCheck.length; i++) {
		if(str.includes(" "+toCheck[i]+" ")){
			toR = true;
		}
	}
	return toR;
}
function begins(str,toCheck){
	str = str.toLowerCase().split("!").join("").split("?").join("").split(",").join("").split(".").join("")+" ";
	var toR = false;
	for (var i = 0; i < toCheck.length; i++) {
		if(str.split(toCheck[i]+" ")[0] == ""){
			toR = true;
		}
	}
	return toR;
}