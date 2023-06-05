let stocks={
  fruits:["strawberry","grapes","banana","apple"],
  liquids: ["water","ice"],
  holders: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
}

let shopIsOpened=true;

let order = (time, work)=>{
  return new Promise((resolve, reject)=>{
    shopIsOpened? setTimeout(()=>resolve(work()),time) 
      : 
      reject(console.log('shop is closed'));
  });
};

order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
  return order(0000,()=>
    console.log('production has started '));
})

.then(()=>{
  return order(2000, ()=>
    console.log('the fruit was chopped'));
})

.then(()=>{
  return order(1000, ()=>
    console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`));
})

.then(()=>{
  return order(1000, ()=>
    console.log('start the machine '));
})

.then(()=>{
  return order(2000, ()=>
    console.log(`iced cream was placed in ${stocks.holders[1]}`));
})

.then(()=>{
  return order(3000, ()=>
    console.log(`${stocks.toppings[0]} was added as toppings`));
})

.then(()=>{
  return order(1000, ()=>
    console.log('iced cream was served'));
})

.catch(()=>{
  console.log('customer left')
})

.finally(()=>{
  console.log('day ended, shop is closed ')
});