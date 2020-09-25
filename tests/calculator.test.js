"use strict";

const calculator = require('../src/calculator');
var chai = require('chai');

const spies = require('chai-spies');

chai.use(spies);

describe('Calculator', () => {

    it('should call add function and return sum', () => {
        const spy = chai.spy.on(calculator, 'add');
        chai.expect(calculator.add(2, 3)).to.be.eq(5);
        chai.expect(spy).to.have.been.called();
    });

    it('should call add function with wrong data and returns undefined', () => {
        chai.expect(isNaN(calculator.add(2, undefined))).to.be.true;
    });

    it('should call subtract function and return sum', () => {
        const spy = chai.spy.on(calculator, 'subtract');
        chai.expect(calculator.subtract(5, 3)).to.be.eq(2);
        chai.expect(spy).to.have.been.called();
    });

    it('should call subtract function with wrong data and returns undefined', () => {
        chai.expect(isNaN(calculator.subtract(undefined, 3))).to.be.true;
    });

    it('should call multiply function and return sum', () => {
        const spy = chai.spy.on(calculator, 'multiply');
        chai.expect(calculator.multiply(5, 3)).to.be.eq(15);
        chai.expect(spy).to.have.been.called();
    });

    it('should call multiply function with wrong data and returns undefined', () => {
        chai.expect(isNaN(calculator.multiply(undefined, 3))).to.be.true;
    });

    it('should call divide function and return sum', () => {
        const spy = chai.spy.on(calculator, 'divide');
        chai.expect(calculator.divide(6, 3)).to.be.eq(2);
        chai.expect(spy).to.have.been.called();
    });

    it('should call divide function with wrong data and returns undefined', () => {
        chai.expect(isNaN(calculator.divide(4, undefined))).to.be.true;
    });

});