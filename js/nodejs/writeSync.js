const {writeFileSync}=require('fs');

for (let i=0; i<1000; i++){
	writeFileSync('./src/big.txt', `hello there ${i}\n`, {flag: 'a'} )
}
