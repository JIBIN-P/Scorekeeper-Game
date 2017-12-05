var button1 = document.querySelectorAll("button")[0];
var button2 = document.querySelectorAll("button")[1];
var button3 = document.querySelectorAll("button")[2];
var textPlayTill = document.querySelector("#playTill");
var h1 = document.querySelectorAll("span")[0];
var h2 = document.querySelectorAll("span")[1];
max = document.querySelector("input");
var maxScore = parseInt(document.querySelector("input").value);
var p1Score = 0;
var p2Score = 0;

max.addEventListener("input", function () {
	maxScore = parseInt(document.querySelector("input").value);  //We can also use the change evenlistener
	textPlayTill.textContent = maxScore;
});

button1.addEventListener("click",function() {
	if (p2Score != maxScore && p1Score < (maxScore - 1)) {
		p1Score += 1;
		h1.textContent = p1Score;
	}
	else if (p1Score == (maxScore -1) && p2Score != maxScore) {
		p1Score++;
		h1.style.color = "green";
		h1.textContent = p1Score;
		h2.textContent = p2Score;
	}
});

button2.addEventListener("click", function() {
	if (p1Score != maxScore && p2Score < (maxScore-1)) {
		p2Score += 1;
		h2.textContent = p2Score;
	}
	else if (p2Score == (maxScore - 1) && p1Score != maxScore) {
		p2Score++;
		h2.style.color = "green";
		h1.textContent = p1Score;
		h2.textContent = p2Score;
	}
});

button3.addEventListener("click", function() {
	p1Score = 0;
	p2Score = 0;
	h1.style.color = "black";
	h2.style.color = "black";
	h1.textContent = p1Score;
	h2.textContent = p2Score;
});