// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Game variables
let playerX = 50;
let playerY = 50;
let coinX = 100;
let coinY = 100;
let obstacleX = 200;
let obstacleY = 200;
let score = 0;

// Game loop
function update() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the background
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

	// Draw the player
	ctx.fillStyle = '#ff0000';
	ctx.fillRect(playerX, playerY, 20, 20);

	// Draw the coin
	ctx.drawImage(coinImage, coinX, coinY, 20, 20);

	// Draw the obstacle
	ctx.drawImage(obstacleImage, obstacleX, obstacleY, 20, 20);

	// Update the score
	ctx.font = '24px Arial';
	ctx.fillStyle = '#000';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText(`Score: ${score}`, 10, 10);

	// Update the game state
	playerX += 1;
	if (playerX > canvas.width) {
		playerX = 0;
	}

	// Check for collisions
	if (checkCollision(playerX, playerY, coinX, coinY)) {
		score++;
		coinX = Math.floor(Math.random() * (canvas.width - 20));
		coinY = Math.floor(Math.random() * (canvas.height - 20));
	}

	if (checkCollision(playerX, playerY, obstacleX, obstacleY)) {
		alert('Game Over!');
		location.reload();
	}
}

// Utility function to check for collisions
function checkCollision(x1, y1, x2, y2) {
	if (x1 + 20 > x2 && x1 < x2 + 20 && y1 + 20 > y2 && y1 < y2 + 20) {
		return true;
	}
	return false;
}

// Load the game assets
const backgroundImage = new Image();
backgroundImage.src = 'images/background.png';

const coinImage = new Image();
coinImage.src = 'images/coin.png';

const obstacleImage = new Image();
obstacleImage.src = 'images/obstacle.png';

// Start the game loop
setInterval(update, 16);
