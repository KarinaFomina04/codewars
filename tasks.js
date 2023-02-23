// 1. написать функцию, которая принимает число, а возвращает число, цифры которого отсортированы по убыванию

        function descendingOrder(n) {
            let arrayOfDigits = Array.from(String(n), Number);
            arrayOfDigits.sort((a, b) => b - a);
            return +arrayOfDigits.join(''); 
        }

        console.log(descendingOrder(214545));  


        // 2. Написать функцию, которая принимает строку и возвращает
        // центральную букву этой строки, если длинна строки нечетное число,
        // если же длинна строки четное число, вернуть две центральные буквы

        function getMiddle(s) {
            const len = s.length;
            const midIndex = Math.floor(len / 2);
            return len % 2 === 0 ? s.slice(midIndex - 1, midIndex + 1) : s.charAt(midIndex);
        }


        console.log(getMiddle('Test')) // expected: middle letter 'es'
        console.log(getMiddle('Testing')) // expected: middle letter 't'
        console.log(getMiddle('A')) // expected: middle letter 'A'


        // 3. Напишите функцию, которая на входе принимает массив чисел
        // среди которых лишь одно "число-предатель"
        // оно либо четное, либо нет, найти предателя и вернуть его.

        function findOutlier(int) {
            const nechet = int.filter(n => n % 2 !== 0);
            const chet = int.filter(n => n % 2 === 0);
            return nechet.length === 1 ? nechet[0] : chet[0]
        }
        console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
        console.log(findOutlier([3, 7, 12, 51, 43]))


        // 4. Написать функцию, которая принимает два массива чисел a и b 
        // сравнивает два массива и возвращает новый массив с числами из массива a
        // которых нет в массиве b.

        function arrayDiff(a, b) {
            return a.filter(el => !b.includes(el));
        }

console.log(arrayDiff([1, 2, 2, 2, 3], [1,2])); 
// // expected:  [3]