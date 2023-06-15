const EmitEvent=require('events');

const customEmitter=new EmitEvent();

customEmitter.on('response', (name, id)=>{
	console.log(`data received: ${name} with id: ${id}`)
});
customEmitter.on('response', ()=>{
	console.log(`some other function`)
});
customEmitter.emit('response', 'Anuoluwapo', 35)
