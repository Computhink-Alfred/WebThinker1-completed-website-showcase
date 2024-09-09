// Define global variables
let canvas, ctx, ballRadius, x, y, dx, dy;

window.onload = () => {
	// get canvas and context
	canvas = document.getElementById('canvasBoard');
	ctx = canvas.getContext('2d');

	// initialize ball properties
	ballRadius = 10;
	x = canvas.width / 2 - ballRadius / 2;
	y = canvas.height / 2 - ballRadius / 2;
	dx = 2;
	dy = -2;

	// start the animation
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	updateCanvas();
}


// function to draw the ball
let drawBall = () => {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

// function to update canvas
let updateCanvas = () => {
	if (document.getElementById("canvasPlay").checked) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBall();

		// check collision with the left or right edge
		if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
			dx = -dx;
		}
		// check collision with the top or bottom edge
		if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
			dy = -dy;
		}

		// update ball's position
		x += dx;
		y += dy;
	}

	// call updateCanvas again at the next frame
	requestAnimationFrame(updateCanvas);
}