
//https://github.com/hasanrakibgit/assignment.js

function kilometerToMeter(km){              // KilometterToMeter function
    if(km > 0){
        var meter= km*1000;
    return meter;
    }else{
        console.log('You Have Enter invalid input type')
    }   
}


function budgetCalculator(clock, phone, laptop ){   // budgetCalculator function
    if(clock, phone, laptop >= 0){
        var result= clock*50 + phone*100 + laptop*500;
     return result;
    }else{
        console.log('Please Enter valid number of three input')
    }
}


function hotelCost(days){
    if (days > 0){
        var totalCost= 0;
        if(days<=10 ){
            totalCost= days*100;
         } else if (days<=20) {
             firstCost= 10*100;
             remaining= days-10;
             secondCost= remaining*80;
             totalCost= firstCost+secondCost;
         } else {
             firstCost= 10*100;
             secondCost= 10*80;
             remaining= days-20;
             thirdCost= remaining*50;
             totalCost= firstCost+secondCost+thirdCost;
         }
    }else{
        console.log('Please enter a valid number of days')
    }
    return totalCost;
}


function megaFriend(){                    // use var names for this function like this "var names = ['Rakibul', 'Hasan'];"
    var max = names[0];
     for(var i=0; i<names.length; i++){
            var box = names[i];
        if(box.length > max.length){
                max = box;
        }
    }
    return max;
}
                                          
