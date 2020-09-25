"use strict";

const Queue = require('../src/queue');
var chai = require('chai');

const spies = require('chai-spies');

chai.use(spies);

describe('queue', () => {
    it('should have working instance', () => {
        var q = new Queue();
        chai.expect(q).to.be.instanceOf(Queue);
    });

    it('should have a length of zero on creation', () => {
        var q = new Queue();
        chai.expect(q.size()).to.eq(0);
    });

    it('should check if add function is being called ', () => {
        var q = new Queue();
        const spy = chai.spy.on(q, 'add');
        q.add(1);
        chai.expect(spy).to.have.been.called();
    });

    it('should increase size in case of enqueue', () => {
        var q = new Queue();
        q.add(1);
        q.add(1);
        chai.expect(q.size()).to.equal(2);
    });

    it('should have same length as many times add is being triggerd', () => {
        var q = new Queue();
        q.add();
        q.add();
        chai.expect(q.size()).to.equal(0);
    });

    it('should remove what was added', () => {
        var q = new Queue();
        q.add(2);
        q.add(2);
        q.remove(2);
        chai.expect(q.size()).to.equal(1);
    });

    it('should check if remove function is being called when data is being removed', () => {
        var q = new Queue();
        const spy = chai.spy.on(q, 'remove');
        q.add(23);
        q.remove(23);
        chai.expect(spy).to.have.been.called();
    });

    it('Two instances should be distinct from each other', () => {
        var q1 = new Queue();
        q1.add(23);
        var q2 = new Queue();
        q2.add(23);
        q2.remove(23);
        chai.expect(q1).not.to.be.eq(q2);
    });
});