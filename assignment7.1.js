//num1, num4, num5 are initialized to integer and num2, num3 are initialized to decimal values
	var num1 = -8;
	var num2 = 12.5;
	var num3 = -6.769;
	var num4 = 0;
	var num5 = -1;

/* if condition is true then it executes to the console the console.log output else it goes to the consecutive else if conditional statements is true or it executes to the console the default else condition block that has a console.log statement at the end of the if and else conditional code. */

	if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
		console.log(num1 +" is the largest number of all the given five numbers");
	} 

	else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
		console.log(num2 +" is the largest number of all the given five numbers");
	}
	
	else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
		console.log(num3 +" is the largest number of all the given five numbers");
	}
	
	else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
		console.log(num4 +" is the largest number of all the given five numbers");
	}
	else {
		console.log(num5 +" is the largest number of all the given five numbers");
	}
