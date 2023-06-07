const express=require("express");
const app=express();

app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
	res.send(`
	<form action="/answer" method="POST">
		<label for="skyColor">What is the color of the sky on a bright sunny day?</label>
		<input name="skyColor" autocomplete="off"/>
		<input type="submit"/>
	</form>
		`);
});
app.post('/answer', (req, res)=>{
	req.body.skyColor.toUpperCase()=="BLUE"? res.send(`
	<p>Congrats, that$apos;s the correct answer</p>
	<a href="/">Back to home page</a>
	`) : res.send(`
	<p>Sorry, that&apos;s incorrect</p>
	<a href="/">Try again</a>
		`)
});
app.get('/answer', (req, res)=>{
	res.send('Are you lost?, there is nothing here');
});
app.listen(2023);
console.log('phast inc');
