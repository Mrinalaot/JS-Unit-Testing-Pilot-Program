const Animal = require('../src/animal');
var chai = require('chai');

const spies = require('chai-spies');

chai.use(spies);

describe('Animal', () => {
    it('should have working instance', () => {
        var cat = new Animal("cat");
        chai.expect(cat).to.be.instanceOf(Animal);
    });

    it('should have zero speed with initial name set when instance created', () => {
        var cat = new Animal("meuu");
        chai.expect(cat.speed).to.eq(0);
        chai.expect(cat.name).to.equals("meuu");
    });

    it('should have speed after calling function run with status string.', () => {
        var cat = new Animal("meuu");
        cat.run(100);
        chai.expect(cat.speed).to.eq(100);
        chai.expect(cat.status).to.be.includes("meuu runs with speed 100");
    });

    it('should stop animal once stop is being call with proper status', () => {
        var cat = new Animal("meuu");
        cat.run(100);
        cat.stop();
        chai.expect(cat.status).to.be.includes("meuu stands still.");
    });

});