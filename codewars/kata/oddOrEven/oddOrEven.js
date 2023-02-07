/* Этот код определяет функцию JavaScript oddOrEven, которая принимает массив целых чисел arr в качестве входных данных.

Сначала функция проверяет, равна ли длина массива 0. Если да, функция возвращает «четное».

Если длина массива не равна 0, функция объявляет переменную sum и инициализирует ее значением 0. Затем она использует цикл for для перебора каждого элемента в массиве и добавления его значения в sum.

Наконец, функция проверяет, делится ли сумма на 2. Если это так, функция возвращает «четное число». Если нет, возвращается «нечетный». */
function oddOrEven(arr) {
  if (arr.length === 0) {
    return "even";
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

///! or ///
/* Это альтернативная реализация oddOrEven функции в JavaScript. Этот код использует массив reduce функций arr

Функция `red reduce принимает (a, b) => a + b и начальное значение 0. Функция обратного вызова a и ` b и возвращает a и `b b. Функция . reduce_0

Результат ` reduce функции %). Если результат не равен 0, то возвращается «нечетный». Если он равен 0, то он возвращает «четный». */

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}