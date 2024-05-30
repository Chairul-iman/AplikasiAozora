document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('game-container');
    const catcher = document.getElementById('catcher');
    const ball = document.getElementById('ball');
    const scoreBoard = document.getElementById('score');
    const startButton = document.getElementById('start-button');

    let catcherX = gameContainer.offsetWidth / 2 - catcher.offsetWidth / 2;
    let ballX = Math.random() * (gameContainer.offsetWidth - ball.offsetWidth);
    let ballY = 0;
    let ballSpeedX = 5;
    let ballSpeedY = 3;
    let score = 0;
    let gameRunning = false;

    function updateCatcherPosition(x) {
        if (x < 0) x = 0;
        if (x > gameContainer.offsetWidth - catcher.offsetWidth) x = gameContainer.offsetWidth - catcher.offsetWidth;
        catcher.style.left = x + 'px';
        catcherX = x;
    }

    function updateBallPosition() {
        if (!gameRunning) return;

        ballX += ballSpeedX;
        ballY += ballSpeedY;

        if (ballX <= 0 || ballX >= gameContainer.offsetWidth - ball.offsetWidth) {
            ballSpeedX = -ballSpeedX;
        }

        if (ballY <= 0) {
            ballSpeedY = -ballSpeedY;
        }

        if (ballY + ball.offsetHeight >= gameContainer.offsetHeight - catcher.offsetHeight &&
            ballX + ball.offsetWidth >= catcherX &&
            ballX <= catcherX + catcher.offsetWidth) {
            ballSpeedY = -ballSpeedY;
            score++;
            scoreBoard.textContent = score;
        }

        if (ballY > gameContainer.offsetHeight - ball.offsetHeight) {
            ballY = 0;
            ballX = Math.random() * (gameContainer.offsetWidth - ball.offsetWidth);
            ballSpeedY = 3;
            ballSpeedX = (Math.random() - 0.5) * 6;
            score = 0;
            scoreBoard.textContent = score;
            gameRunning = false;
            startButton.style.display = 'block';
        }

        ball.style.top = ballY + 'px';
        ball.style.left = ballX + 'px';
    }

    function gameLoop() {
        updateBallPosition();
        requestAnimationFrame(gameLoop);
    }

    function handleMouseMove(e) {
        const rect = gameContainer.getBoundingClientRect();
        let x = e.clientX - rect.left;
        updateCatcherPosition(x);
    }

    function handleTouchMove(e) {
        const rect = gameContainer.getBoundingClientRect();
        let x = e.touches[0].clientX - rect.left;
        updateCatcherPosition(x);
    }

    function startGame() {
        score = 0;
        scoreBoard.textContent = score;
        ballX = Math.random() * (gameContainer.offsetWidth - ball.offsetWidth);
        ballY = 0;
        ballSpeedY = 3;
        ballSpeedX = (Math.random() - 0.5) * 6;
        gameRunning = true;
        startButton.style.display = 'none';
    }

    startButton.addEventListener('click', startGame);
    gameContainer.addEventListener('mousemove', handleMouseMove);
    gameContainer.addEventListener('touchmove', handleTouchMove);

    gameLoop();
});
