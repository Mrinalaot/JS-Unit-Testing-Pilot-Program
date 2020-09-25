const Questions = require('../src/questions');
const chai = require('chai');
const spies = require('chai-spies');
var sinon = require('sinon');
chai.use(spies);

describe('Questions', () => {
    beforeEach(() => {
        sinon.restore();
    });

    it('should Create an instance and check for constructor initializations', () => {
        let q = new Questions();
        chai.expect(q).to.be.instanceOf(Questions);
        chai.expect(q.questions).to.have.property('easy');
        chai.expect(q.questions).to.have.property('hard');
        chai.expect(q.counters).to.deep.include({ easy: 0, hard: 0 });
    });

    it('should Create couple of tests for the method getEasyQuestion for the if case and the other case', () => {
        let q = new Questions();
        chai.expect(q.getEasyQuestion()).to.deep.include({ q: 'value of 2+2?', a: 4 });
        chai.expect(q.getEasyQuestion()).to.deep.include({ q: 'number of sides of a triangle?', a: 3 });
        chai.expect(q.getEasyQuestion()).to.be.null;
    });

    it('should Create couple of tests for the method getHardQuestion for the if case and the other case', () => {
        let q = new Questions();
        chai.expect(q.getHardQuestion()).to.deep.include({ q: 'what is the diameter of earth?', a: '7,917.5 miles' });
        chai.expect(q.getHardQuestion()).to.be.null;
    });

    it('should Create couple of tests for the method getQuestion with inputs hard', () => {
        let q = new Questions();
        const mockHardData = {
            q: 'Dummy Hard Question',
            a: 'Dummy Hard Answer'
        };
        const stub = sinon.stub(q, 'getHardQuestion').returns(mockHardData);
        chai.expect(q.getQuestion('hard')).to.deep.include(mockHardData);
        chai.expect(stub.calledOnce).to.be.true;
    });

    it('should Create couple of tests for the method getQuestion with inputs easy ', () => {
        let q = new Questions();
        const mockEasyData = {
            q: 'Dummy Soft Question',
            a: 'Dummy Soft Answer'
        };
        const stub = sinon.stub(q, 'getEasyQuestion').returns(mockEasyData);
        chai.expect(q.getQuestion('easy')).to.deep.include(mockEasyData);
        chai.expect(stub.calledOnce).to.be.true;
    });

    it('should Create couple of tests for the method getQuestion with deafult inputs ', () => {
        let q = new Questions();
        const stub = sinon.stub(q, 'getEasyQuestion').returns(mockEasyData);
        chai.expect(q.getQuestion()).to.deep.include(mockEasyData);
        chai.expect(stub.calledOnce).to.be.true;
    });


});