# Task

По городу движется автобус, который забирает и высаживает несколько человек на каждой остановке.

Вам предоставляется список (или массив) целочисленных пар. Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент), и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.

Ваша задача — вернуть количество людей, которые еще находятся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус может быть не пустым, и некоторые люди все еще могут быть внутри автобуса, они, вероятно, спят там :D

Взгляните на тест-кейсы.

Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.

Второе значение в первой паре массива равно 0, так как на первой остановке автобус пустой.

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ]),
      5
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ]),
      17
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ]),
      21
    );
    assert.strictEqual(number([[0, 0]]), 0);
  });
});
```
