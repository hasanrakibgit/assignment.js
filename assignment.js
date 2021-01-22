
function kilometerToMeter(km){
    var meter=km*1000;
    return meter;
}

function budgetCalculator(clock, phone, laptop ){
    var result= clock*50 + phone*100 + laptop*500;
     return result;
}

function hotelCost(days){
    var totalCost= 0;
    if(days<=10){
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
    return totalCost;

}

var names = ['Raki','', 'hasan', 'jaidnio', 'Rakibul' ];
function megaFriend(){                    //
    var max = names[0];
     for(var i=0; i<names.length; i++){
            var box = names[i];
        if(box.length > max.length){
                max = box;
        }
    }
    return max;
}
                                           //console.log(megaFriend(names));
console.log(kilometerToMeter(-1.2));
console.log(budgetCalculator(1, 1, 1));
console.log(hotelCost(21));
console.log(megaFriend(names));