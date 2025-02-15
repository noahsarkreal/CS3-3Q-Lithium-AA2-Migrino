function expoPopuGrowth(){
	let popuInitial = parseFloat(prompt('Enter a number for the initial population: '));
	let growthRate = parseFloat(prompt('Enter a number for the rate of growth: '));
	let timeInHrs = parseFloat(prompt('Enter a number for the time in hours: '));
	
	let popuFinal = Math.round(popuInitial*Math.pow(Math.E, (growthRate*timeInHrs)));
	
	let monsterLoc = prompt('Enter the location of the monster: ');
	let monsterName = prompt('Enter the name of the monster: ');
	
	let monsterLocAndName = monsterLoc.concat(" ", monsterName).toUpperCase();
	
	document.getElementById("result").innerHTML="After " + timeInHrs + " hour/s, the population of " + monsterLocAndName + " has risen to " + popuFinal;
    
	}