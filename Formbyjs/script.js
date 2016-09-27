function validateForm(){
	var name = document.forms["myForm"]["name"].value;
	if (name == null || name == "") {
		alert("Full name is required");
		return false;
		};
	
}

(function(){

var speed=10,
moveBox = function (moveBy){
	var el=document.getElementById("box"),
		left = el.offsetLeft;


	if ((moveBy > 0 && left > 964) || (moveBy < 0 && left < 40)){
		clearTimeout(timer);
		timer = setInterval(function() {
			moveBox(moveBy * -1);
		},speed);
	}
	el.style.left = left + moveBy + "px";
};
var timer = setInterval(function (){
	moveBox(3);
	}, speed);

}());

