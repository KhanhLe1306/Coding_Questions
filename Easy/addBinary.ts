function addBinary(a: string, b: string): string {
	let num1 = +a;
	console.log(num1);
	let num2 = +b;
	console.log(num2);
	let carryUp = 0;
	let result = "";

	while (Math.round(num1 / 10) != 0 && Math.round(num2 / 10) != 0) {
		carryUp += (num1 % 10) + (num2 % 10);
		if (carryUp == 0 || carryUp == 1) {
			result += carryUp + "";
			carryUp = 0;
		} else if (carryUp == 2) {
			result += "0";
			carryUp = 1;
		} else {
			result += "1";
			carryUp = 1;
		}
		num1 = Math.round(num1 / 10);
		num2 = Math.round(num2 / 10);
		console.log(result);
	}

	if (Math.round(num1 / 10) == 0 && Math.round(num2 / 10) == 0) {
		carryUp += num1 + num2;
		if (carryUp == 0 || carryUp == 1) {
			result += carryUp + "";
			carryUp = 0;
		} else if (carryUp == 2) {
			result += "0";
			carryUp = 1;
		} else {
			result += "1";
			carryUp = 1;
		}
		result += carryUp + "";
	} else if (Math.round(num1 / 10) == 0) {
            carryUp += num1 % 10 + num2 % 10;
			if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
            console.log(result);
            num2 /= 10;
		while (Math.round(num2 / 10) != 0) {
			carryUp += num2 % 10;
			if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
			num2 = Math.round(num2 / 10);
			console.log(result);
		}
            carryUp += num2;
            if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
	} else {
            carryUp += num2 % 10 + num1 % 10;
			if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
            num1 = Math.round(num1 / 10);
		while (Math.round(num1 / 10) != 0) {
			carryUp += num1 % 10;
			if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
			num1 = Math.round(num1 / 10);
			console.log(result);
		}
            carryUp += num1;
            if (carryUp == 0 || carryUp == 1) {
				result += carryUp + "";
				carryUp = 0;
			} else if (carryUp == 2) {
				result += "0";
				carryUp = 1;
			} else {
				result += "1";
				carryUp = 1;
			}
	}
    if(carryUp != 0) result += carryUp + ''
	console.log(result);

	return result.split("").reverse().join("");
}

console.log(addBinary("11", "1"));
  
