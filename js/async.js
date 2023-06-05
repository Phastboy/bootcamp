let stocks={
  fruits:["strawberry","grapes","banana","apple"],
  liquids: ["water","ice"],
  holders: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
}

let shopIsOpened=true;

function time(ms) {
  return new Promise((resolve, reject)=>{
    shopIsOpened? setTimeout(resolve, ms) 
      : 
      console.log('shop is closed ')
  });
};

async function kitchen(){
  try{
    
    await time(2000)
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0000)
    console.log('production has started');

    await time(2000)
    console.log('fruit is chopped');

    await time(1000)
    console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);

    await time(1000)
    console.log('start the machine ')

    await time(2000)
    console.log(`iced cream is contained in the ${stocks.holders[2]}`)

    await time(3000)
    console.log(`${stocks.toppings[1]} was selected as toppings`)


    await time(1000)
    console.log('iced cream is served')
  }
  catch(error){
    console.log('customer left', error);
  }
  finally{
    console.log('day ended, shop is closed ');
  }
}

kitchen();