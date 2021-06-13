const months = ['Nov','Agust','octuber', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array [Agust", "Dec", "Feb", "Jan", "Nov", "octuber]

const array1 = [1,200,100, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100, 100000, 200, 21, 30, 4];
const arr2 = [21, 2100, 2, 35000];
let dscN = arr2.sort((f, s) => s - f);

// ascending and discending for string
const arr3 = ['21', '2100', '2', '35000'];
const arr4 = ['21', '2100', '2', '35000'];