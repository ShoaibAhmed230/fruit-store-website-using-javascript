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



//get budget input value 

function submit(){
    budget = document.querySelector('.max-budget').value;
    console.log(budget);
    if(budget == ''){
        alert('Enter your budget');
    }
    else{
        budget =parseInt(budget);
        balance = document.querySelector(".balance");
        balance.innerHTML = budget;
    }
}

//add fruits by on click function

function fruitInc(fruit_name) {  
    submt = document.querySelector('.max-budget').value;
    if(submt > total){

        if (fruit_name =='apples') {

            if (priceOfApple <= submt ) {
                document.querySelector('.countOfApple').innerHTML = ++quantityOfApple;
                total += priceOfApple;
                budget -= priceOfApple;
            

            }

            else{
                alert('you cannot buy');
            }
        }

        else if (fruit_name =='bananas') {
            if (priceOfBanana <= submt) {
                document.querySelector('.countOfBanana').innerHTML = ++quantityOfBanana;
                total += priceOfBanana;
                budget -= priceOfBanana;
            


            }

            else{
                alert('you cannot buy');
            }
        }

        
        else if (fruit_name =='mangoes') {
            if (priceOfMango <= submt) {
                document.querySelector('.countOfMango').innerHTML = ++quantityOfMango;
                total += priceOfMango;
                budget -= priceOfMango;

            }

            else{
                alert('you cannot buy');
            }
        }

        else if (fruit_name =='oranges') {
            if (priceOfOrange <= submt) {
                document.querySelector('.countOfOrange').innerHTML = ++quantityOfOrange;
                total += priceOfOrange;
                budget -= priceOfOrange;

            }

            else{
                alert('you cannot buy');
            }
        }
    }  
    else{
        alert('you cannot buy more')
    } 
    document.querySelector('.total').innerHTML = total;
    balance.innerHTML = budget;
}



//remove fruit by on click


function fruitDec(fruit_name) {  
    submt = document.querySelector('.max-budget').value;

    
        if (fruit_name =='apples') {
            if (quantityOfApple > 0 ) {
                document.querySelector('.countOfApple').innerHTML = --quantityOfApple;
                total -= priceOfApple;
                budget += priceOfApple;
    
            }
    
            else{
                alert('you can buy');
            }
        }
        else if (fruit_name =='mangoes') {
            if (quantityOfMango > 0 ) {
                document.querySelector('.countOfMango').innerHTML = --quantityOfMango;
                total -= priceOfMango;
                budget += priceOfMango;
    
            }
    
            else{
                alert('you can buy');
            }
        }

        else if (fruit_name =='bananas') {
            if (quantityOfBanana > 0) {
                document.querySelector('.countOfBanana').innerHTML = --quantityOfBanana;
                total -= priceOfBanana;
                budget += priceOfBanana;
    
            }
    
            else{
                alert('you can buy');
            }
        }

        else if (fruit_name =='oranges') {
            if (quantityOfOrange > 0) {
                document.querySelector('.countOfOrange').innerHTML = --quantityOfOrange;
                total -= priceOfOrange;
                budget += priceOfOrange;
    
            }
    
            else{
                alert('you can buy');
            }
        }

        document.querySelector('.total').innerHTML = total;
        balance.innerHTML = budget;
}    
        