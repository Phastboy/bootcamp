const {readFileSync, writeFileSync}=require('fs');


const first=readFileSync('./src/01.txt', 'utf8');
const second=readFileSync('./src/02.txt', 'utf8');
console.log(first, second);


writeFileSync(
	'./src/result.txt',
	`the result: ${first}, ${second}`,
);
