/* 1 */

let arr1 = ['Mango', 'Poly', 'Ajax'];
let elNum = 0;

function logItems(arr){
    for (let i = 0; i < arr.length; i++){
        elNum += 1;
        console.log(`${elNum} - ${arr[i]}`);
    }
}

logItems(arr1);

/* 2 */
const inp = document.getElementById("inp1");
const btn = document.getElementById("btn1");

btn.addEventListener("click", () => {
    const inputText = inp.value;
    const [mess, pricePerWord] = inputText.split(",");
    calculateEngravingPrice(mess, pricePerWord);
});

function calculateEngravingPrice(mess, pricePerWord) {
    console.log(pricePerWord);
    let words = mess.split(` `);
    let price = words.length * pricePerWord;
    console.log(price);
}

/* 3 */

const inp2 = document.getElementById("inp2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    let curText = inp2.value;
    findLongestWord(curText);
})

function findLongestWord(str) {
    console.log(str.split(" ").reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, ""));
}

/* 4 */

const inp3 = document.getElementById("inp3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    let strr = inp3.value;
    console.log(formatString(strr));
})

function formatString(str) {
    return str.length > 40 ? str.slice(0, 40) + '...' : str;
}

/* 5 */

const inp4 = document.getElementById("inp4");
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
    let str = (inp4.value).toLowerCase();
    str.includes("spam") || str.includes("sale") ? console.log(true) : console.log(false);
});

/* 7 */

/* 
Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни 
true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, 
повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

Напиши функцію addLogin(allLogins, login) яка:

Приймає новий логін і масив всіх логінів як параметри
Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'
Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'

TODO : 1.1 перевір кількість символів login 4-х до 16-ти включно. 
TODO : 1.2 Введений логін додаєтся в локалсторадж і потім перевіряєтся чи є в ньому введений логін коли користувач знову його введе
TODO : 1.3 є функція яка приймає в себе логін і запускає функцію 1.1 якщо все добре запускає функцію 1.2, якщо на якомусь етапі щось пішло не так вивести :
!'Помилка! Логін повинен бути від 4 до 16 символів', 'Такий логін уже використовується!', 'Логін успішно доданий!'
*/

const log = document.getElementById("inp5");
const btn5 = document.getElementById("btn5");

const allLogins = JSON.parse(localStorage.getItem('allLogins')) || [];

btn5.addEventListener("click", () => {
    console.log(1)
    let value = log.value;
    console.log(value);
    addLogin(value)
});

function addLogin(value) {
    let valueValidLength;
    function isValid(value) {
        if (value.length < 17 && value.length > 3) {
            valueValidLength = value;
        } else{
            alert(`Помилка! Логін повинен бути від 4 до 16 символів`);       
        }
    }
    isValid(value);

    function isUnique(value) {
        const allLogins = JSON.parse(localStorage.getItem('allLogins')) || [];
        if (allLogins.includes(value)) {
            alert(`Такий логін уже використовується!`);
            return
        } else {
            alert(`Логін успішно доданий!`);
            allLogins.push(valueValidLength);
            localStorage.setItem('allLogins', JSON.stringify(allLogins));
        }
    }

    isUnique(valueValidLength);
}