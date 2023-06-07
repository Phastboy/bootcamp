const os=require('os');

//info about current user
console.log(os.userInfo());

//the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs={
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem()
}
console.log(currentOs);
