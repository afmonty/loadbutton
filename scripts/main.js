//listen for click on button

var loadBtn = document.querySelector("button");

loadBtn.addEventListener("click", function(){
	document.querySelector("button").innerHTML = "Loading...";
	setTimeout(submitButton, 4000);
	
	
});

//
	



function submitButton() {
	
	document.querySelector('button').innerHTML = "Submit";

};

