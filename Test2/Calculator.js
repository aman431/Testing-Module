module.exports = {
	Add: function(a,b){
		return (+a)+(+b);
		/*const readline = require('readline');
		const r1 = readline.createInterface({
			input: process.stdin,
			output: process,stdout
		});

		r1.question("Enter the First Number", (num1) =>{
			r1.quetion("Enter the Second Number",(num2) =>{
				let result = num1+num2;
				return result
			});
		});	*/
	},
	Sub: function(a,b){
		return a-b;
	},
	Mult: function(a,b){
		return a*b;
	},
	Div: function(a,b){
		return a/b;
	}
}
