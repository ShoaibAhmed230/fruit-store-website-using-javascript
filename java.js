//store value

let budget = 0;
let total = 0;
let balance = 0;
let quantityOfApple = 0;
let quantityOfBanana = 0;
let quantityOfMango = 0;
let quantityOfOrange = 0;
let priceOfApple = 10;
let priceOfBanana = 5;
let priceOfMango = 12;
let priceOfOrange = 17;
let totalAppleAmount = 0;
let totalBananaAmount = 0;
let totalMangoAmount = 0;
let totalOrangeAmount = 0;
let totalFruitOfAmount = 0;




function fruitInc(fruit){
    console.log(fruit);
    if(fruit==1){
        quantityOfApple++;
        budget = document.querySelector(".max-budget").value;
        appleAmount = quantityOfApple*priceOfApple;
    
        
                document.querySelector(".balance").innerHTML=budget-appleAmount;
                document.querySelector(".countOfApple").innerHTML=quantityOfApple;
                document.querySelector(".total").innerHTML=appleAmount;
                totalAppleAmount = appleAmount;
        

        console.log(budget);
        console.log(appleAmount);

    }
    if(fruit==2){
        quantityOfBanana++;
        budget = document.querySelector(".max-budget").value;
        bananaAmount = quantityOfBanana*priceOfBanana;
    
    
            document.querySelector(".balance").innerHTML=budget-bananaAmount;
            document.querySelector(".countOfBanana").innerHTML=quantityOfBanana;
            document.querySelector(".total").innerHTML=bananaAmount;
            totalBananaAmount = bananaAmount;
    

        console.log(budget);
        console.log(bananaAmount);
        
    }
    if(fruit==3){
        quantityOfMango++;
        budget = document.querySelector(".max-budget").value;
        mangoAmount = quantityOfMango*priceOfMango;
    
      
    
            document.querySelector(".balance").innerHTML=budget-mangoAmount;
            document.querySelector(".countOfMango").innerHTML=quantityOfMango;
            document.querySelector(".total").innerHTML=mangoAmount;
            totalMangoAmount = mangoAmount;
    
    
        console.log(budget);
        console.log(mangoAmount);
        
    }
        if(fruit==4){
        quantityOfOrange++;
        budget = document.querySelector(".max-budget").value;
        orangeAmount = quantityOfOrange*priceOfOrange;
    
    
            document.querySelector(".balance").innerHTML=budget-orangeAmount;
            document.querySelector(".countOfOrange").innerHTML=quantityOfOrange;
            document.querySelector(".total").innerHTML=orangeAmount;
            totalOrangeAmount = orangeAmount;

    
    
        console.log(budget);
        console.log(orangeAmount);
        
    }
    
    totalFruitOfAmount = totalAppleAmount+totalMangoAmount+totalBananaAmount+totalOrangeAmount;
    console.log("totalAmount"+totalFruitOfAmount)
    if(budget >= totalFruitOfAmount){
        document.querySelector(".total").innerHTML=totalFruitOfAmount;  

    }else{
        alert("you cannot buy more");
      
    }

    let remainingBalance = budget-totalAppleAmount-totalMangoAmount-totalBananaAmount-totalOrangeAmount;
    document.querySelector(".balance").innerHTML= remainingBalance;

}











    function fruitDec(fruit){
    if(fruit==1){
        if(quantityOfApple>0){

            quantityOfApple--;
            budget = document.querySelector(".max-budget").value;
            appleAmount = quantityOfApple*priceOfApple;
        //    if(budget >= appleAmount){
               
            document.querySelector(".balance").innerHTML=budget-appleAmount;    
            document.querySelector(".countOfApple").innerHTML=quantityOfApple;
            document.querySelector(".total").innerHTML=appleAmount;
       
        //    }
        //    else{
              
        //    }
           console.log(budget);
            console.log(appleAmount);
        }
    }
  

    if(fruit==2){
     if(quantityOfBanana>0){

         quantityOfBanana--;
         budget = document.querySelector(".max-budget").value;
         bananaAmount = quantityOfBanana*priceOfBanana;
        // if(budget >= bananaAmount){
            
         document.querySelector(".balance").innerHTML=budget-bananaAmount;    
         document.querySelector(".countOfBanana").innerHTML=quantityOfBanana;
         document.querySelector(".total").innerHTML=bananaAmount;
    
        // }
        // else{
           
        // }
        console.log(budget);
         console.log(bananaAmount);
      }
    }

    if(fruit==3){
        if(quantityOfMango>0){
   
            quantityOfMango--;
            budget = document.querySelector(".max-budget").value;
            mangoAmount = quantityOfMango*priceOfMango;
        //    if(budget >= mangoAmount){
               
            document.querySelector(".balance").innerHTML=budget-mangoAmount;    
            document.querySelector(".countOfMango").innerHTML=quantityOfMango;
            document.querySelector(".total").innerHTML=mangoAmount;
       
        //    }
        //    else{
              
        //    }
           console.log(budget);
            console.log(mangoAmount);
         }
       }

       if(fruit==4){
        if(quantityOfOrange>0){
   
            quantityOfOrange--;
            budget = document.querySelector(".max-budget").value;
            orangeAmount = quantityOfOrange*priceOfOrange;
        //    if(budget >= orangeAmount){
            
            document.querySelector(".balance").innerHTML=budget-orangeAmount;    
            document.querySelector(".countOfOrange").innerHTML=quantityOfOrange;
            document.querySelector(".total").innerHTML=orangeAmount;
       
        //    }
        //    else{
              
        //    }
           console.log(budget);
            console.log(orangeAmount);
         }
       }
       let totalFruitOfAmount = appleAmount+mangoAmount+bananaAmount+orangeAmount;
        document.querySelector(".total").innerHTML=totalFruitOfAmount;

        let remainingBalance = budget+totalAppleAmount+totalMangoAmount+totalBananaAmount+totalOrangeAmount;
        document.querySelector(".balance").innerHTML=remainingBalance; 
}
