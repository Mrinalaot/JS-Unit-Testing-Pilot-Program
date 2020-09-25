const game = require('../src/game');
const chai = require('chai');


describe('Questions', () => {
    it('a test for the case of TIE', () => {
        let winner = game('paper', 'paper');
        chai.expect(winner).to.be.eq(0);
    });

    it('couple of tests for [rock, paper] and [paper, rock]', () => {
        let winner = game('paper', 'rock');
        chai.expect(winner).to.be.eq(1);
        winner = game('rock', 'paper');
        chai.expect(winner).to.be.eq(2);
    });

    it('couple of tests for [paper, scissors] and [scissors, paper]', () => {
        let winner = game('paper', 'scissors');
        chai.expect(winner).to.be.eq(2);
        winner = game('scissors', 'paper');
        chai.expect(winner).to.be.eq(1);
    });

    it('couple of tests for [scissors, rock] and [rock, scissors]', () => {
        let winner = game('scissors', 'rock');
        chai.expect(winner).to.be.eq(2);
        winner = game('rock', 'scissors');
        chai.expect(winner).to.be.eq(1);
    });

});
