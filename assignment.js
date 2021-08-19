// Largest name of friends 
function megaFriend(friends){
	if(friends != ''){
		var longestName = '';
		for(var i = 0; i < friends.length; i++){
			if(friends[i].length > longestName.length){
				longestName = friends[i];
			}
		}
	}else{
		return 'Invalid input name!';
	}
	return longestName;
}

// Hotel Cost
function hotelCost(day){
	totalRent = 0;
	if(day > 0){
			if(day <= 10){
				totalRent = day * 100;
			}else if(day <= 20){
				var first10 = 10 * 100;
				var dayRemain = day - 10;
				totalRent = first10 + dayRemain * 80;
			}else if(day <= 30){
				var first10  = 10 * 100;
				var second10 = 10 * 80;
				var dayRemain = day - 20;
				totalRent = first10 + second10 + dayRemain * 50;
			}
			else if(day > 30){
				var first10  = 10 * 100;
				var second10 = 10 * 80;
				var dayRemain = day - 20;
				totalRent = first10 + second10 + dayRemain * 50;
			}
	}else{
		return 'Invalid day!';
	}
	return totalRent;
}

// Budget calculator
function budgetCalculator(clock, phone, laptop){
    var totalCost = 0;
	if(clock > 0 && phone > 0 && laptop > 0){
		totalCost = clock * 50 + phone * 100 + laptop * 500;
	}else{
		return 'Products numbers are invalid!';
	}
	return totalCost;
}

// Kilometer to meter convert 
function kilometerToMeter(kilo){
	var meter = 0;
	if(kilo >= 0){
		 meter = kilo * 1000;
	}
	else{
		return 'Distance is invalid!';
	}
	return meter;
}

