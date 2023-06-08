const http=require('http');

http.createServer((req,res)=>{
	req.url==='/'? res.end('<h1>Homepage</h1>') : res.end('<h1>Oops!</h1><p>we can&apos;t find the page you&apos;re looking for</p><br/><a href="/">back to home</a>')
}).listen(5000)
