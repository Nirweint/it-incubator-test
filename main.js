const button = document.querySelector(".btn");
const text = document.getElementById("form");

function find() {
    if (text.value == "google") {
        alert("Yandex круче. Но это не точно");
    };

    alert(text.value);
    alert(array[0].name);

    text.value = "";
}

button.addEventListener("click", findInterval);


// 5
const array = [
    { name: "Alex", age: 24 },
    { name: "Sofya", age: 21 },
    { name: "Oleg", age: 24 },
    { name: "Pasha", age: 25 },
];


// 6
/*function superSum(a, b) {
    alert(a + b);
}

superSum(2,3);
*/


// 7
numbers = [9, 5, 4, 3, 7, 23, 6];

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= min) {
        min = numbers[i];
    }
    else if (numbers[i] >= max) {
        max = numbers[i];
    }

}
console.log(max);
console.log(min);



// 8
let a = "XXX";
let b = "YYY";

[a,b] = [b,a];

console.log(a);
console.log(b);


// 9

function findMax(array) {
    console.log(Math.max(...array))
}

findMax([3, 5, 4, 1, 7, 23, 6, 255]);


// 10

function findInterval() {
    setTimeout(find, 3000);
}
