const {readFile, writeFile}=require('fs').promises;


const start= async()=>{
	try {
		const first= await readFile('./src/01.txt', 'utf8')
		const second= await readFile('./src/02.txt', 'utf8')
		await writeFile('./src/asyncWrite.txt',`Result: ${first} ${second}`, {flag:'a'})
		console.log(first, second)
	}catch (err){
		console.log(err)
	}
}
start()
