const generator = require('generate-password');

let password = generator.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);