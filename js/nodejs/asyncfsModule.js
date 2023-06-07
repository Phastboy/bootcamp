const {readFile, writeFile}=require('fs');


readFile('./src/01.txt', 'utf8', (err, result)=>{
	if (err){
		console.log(err)
	}
	let first=result;
	readFile('./src/02.txt', 'utf8', (err, result)=>{
		if(err){
			console.log(err)
		}
		let second=result;
		writeFile('./src/asyncResult.txt', `the result: ${first}, ${second}`, ()=>{
			err? console.log(err) : console.log(result);
		});
	});
});
