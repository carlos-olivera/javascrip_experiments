function isSorted(arr) {
	return arr.every((element, i, arr) => !i || (element >= arr[i - 1]));
}

function isSortedAscOrDesc(arr) {
	if (isSorted(arr)) return 1;
	if (isSorted(arr.reverse())) return -1;
	return 0
}

console.log(isSorted([8,9,15,28,45,198]));

console.log(isSortedAscOrDesc([67,45,15,11,8,1,0]));


