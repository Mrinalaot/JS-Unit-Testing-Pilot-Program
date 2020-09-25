module.exports = function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return 0; // Its a Tie
    }
    if (player1 === 'rock' && player2 === 'paper') {
        return 2; // Player 2 wins!
    }
    if (player1 === 'paper' && player2 === 'scissors') {
        return 2; // Player 2 wins!
    }
    if (player1 === 'scissors' && player2 === 'rock') {
        return 2; // Player 2 wins!
    }
    return 1; // Player 1 wins!
}