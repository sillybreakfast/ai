let updata = 0,
data = [
	["clothing", ["shopping", "clothing"]],
	["clothes", ["shopping", "clothing"]],
	["apple", ["food", "fruit"]],
	["orange", ["color", "warm color", "fruit", "orange", "fruit", "citrus", "danger"]],
	["banana", ["tropical", "food", "yellow", "berry", "fruit"]],
	["lime", ["fruit", "food", "green", "citrus"]],
	["blueberr", ["berry", "blue", "fruit"]], // no "y" for plural version
	["grape", ["berry", "fruit", "food"]],
	["lemon", ["citrus", "yellow", "food", "fruit"]],
	["pants", ["clothing", "shopping", "legs"]],
	["eat", ["food", "mouth"]],
	["ate", ["food", "mouth"]],
	["strawberr", ["food", "fruit", "red"]], // no "y" for plural version
	["nice", ["positive"]],
	["kind", ["positive"]],
	["good", ["positive"]],
	["love", ["positive", "romance", "love"]],
	["like", ["positive"]],	
	["yummy", ["positive", "food"]],
	["tasty", ["positive", "food"]],
	["fun", ["positive"]],
	["red", ["color", "warm color", "danger", "anger", "love", "romance"]], // orange is way up at the top
	["yellow", ["color", "warm color", "danger", "happy"]],
	["green", ["color", "cold color", "disgust", "luck", "life", "nature"]],
	["blue", ["color", "cold color", "sadness", "wisdom", "freedom"]],
	["purple", ["color", "cold color", "magic", "mystery"]],
	["pink", ["color", "warm color", "love", "romance"]],
	["?", ["question"]],
	["hello", ["greeting"]],
	["hey there", ["greeting"]],
	["meet you", ["greeting"]],
	["meeting you", ["greeting"]],
	["lol", ["positive"]],
	["l.o.l", ["positive"]],
	["qwertyy", ["creator"]],
	["artificial idiot", ["me", "artificial intelligence"]],
	["mister", ["male", "formal"]],
	["mr", ["male", "formal"]],
	["ms", ["female", "formal"]],
	["mx", ["non-binary", "formal"]],
	["miss", ["female", "formal"]],
	["dad", ["parent", "male", "family"]],
	["mom", ["parent", "female", "family"]],
	["parent", ["parent", "family"]],
	["father", ["parent", "male", "family"]],
	["mother", ["parent", "female", "family"]],
	["brother", ["sibling", "male", "family"]],
	["sister", ["sibling", "female", "family"]],
	["sibling", ["sibling", "family"]],
	["grandpa", ["grandparent", "male", "family"]],
	["grandma", ["grandparent", "female", "family"]],
	["date", ["romance", "love"]],
	["dating", ["romance", "love"]],
	["hate", ["negative"]],
	["dislike", ["negative"]],
	["not", ["not"]],
	["github", ["origin place"]]
],
userinput = "",
results = [];

document.head.innerHTML = `
<title>artificial idiot</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="logo.png">
<style>
html {
	--active: #96bbff;
	--bg: #202020;
	--border: #898989;
	--content-bg: #151515;
	--red: #ff6c6c;
}
body {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, Ubuntu, Arial, sans-serif, monospace;
	background-color: var(--bg);
	color: #ffffff;
	color-scheme: dark;
	margin: 20px;
}
h1 {
	border-bottom: solid 1px var(--border);
	margin: 0;
	height: 38px;
}
#results {
	height: 170px;
	overflow-y: scroll;
	margin: 10px 0;
}
textarea {
	width: calc(100% - 26px);
	height: 200px;
	resize: none;
	border-radius: 10px;
	border: dashed 1px var(--border);
	transition: 0.2s;
	padding: 12px;
	font-size: inherit;
	font-family: inherit;
}
textarea:focus {
	border: solid 1px var(--active);
	outline: none;
}
::selection {
	background-color: var(--active);
	color: #000000;
}
::-moz-selection {
	background-color: var(--active);
	color: #000000;
}
a {
	color: var(--active);
	text-decoration: none;
	cursor: pointer;
}
a:hover {
	text-decoration: underline;
}
#github-link {
	position: relative;
    top: 10px;
    margin-right: 10px;
	width: 35px;
}
a::selection {
	text-decoration: underline;
}
a::-moz-selection {
	text-decoration: underline;
}
content div {
	width: calc(60% - 40px);
	margin-left: 20%;
	background: var(--content-bg);
	border-radius: 30px;
	padding: 20px;
}
content {
	display: block;
	margin-top: calc(50vh - 160px);
	min-height: calc(100vh - calc(50vh - 100px));
}
.print {
	display: none;
}
#submit {
	display: block;
}
button {
	margin-top: 10px;
	background-color: var(--active);
	color: #000000;
	padding: 14px 0;;
	width: 100%;
	border: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: 10px;
	cursor: pointer;
}
.fun button {
	animation: fun-bg 3s linear 0s infinite normal forwards;
}
.fun a {
	animation: fun 3s linear 0s infinite normal forwards;
}
#header {
	background-color: var(--bg);
	position: fixed;
	top: 0;
	z-index: 100;
	width: 95%;
	left: 2.5%;
}
footer span {
	font-size: 14px;
    color: #6f6f6f;
	margin-right: 20px;
}
.right {
	float: right;
}
.header-button {
	margin-left: 20px;
	float: right;
}
#prompt-div {
	display: inline-block;
	transition: 0.2s;
}
#results-div {
	width: 0%;
	transition: 0.2s;
	overflow: hidden;
	display: inline-block;
	float: right;
}
.answer content div div, .answer #results-div {
	width: calc(50% - 10px);
}
@keyframes fun {
	0% {
		color: rgb(255, 0, 0);
	}
	16.5% {
		color: rgb(255, 255, 0);
	}
	33% {
		color: rgb(0, 255, 0);
	}
	50% {
		color: rgb(0, 255, 255);
	}
	66% {
		color: rgb(0, 0, 255);
	}
	82.5% {
		color: rgb(255, 0, 255);
	}
	100% {
		color: rgb(255, 0, 0);
	}
}
@keyframes fun-bg {
	0% {
		background-color: rgb(255, 0, 0);
	}
	16.5% {
		background-color: rgb(255, 255, 0);
	}
	33% {
		background-color: rgb(0, 255, 0);
	}
	50% {
		background-color: rgb(0, 255, 255);
	}
	66% {
		background-color: rgb(0, 0, 255);
	}
	82.5% {
		background-color: rgb(255, 0, 255);
	}
	100% {
		background-color: rgb(255, 0, 0);
	}
}
::-webkit-scrollbar {
	width: 8px;
}
::-webkit-scrollbar-button {
	display: none;
}
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: var(--border);
}
content div div {
	width: 100%;
    padding: 0;
    margin: 0;
	border-radius: 0;
}
.red {
	color: var(--red);
}
@media (max-width: 800px), (cursor: coarse) {
	content div {
		width: calc(100% - 40px);
		margin-left: 0;
		background-color: var(--content-bg);
	}
	content div div {
		width: 100%!important;
		display: block;
		background-color: var(--content-bg);
	}
	#submit {
		display: block;
	}
	#header {
		width: calc(100% - 40px);
		left: 20px;
	}
	content {
		margin-top: 70px;
	}
	#results-div {
		display: none;
	}
	.answer * #results-div {
		float: initial;
		display: block;
	}
	h1 {
		height: initial;
		margin-top: 20px;
	}
}
@media print, body.print {
	body {
		background: #ffffff;
		color: #000000;
	}
	content div {
		width: calc(100% - 40px);
		margin-left: 0;
		padding: 0;
		background: #ffffff;
	}
	content div div {
		width: 100%!important;
		display: block!important;
	}
	.dont-print {
		display: none;
	}
	#submit {
		display: none;
	}
	#userinput {
		border: none;
		background-color: inherit;
		padding: 0;
		color: inherit;
		height: 100px;
	}
	#results {
		height: fit-content;
		overflow: hidden;
	}
	.print {
		color: #000000;
		display: block;
	}
	content {
		margin-top: 0;
	}
	.red {
		color: inherit;
	}
	h1 {
		margin-bottom: 10px;
	}
}
</style>
`;
document.body.innerHTML = `
<div class="print"><h1>artificial idiot results</h1><span>prompt:</span></div>
<div id="header"><p class="dont-print">artificial idiot<a class="header-button" href="https://github.com/qwertyy-dev/ai/blob/main/README.md">about</a><a class="header-button" href="https://github.com/sillybreakfast/ai">github</a><a class="header-button" href="https://github.com/sillybreakfast">creator</a></p></div>
<content>
<div>
<div id="prompt-div">
<textarea id="userinput"></textarea>
<button id="submit" onclick="ai();" class="dont-print">submit</button>
</div>
<div id="results-div">
<h1 class="dont-print">results</h1>
<ul id="results"></ul>
<button onclick="print();" class="dont-print">print</button>
</div>
</div>
</content>
<footer class="dont-print"><a href="https://github.com/qwertyy-dev/ai"><img id="github-link" src="github-mark-white.svg" alt="github"></a><span>updata ` + updata.toString() + '</span><span>en (us)</span><span></span></footer>';

let urlprompt = new URLSearchParams(window.location.search).get("prompt"),

inputelement = document.getElementById("userinput");
inputelement.focus();

if (urlprompt !== null) {
	inputelement.value = urlprompt;
	ai();
}

if (window.location.href.includes("#fun")) {
	document.body.classList.add("fun");
}

inputelement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
		inputelement.blur();
		ai();
    }
});

document.body.addEventListener("keydown", function(event) {
	if (event.key !== "Enter") {
		inputelement.focus();
	}
});

function ai() {
	// thanks, stack overflow
	let refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?prompt=" + inputelement.value.replace(/\%/g, "%25").replace(/\`/g, "%60").replace(/\!/g, "%21").replace(/\@/g, "%40").replace(/\#/g, "%23").replace(/\$/g, "%24").replace(/\^/g, "%5E").replace(/\&/g, "%26").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\=/g, "%3D").replace(/\+/g, "%2B").replace(/\{/g, "%7B").replace(/\}/g, "%7D").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\|/g, "%7C").replace(/\\/g, "%5C").replace(/\:/g, "%3A").replace(/\;/g, "%3B").replace(/\'/g, "%27").replace(/\,/g, "%2C").replace(/\?/g, "%3F").replace(/\//g, "%2F");
	window.history.pushState({ path: refresh }, "", refresh);

	if (inputelement.value === "") {
		document.body.classList.remove("answer");
		return;
	} else {
		document.body.classList.add("answer");
	}

	let
	resultsdiv = document.getElementById("results"),
	userinput = " " + inputelement.value.toLowerCase();

	resultsdiv.innerHTML = "";

	for (let i = 0; i < data.length; i++) {
		if (userinput.includes(data[i][0]+" ") || userinput.includes(" "+data[i][0]) || userinput === data[i][0]) {
			for (let j = 0; j < userinput.split(data[i][0]).length-1; j++) {
				resultsdiv.innerHTML += "<li>" + data[i][1].join("</li><li>") + "</li>";
			}
		}
	}

	if (!resultsdiv.innerHTML.includes("<li>")) {
		resultsdiv.innerHTML = "<span class='red'>no results!</span>"
	}
}
