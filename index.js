// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);
//2
// const array = ["apple", "banana", "apple", "orange", "banana", "banana"];
// const count = array.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);
//3
// const array = [1, 2, 3, 4];
// const squaredMap = new Map(array.map((num) => [num, num * num]));
// console.log(squaredMap);
//4
// const array = [1, 2, 3, 2, 4, 1];
// const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
// const uniqueDuplicates = [...new Set(duplicates)];
// console.log(new Set(uniqueDuplicates));
//5
// const array = [10, 15, 20, 25, 30];
// const threshold = 20;
// const filteredSet = new Set(array.filter((num) => num > threshold));
// console.log(filteredSet);
//6
// const array = ["a", "b", "a", "c", "b", "c", "c"];
// const frequency = array.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log(frequency);
//7
// const keys = ["name", "age", "city"];
// const values = ["John", 30, "New York"];
// const map = new Map(keys.map((key, index) => [key, values[index]]));
// console.log(map);
