var expect = require('chai').expect,
	should = require('chai').should(),
	logger = require('../index').console;

describe('#logger', function() {
	it('can log some message and returns undefined', function() {
		expect(logger.log('some message')).to.be.undefined
	});

	it('should have a debug function', function() {
		logger.should.have.property('debug');
		(typeof logger.debug).should.equal('function');
	});

	// ... etc.

});


// DELETE OR COMMENT THE FOLLOWING describe =========>>>

describe('#git pre-commit hook', function() {
	it('should abort any commit until you fix ./test/index.js', function() {
		Number(1).should.equal(0);
	})
});

// <<<=========