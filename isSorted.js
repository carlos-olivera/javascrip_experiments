function isSorted(arr) {
	return arr.every((element, i, arr) => !i || (element >= arr[i - 1]));
}

console.log(isSorted([8,9,15,28,45,198]));


