// 1. Дан массив [1, 2, [3, 4, [5, 6]]]; Напишите функцию, 
// которая будет рекурсивно выравнивать массив, 
// где результатом будет [1, 2, 3, 4, 5, 6]. 
// Также найдите метод массива, который уже 
// это делает и разберитесь самостоятельно как это работает.

var arr = [1, 2, [3, 4, [5, 6]]],
    i = 0, 
    a = 0, 
    c = 0,
    newArr = [];
function fn() { 
  for(i; i <= arr.length; i++) {
     if(Array.isArray(arr[i])) {
      for(a; a <= arr[a].length; a++) {
        if(Array.isArray(arr[i][a])) {
          for(c; c <= arr[i][a][с].length; c++) {
            newArr.push(arr[i][a][c]);
          }
        } else {
          newArr.push(arr[i][a]);
        }
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(fn(arr));






// 2. Дан массив [1, 2, 3, 4, 5, 6]. Найдите сумму чисел рекурсивно.
            // 1
            // var arr = [1, 2, 3, 4, 5, 6],
            //     sum = 0,
            //     i = 0,
            //     len = arr.length;
            // for(i; i < len; i += 1) {
            //       sum += arr[i]
            // }

            // console.log(sum);


            // 2 рекурсивно
            // var arr = [1, 2, 3, 4, 5, 6];
            
            // arr.push(10, 10, 10);

            // function acc(arr, sum = 0, i = 0) {
            //   if (arr[i]) {
            //     return acc(arr, sum + arr[i], i += 1)
            //   } else {
            //     return sum
            //   }
            // }
            
            // console.log(acc(arr));

                             //     var arr = [1, 2, 3, 4, 5, 6],
                             //     reducer = (accumulator, currentValue) => accumulator + currentValue;
                             //console.log(arr.reduce(reducer));

// 3. FreeCodeCamp Basic Algorithm Scripting: Factorialize a Number

// function fn(num) {
//         if(num === 0) {
//           return 1;
//         }
//         return num * fn(num - 1);
// }

// console.log(fn(5));


            // function fn(num) {
            //   var i, acc = 1;
            //   for(i = num; i > 0; i -= 1) {
            //     acc *= i;
            //   }
            //   return acc;
            // }


            // console.log(fn(5));


// 4. FreeCodeCamp Basic Algorithm Scripting: Find the Longest Word in a String

// function findLongestWordLength(str) {
//     var arr = str.split(' ').map(function(value) {
//     return value.length;
//   })
//   return Math.max(...arr)
  
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// 5.FreeCodeCamp Basic Algorithm Scripting: Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//   var newArr = [],
//       i = 0;
//   for(i; i < arr.length; i++) { 
//     var num = 0, 
//         a = 0;
//   for(a; a <=  arr[i].length; a++) { //погружаемся в подмасив спомощью еще одного цикла
//     if(arr[i][a] > num) {
//       num = arr[i][a];
//     }
//   }
//   newArr.push(num);
//   }
//   return newArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// 6.FreeCodeCamp Basic Algorithm Scripting: Confirm the Ending

// function confirmEnding(str, target) {
//   if (str.substr(str.length - target.length, str.length) === target){
//     return true;
//   } else{
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "in"));




// 4. Функция haveFun принимает 2 параметра: анонимную функцию, которая возвращает 3 и 
// анонимную функцию, которая возвращает 4. Верните результатом функции haveFun сумму 3 и 4.
// function anon1() {
//   return 3;
// }

// function anon2() {
//   return 4;
// }

// function haveFun(param1 = function() {return 3}, param2 = function() {return 4}) {
//   sum = param1 + param2; 
//   return sum;
// }
// console.log(haveFun());



// function haveFun(p1, p2) {
//   return p1 + p2;
// }

// function anon1() {
//   return 3;
// }

// function anon2() {
//   return 4;
// }


// console.log(haveFun(anon1(), anon2()));
