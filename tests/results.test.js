const Results = require('../src/results');
const chai = require('chai');

describe('Questions', () => {

    it('getTopScore with valid case(default)', () => {
        let results = new Results();
        chai.expect(results.getTopScore()).to.be.eq(10);
    });

    it('tests for getTopScore to handle error when data not ', () => {
        let results = new Results();
        results.setData([]);
        try{
            results.getTopScore();
        }catch(e){
            chai.expect(e).to.be.equals("data not set");
        }
    });

    it('tests for getLeastScore with valid case(default)', () => {
        let results = new Results();
        chai.expect(results.getLeastScore()).to.be.eq(8);
    });

    it('tests for getLeastScore to handle error when data not ', () => {
        let results = new Results();
        results.setData([]);
        try{
            results.getLeastScore();
        }catch(e){
            chai.expect(e).to.be.equals("data not set");
        }
    });

    it('getTopScore with valid case(default)', () => {
        let results = new Results();
        results.setData([
            { id: 1, score: 8 },
            { id: 2, score: 11 },
            { id: 3, score: 5 }
        ]);
        chai.expect(results.getTopScore()).to.be.eq(11);
        chai.expect(results.getLeastScore()).to.be.eq(5);
    });

});