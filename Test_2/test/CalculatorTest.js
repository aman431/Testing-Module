const assert = require('chai').assert;
const app = require('../Calculator');

describe('Testing a function',function(){
	it('Checking Addition of two number',function(){
		let result = app.Add(8,2);
		assert.equal(result,10);
		assert.isBelow(result,100);
		assert.isAbove(result,0);
		assert.typeOf(result,'Number');
			//r1.close();
	});
	it('Checking Substraction of two number',function(){
		let result = app.Sub(8,2);
		assert.equal(result,6);
		assert.isBelow(result,100);
		assert.isAbove(result,0);
		assert.typeOf(result,'Number');
	});
	it('Checking Muliplication of two number',function(){
		let result = app.Mult(2,8);
		assert.equal(result,16);
		assert.isBelow(result,100);
		assert.isAbove(result,0);
		assert.typeOf(result,'Number');
	});

	it('Checking Division of two number',function(){
		let result = app.Div(8,2);
		assert.equal(result,4);
		assert.isBelow(result,100);
		assert.isAbove(result,0);
		assert.typeOf(result,'Number');
	});	
});
