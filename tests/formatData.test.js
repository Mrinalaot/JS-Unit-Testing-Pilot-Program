const format = require('../src/formatData');
const chai = require('chai');

describe('Questions', () => {

    it('3 validation', () => {
        let data = format(null);
        chai.expect(data).to.be.eq(undefined);

        data = format('not an array');
        chai.expect(data).to.be.eq(undefined);

        data = format([]);
        chai.expect(data).to.be.eq(undefined);
    });

    it('validate the default initializations by map', () => {
        let data = format([{worngData: true}]);
        chai.expect(data).to.have.deep.include({
            name: "default name",
            value: 0
        });
    });

    it('validate filter condition', () => {
        let data = format([{name: 'Mrinal', value: 999 }, {name: "Mohit", value: 1111}]);
        chai.expect(data).to.have.deep.include({name: 'Mrinal', value: 999 });
        chai.expect(data).not.to.have.deep.include({name: "Mohit", value: 1111});
    });

});
