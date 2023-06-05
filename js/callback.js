let stocks={
  fruits:["strawberry","grapes","banana","apple"],
  liquids: ["water","ice"],
  holders: ["cone","cup","stick"],
  toppings: ["chocolate","peanuts"]
}

let order=(fruit_name, call_production)=>{
  setTimeout(()=>{
    console.log(`${stocks.fruits[fruit_name]} was selected`);
    call_production();
  },2000);
}

let production=()=>{
  
  setTimeout(()=>{
    console.log('production has started ');
    
    setTimeout(()=>{
      console.log('fruit has been chopped ');
      
      setTimeout(()=>{
        console.log(`${stocks.liquids[0]} and ${stocks.fruits[1]} was added`);
        
        setTimeout(()=>{
          console.log('the machine has started ');
          
          setTimeout(()=>{
            console.log(`iced cream was placed in the ${stocks.holders[1]}`);
            
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} was added as toppings`);
              
              setTimeout(()=>{
                console.log('serve iced cream');
              },2000);
              
            },3000);
            
          },2000);
          
        },1000);
        
      },1000);
      
    },2000);
    
  },0000);
}

order(0, production)
console.log('iced cream production')