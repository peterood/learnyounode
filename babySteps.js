var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)

// original solution
/*
var len = (process.argv).length,
	i = 2,
	sum = 0;

for(; i < len; i++) {
	var sum = sum + Number(process.argv[i]);
}
console.log(sum)
*/
