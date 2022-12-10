let maxWeight = document.querySelector('.weight-input')
let selectDropdown = document.querySelector(".input-list");
let selectedItems = document.querySelector('.selected-val')
let statusBtn = document.querySelector('.status')
let backBtn = document.querySelector('.back-btn')
let submitBtn = document.querySelector('.submit')
let capacity = document.querySelector('.max-weight')
let clearAllBtn = document.querySelector('.clear-all')
let erroCount = 0;

// it is with aid of this that i am able to use values as refrences.
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

// creating my object
let knapsack = {
    capacity: 0,
    weight: 0,
    value: 0,
    items: []
}

console.log(`this yo knapsack before: ${knapsack}`)

selectDropdown.addEventListener("change", () => {

    console.log(knapsack)

    maxWeight.style.border = 'none'
    let OptVal = selectDropdown.value;
    knapsack.capacity = maxWeight.value
    capacity.innerHTML = `max weight: ${knapsack.capacity}kg` // this assigns the iput capacity value to the capacity div


    if ((maxWeight.value == '') || (maxWeight.value < 0)) {
       if(erroCount > 0){
           maxWeight.style.border = '2px solid red'
           alert('your knapsack input field must have a max weight')
       }else {
            alert(`input a max-weight`)
       } erroCount++
    }else {
        maxWeight.readonly = true
        weightBtn = maxWeight.value
        console.log(`max weight = ${maxWeight.value}kg`)

        console.log(`option val = ${OptVal}`)

        knapsack.weight += jsonArray[OptVal].weight
        console.log(`knapSack current weight = ${knapsack.weight}kg`)

        if (knapsack.weight > knapsack.capacity) {  // this if else fxn is used to make sure the next input weight does not exceed knapsack capacity
            knapsack.weight -= jsonArray[OptVal].weight  // the -= is used here since the kapsack.weight would still increase. even when nothing is added to selected itmes inner html
            alert('this item weight will exceed knapsack capacity')
            alert(`knapsack space left = ${knapsack.capacity-knapsack.weight}kg`)
            selectDropdown.readonly = true
        }else {
            if (knapsack.weight == knapsack.capacity) {
                statusBtn.style.border = '2px solid blue'
            }
            if (knapsack.weight < knapsack.capacity) {
                statusBtn.style.border = '2px solid green'
            }

            knapsack.items.push(`[ ${jsonArray[OptVal].name} |${jsonArray[OptVal].weight}kg |${jsonArray[OptVal].value}xaf ] <br/>`); // one heck of a messed up pushing code line! buh it works just right
            knapsack.items.join('2')
            console.log(`knapSack items = ${knapsack.items}`)

            console.log(`item weight ${jsonArray[OptVal].weight}`)

            // selectedItems.innerHTML += `[ ${jsonArray[OptVal].name} |${jsonArray[OptVal].weight}kg |${jsonArray[OptVal].value}xaf ] <br/>`;
            
            selectedItems.innerHTML = `${knapsack.items} <br/>`
            statusBtn.innerHTML = `current weight: ${knapsack.weight}Kg`
        }
    }
})


backBtn.addEventListener('click', () => {

    // let OptValue
    // let sum = 0;
    // selectedItems.innerHTML = knapsack.items

    // console.log(`knapsack before pop: ${knapsack.items}`)

    // knapsack.items.pop();
    // selectedItems.innerHTML = `${knapsack.items}`

    // /* if((statusBtn.value != 0)||(statusBtn.innerHTML > 0)){
    //     knapsack.weight -= jsonArray[OptValue].weight
    // } */

    // statusBtn.innerHTML -= `current weight: ${jsonArray[OptValue].weight}Kg`
    // OptValue -= selectDropdown.value

    let sumWeight = 0;
    let OptVal = selectDropdown.value;

    for (let i=0; i<jsonArray.length; i++) {
        if (knapsack.items[i] == jsonArray[i].name){
            console.log(knapsack)
            console.log(`sum: this is: '${knapsack.items[i]}' ${knapsack.items[i]}`)
            sumWeight += jsonArray[i].weight
        }
    }

    selectedItems.innerHTML = knapsack.items

    console.log(`knapsack before pop: ${knapsack}`)

    knapsack.items.pop();

    console.log(`knapsack afterpop: ${knapsack}`)
    selectedItems.innerHTML = `${knapsack} <br/>`

    if((statusBtn.innerHTML != 0)||(statusBtn.innerHTML > 0)){
        knapsack.weight -= jsonArray[OptVal].weight
    }

    statusBtn.innerHTML = `current weight: ${knapsack.weight}Kg`
})

clearAllBtn.addEventListener('click', () => {
    window.location.reload(true)
})