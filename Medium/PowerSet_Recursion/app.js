const list = [1, 2, 3];
console.log(list.length);
let currentSubset = [];
const fun = (i) => {
	if (i == list.length) {
		console.log(currentSubset);
	} else {
		//Add the current number at index
		currentSubset.push(list[i]);
		fun(i + 1);

		//Dont add the current number at index
		currentSubset.pop();
		fun(i + 1);
	}
};

fun(0);
