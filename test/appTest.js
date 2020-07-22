const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumber = require('../app').addNumber;
const app = require('../app');
describe('App',function(){
	it('app should return something',function(){
		let result = app.sayHello();
		assert.equal(result,'Hello');
	});

	it('Check the type of sayHello',function(){
		let result = app.sayHello();
		assert.typeOf(result,'string');
	});

	it('Addition of Two Number',function(){
		let result = app.addNumber(5,5);
		assert.equal(result,10);
	});

	it('Check a nunber is Greater or not',function(){
		let result = app.addNumber(2,3);
		assert.isBelow(result, 6);
	});

	it('Check a number is lessthan or Not' ,function(){
		let result = app.addNumber(5,5);
		assert.isAbove(result,5);
	});

	it('Check the type of AddNumber',function(){
		let result = app.addNumber();
		assert.typeOf(result,'Number');
	});

	it('Check if Even' , function(){
		let result = app.isEven(10);
		assert.equal(result,'even');
	});
});
