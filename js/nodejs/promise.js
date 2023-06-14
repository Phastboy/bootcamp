const {readFile}=require('fs');


const getText=(path)=>{
	return new Promise((reject, resolve)=>{
		readFile(path, 'utf8', (err, data)=>{
			err? reject(err) : resolve(data);
		})
	})
}

getText('./src/01.txt')
	.then((result)=>console.log(result))
	.catch((err)=>console.log(err))
