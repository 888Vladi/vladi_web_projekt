/*Задание 1
Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.
*/



function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

alert(randomInteger(5, 10));




/*Задание 2
Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие. Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей. Удалите свойство name из объекта.
*/



var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;



/*Задание 3
Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
*/

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "подъём";

alert(isEmpty(schedule));



/*Задание 4
 Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект пустой, то результат должен быть 0.
*/


"use strict";

var salaries = {
    "a": 100,
    "b": 200,
    "c": 300,
};

var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}

alert(sum);


/*Задание 5
  Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого са- мая большая зарплата.
  Если объект пустой, то пусть он выводит «нет сотрудников».
*/

"use strict";

var salaries = {
    "a": 100,
    "b": 300,
    "c": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert(maxName || "нет сотрудников");





/*
Задание 6
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
*/


var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);



/*
Задание 7
Напишите код для вывода alert случайного значения из массива:
*/

var arr = ["Яблоко", "Ананас", "Персик", "Груша"];

var rand = Math.floor(Math.random() * arr.length);

alert(arr[rand]);


/*
Задание 8
Напишите функцию которая:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива
*/


var numbers = [];

while (true) {

    var value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert(sum);


/* 

Задание 9
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его но- мер, если найдено, или -1, если не найдено.
*/



function find(array, value) {
    if (array.indexOf) { // если метод существует
        return array.indexOf(value);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert(index);


/*
Задание 10
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
*/



function filterRange(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert(filtered);


/*
Задание 11
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
*/

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
    alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert(pow(x, n));
}

/*Задание 12
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
*/

var d = new Date(2012, 1, 20, 3, 12);
alert(d);

/*
Задание 13
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, ... „вс“.
                        
*/

var date = new Date(2014, 0, 3);
alert(date.toLocaleString('ru', { weekday: 'short' }));


/*
Задание 14
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, ..., воскресенье – номер 7.
var date = new Date(2012, 0, 3); // 3 янв 2012
alert( getLocalDay(date) ); // вторник, выведет 2

*/


function getLocalDay(date) {

    var day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

alert(getLocalDay(new Date(2012, 0, 3)));


/*

*/