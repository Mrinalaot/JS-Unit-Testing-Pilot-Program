const Dog = require('../src/dog');
const Animal = require('../src/animal');
const chai = require('chai');

describe('Dog', () => {
    it('should have working instance', () => {
        let dog = new Dog();
        chai.expect(dog).to.be.instanceOf(Animal);
        chai.expect(dog).to.be.instanceOf(Dog);
    });

    it('should have all the features and functions of Parent class', () => {
        let dog = new Dog("golden");
        dog.run(55);
        chai.expect(dog.speed).to.eq(55);
        dog.stop();
        chai.expect(dog.speed).to.eq(0);
        chai.expect(dog.name).to.equals("golden");
    });

    it('should have status check if animal is running or not after calling isRunning.', () => {
        let dog = new Dog("golden");
        dog.run(100);
        chai.expect(dog.isRunning()).to.true;
        dog.stop();
        chai.expect(dog.isRunning()).to.false;
        chai.expect(dog.hide()).to.be.includes("golden hides!");
    });

});