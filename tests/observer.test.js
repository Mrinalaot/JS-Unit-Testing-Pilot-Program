"use strict";

const Observer = require('../src/observer');
var chai = require('chai');

const spies = require('chai-spies');

chai.use(spies);

describe('Observer', () => {
    it('should have working instance', () => {
        var observer = new Observer();
        chai.expect(observer).to.be.instanceOf(Observer);
    });

    it('should have items and observers with length zero after creating instance', () => {
        var observer = new Observer();
        chai.expect(observer.items.length).to.eq(0);
        chai.expect(observer.observers.length).to.eq(0);
    });

    it('should call subscribe with a callback ', () => {
        var observer = new Observer();
        const spy = chai.spy.on(observer, 'subscribe');
        observer.subscribe(() => {
            console.log("subscribed");
        });
        chai.expect(spy).to.have.been.called();
    });

    it('should have incremented length of subscribe once subscribe function is called.', () => {
        var observer = new Observer();
        observer.subscribe(() => {
            console.log("subscribed");
        });
        observer.subscribe(() => {
            console.log("subscribed Again");
        });
        chai.expect(observer.observers.length).to.eq(2);
    });

    it('should have called push and pop to add or remove items AND Length of items should change on calling pup and pop', () => {
        var observer = new Observer();
        const spy1 = chai.spy.on(observer, 'push');
        const spy2 = chai.spy.on(observer, 'pop');
        observer.subscribe(() => {});
        chai.expect(observer.items.length).to.be.eq(0);
        observer.push(99);
        observer.push(100);
        chai.expect(observer.items.length).to.be.eq(2);
        observer.pop();
        chai.expect(observer.items).to.be.eq(100);
        chai.expect(spy1).to.have.been.called();
        chai.expect(spy2).to.have.been.called();
    });



});