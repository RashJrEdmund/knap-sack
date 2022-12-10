let maxWeight = document.querySelector('.max-wieght').value
let selectDropdown = document.querySelector(".input-list");

let selectedItems = document.querySelector('.selected-val')
let capacity = document.querySelector('.capacity')
let clearBtn = document.querySelector('.back')
let addBtn = document.querySelector('.add')
let submitBtn = document.querySelector('.submit')
let clearAllBtn = document.querySelector('.clear-all')

const jsonArray = [
    { name: "fish", weight: 4, value: 1500 },
    { name: "meat", weight: 4, value: 1500 },
    { name: "oranges", weight: 2, value: 200 },
    { name: "apples", weight: 2, value: 200 },
    { name: "tomatoes", weight: 2, value: 150 },
    { name: "rice", weight: 3, value: 700 },
    { name: "yams", weight: 5, value: 1500 },
    { name: "groundnut", weight: 1, value: 500 },
    { name: "oil", weight: 3, value: 1800 },
    { name: "mangoes", weight: 2, value: 200 },
    { name: "Mercedes Benz", weight: 1000, value: 10e9 }
]

selectDropdown.addEventListener("change", () => {
    let OptVal = selectDropdown.value;

    let weightSum = 0;

    let weightTracker = Number(jsonArray[OptVal].weight)
    console.log(`weightTracker for ${jsonArray[OptVal].name} = ${weightTracker++}`)
    console.log(`weight tracker type = ${typeof(weightTracker)}`)

    /* const jsonData = '{ "name": "John", "age": 22 }';
    const obj = JSON.parse(jsonArray[OptVal].weight); */

    console.log({OptVal})
    selectedItems.innerHTML += `[${jsonArray[OptVal].name} |${jsonArray[OptVal].weight}kg |${jsonArray[OptVal].value}xaf] <br/>`;
    capacity.innerHTML = weightSum

    // knapsack capacity will still be greater than knapsack weight + item weight
    // add item to knapsack; updating the knapsack weight and value
    // else alert that the knapsack is full
    // finally display knapsack object
})