'use strict';

let a = prompt("First number?", "1");
let b = prompt("Second number?", "2");

// String → Number конвертация
a = Number(a);
b = Number(b);

// Қате енгізуді тексеру (optional, бірақ дұрыс практика)
if (Number.isNaN(a) || Number.isNaN(b)) {
  alert("Please enter valid numbers.");
} else {
  alert(a + b);
}
