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

// function primeNumbers (num) {
//     primeNumbersNext:
//     for(var i = 2; i <= num; i += 1) {
//         for(var a = 2; a < i; a += 1) {
//             if(i % a === 0) continue primeNumbersNext;
//         }
//         console.log(a);
//         }
        
//     }

//  primeNumbers(10);











// Д/З №2

// 1. Первая задача на Freecodecamp - Convert Celsius to Fahrenheit (раздел Basic Algorithm Scripting)
// function convertToF(celsius) {
//     var fahrenheit;
//     fahrenheit = (celsius * 9)/5 + 32;
//     return fahrenheit;
//   }
  
//   console.log(convertToF(20));


// 2. Вторая задача на Freecodecamp - Reverse a String (раздел Basic Algorithm Scripting)

// function reverseString(str) {
//     for (var newStr = '', 
//     i = str.length - 1; 
//     i >= 0; i--) {
//       newStr += str[i];
//     }
//     return newStr;
//   }
  
//   console.log(reverseString("Greetings from Earth"));

// 3. Седьмая задача на Freecodecamp - Repeat a String Repeat a String (раздел Basic Algorithm Scripting)

// function repeatStringNumTimes(str, num) {
//     var newStr = '';
//     for(newStr; num > 0; num--) {
//       newStr += str
//     }
//     return newStr;
//   }
  
//   console.log(repeatStringNumTimes("*", 8));


// 4. Создайте массив arr с числовыми величинами 45,78,10,3. Добавьте в массив arr еще одно число. 
// Посчитайте в переменную sum сумму чисел в нем, при помощи цикла for/while.


// var arr = [45, 78, 10, 3];

// arr.push(13);

// console.log(arr);

// var sum = 0;

// // for(i = 0; i < arr.length; i += 1) {
// //     sum += arr[i]; 
// // } 
// // console.log(sum);

// var i = 0;
// while(i < arr.length) {
//     sum += arr[i];
//     i += 1;
// } console.log(sum);

// 5.Дан объект
// var salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

// var salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }

// var sum = 0;

// for(var key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);

