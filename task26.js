
//Be Concise IV - Index of an element in an array

// Provided is a function find which accepts two parameters in the following order: array, element 
// and returns the index of the element if found and "Not found" otherwise. Your task is to shorten 
// the code as much as possible in order to meet the strict character count requirements of the Kata. 
// (no more than 85) You may assume that all array elements are unique.

// Дана функция find, которая принимает два параметра в следующем порядке: массив и элемент, и возвращает 
// индекс элемента, если он найден, и "Not found" в противном случае. Ваша задача - как можно более сократить 
// код, чтобы соответствовать строгим требованиям по количеству символов в Катах (не более 85). Вы можете 
// предположить, что все элементы массива уникальны.


// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
//   }



function find(a, e) {return a.indexOf(e) === -1 ? "Not found" : a.indexOf(e)}

function find(a, e) {return a.indexOf(e) + 1 ? a.indexOf(e) : "Not found"}

function find(a, e) {return a.includes(e) ? a.indexOf(e) : "Not found"}

const array = [2, 3, 5, 7, 11];

console.log(find(array, 5))

const array2 = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];

console.log(find(array, "lorem ipsum"))





