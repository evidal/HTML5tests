var pos_x = 0;
var pos_y = 0;
var command = { 
	    up: false,
	    down: false,
	    left: false,
	    right: false
	};

var stop_zangief_img = new Image(); stop_zangief_img.src = "images/zangief/Zangief/Zangief_499.png";
var walk_zangief_img1 = new Image(); walk_zangief_img1.src = "images/zangief/Zangief/Zangief_50.png";
var walk_zangief_img2 = new Image(); walk_zangief_img2.src = "images/zangief/Zangief/Zangief_51.png";
var walk_zangief_img3 = new Image(); walk_zangief_img3.src = "images/zangief/Zangief/Zangief_52.png";
var walk_zangief_img4 = new Image(); walk_zangief_img4.src = "images/zangief/Zangief/Zangief_53.png";
var walk_zangief_img5 = new Image(); walk_zangief_img5.src = "images/zangief/Zangief/Zangief_54.png";
var walk_zangief_img6 = new Image(); walk_zangief_img6.src = "images/zangief/Zangief/Zangief_55.png";
var walk_zangief_img7 = new Image(); walk_zangief_img7.src = "images/zangief/Zangief/Zangief_56.png";
var walk_zangief_img8 = new Image(); walk_zangief_img8.src = "images/zangief/Zangief/Zangief_57.png";
var walk_zangief_img9 = new Image(); walk_zangief_img9.src = "images/zangief/Zangief/Zangief_58.png";
var walk_zangief_img10 = new Image(); walk_zangief_img10.src = "images/zangief/Zangief/Zangief_59.png";

var frame_nbr = 1;
var sprites_zangief = [
stop_zangief_img,
walk_zangief_img1,
walk_zangief_img2,
walk_zangief_img3,
walk_zangief_img4,
walk_zangief_img5,
walk_zangief_img6,
walk_zangief_img7,
walk_zangief_img8,
walk_zangief_img9,
walk_zangief_img10
];

$(document).ready(function(){
	setInterval(draw, 20);	
	$(document).keydown(onKeyDown);
	$(document).keyup(onKeyUp);	
 });

var img;
var run = false;
function changeSprite() {	
	if(run) {
		img = sprites_zangief[frame_nbr];
		if(frame_nbr < 10) {
			frame_nbr++;
		} else {
			frame_nbr = 1;
		}
		setTimeout(changeSprite, 100);
	}
}

function draw() {
	var canvas = document.getElementById("main");
	var ctx = canvas.getContext("2d");
	// Blank
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.fillRect (0, 0, 800, 600);
	
	// Compute Position
	if(command.up) pos_y = pos_y - 1; 
	if(command.down) pos_y = pos_y + 1;
	if(command.left) pos_x = pos_x - 1;
	if(command.right) pos_x = pos_x + 1;
	
	if(!(command.up || command.down || command.left || command.right)) {
		img = sprites_zangief[0];
		frame_nbr = 1;
		run = false;
	} else {
		if(!run) {
			run = true;
			changeSprite();
		}				
	}
	
	// Sprite Drawing
	ctx.drawImage(img,pos_x,pos_y);
}

function onKeyDown(event) {
	switch(event.keyCode) {
	case 38: // Up
		command.up = true;
		break;
	case 40: // Down
		command.down = true;
		break;
	case 37: // Left
		command.left = true;
		break;
	case 39: // Right
		command.right = true;
		break;
	default:
		//nothing
	}	
	return false;
}

function onKeyUp(event) {
	switch(event.keyCode) {
	case 38: // Up
		command.up = false;
		break;
	case 40: // Down
		command.down = false;
		break;
	case 37: // Left
		command.left = false;
		break;
	case 39: // Right
		command.right = false;
		break;
	default:
		//nothing
	}	
	return false;
}