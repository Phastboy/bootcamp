const EmitEvent=require('events');

const customEmitter=new EmitEvent();

customEmitter.on('response', ()=>{
	console.log(`data received`)
});
customEmitter.emit('response')
