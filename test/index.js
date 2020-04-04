var expect = require('chai').expect,
	should = require('chai').should(),
	logger = require('../index').console;

describe('#logger', function() {
	it('should returns undefined on invoking log function', function() {
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
	it('SHOULD ABORT ANY COMMIT UNTIL YOU FIX THISFILE -> ./test/index.js', function() {
		Number(1).should.equal(0);
	})
});

// <<<=========