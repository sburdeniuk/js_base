// 1. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
// которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// answer:

// function first (num) {
   
//     var i = 1;
//     for (i; i <= num ; i += 1) {
        
//         if(i % 3 !== 0 && i % 5 !== 0) {
//             console.log(i);
//         }
//         else {
//         if(i % 3 === 0 && i % 5 === 0 ) {
//             console.log('fizzbuzz');
//         }
//         if(i % 3 === 0 && i % 5 !== 0) {
//             console.log('fizz');
//         }
//         if(i % 5 === 0 && i % 3 !== 0 ) {
//             console.log('buzz');
//         }
//     }
    
//     }
// }

// first(15);


// 2. Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

// var i = 45;

// while(i <= 670) {
//     if(i % 10 === 0) {
//         console.log(i)
//     }
//     i += 1;
// }

// 3. Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

// var i = 45;

// while(i <= 67) {
//     console.log(i);
//     i += 1;
// }


// 4. Напишите скрипт, который используя оператор for выполнит два предыдущих задания.


// 1

// var i;

// for(i = 45; i <= 670; i += 1) {
//     if(i % 10 === 0) {
//         console.log(i);
//     }
// }

// 2
// var i;

// for(i = 45; i <= 67; i += 1) {
//     console.log(i);
// }



// 5. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов. (используйте функции)

function primeNumbers (num) {
    primeNumbersNext:
    for(var i = 2; i <= num; i += 1) {
        for(var a = 2; a < i; a += 1) {
            if(i % a === 0) continue primeNumbersNext;
        }
        console.log(a);
        }
        
    }

 primeNumbers(10);