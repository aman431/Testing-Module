module.exports = {
	sayHello: function(){
		return 'Hello';
	},

	addNumber: function(a,b){
		return a+b;
	},
	isEven: function(n){
		if(n%2===0){
			return 'even';
		}
	}
}
