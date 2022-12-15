const maxWeight = document.querySelector('.weight-input')
const selectDropdown = document.querySelector(".input-list")
const selectedItems = document.querySelector('.selected-val')
const statusBtn = document.querySelector('.status')
const backBtn = document.querySelector('.back-btn')
const submitBtn = document.querySelector('.submit')
const capacity = document.querySelector('.max-weight')
const clearAllBtn = document.querySelector('.clear-all')
let erroCount = 0

// it is with aid of this that i am able to use values as refrences.
const jsonArray = [
  { name: 'fish', weight: 4, value: 1500 },
  { name: 'meat', weight: 4, value: 1500 },
  { name: 'oranges', weight: 2, value: 200 },
  { name: 'apples', weight: 2, value: 200 },
  { name: 'tomatoes', weight: 2, value: 150 },
  { name: 'rice', weight: 3, value: 700 },
  { name: 'yams', weight: 5, value: 1500 },
  { name: 'groundnut', weight: 1, value: 500 },
  { name: 'oil', weight: 3, value: 1800 },
  { name: 'mangoes', weight: 2, value: 200 },
  { name: 'Mercedes Benz', weight: 1000, value: 10e9 }
]

const weightTrackingArray = []
// let knapsack.weight = 0; // this variable handles both adding and subtracting the status weight

// creating my object

const knapsack = {
  capacity: 0,
  weight: 0,
  value: 0,
  items: []
}

selectDropdown.addEventListener('change', () => {
  maxWeight.disabled = 'true'
  if (maxWeight.value === '') {
    maxWeight.style.border = '2px solid red'
    alert('your knapsack weight input field must have a max weight')
  } else {
    maxWeight.disabled = 'true'
    maxWeight.style.border = 'none'
    selectedItems.style.border = 'none'

    const OptVal = selectDropdown.value

    knapsack.capacity = parseInt(maxWeight.value)
    capacity.innerHTML = `max weight: ${knapsack.capacity}kg` // this assigns the iput capacity value to the capacity div

    weightTrackingArray.push(jsonArray[OptVal].weight)
    knapsack.weight += weightTrackingArray[weightTrackingArray.length - 1]

    if (knapsack.weight > knapsack.capacity) { // this if else fxn is used to make sure the next input weight does not exceed knapsack capacity
      alert('this item weight will exceed knapsack capacity')
      knapsack.weight -= weightTrackingArray[weightTrackingArray.length - 1]
      alert(`knapsack space left = ${knapsack.capacity - knapsack.weight}kg`)
    } else {
      if (knapsack.weight === knapsack.capacity) {
        statusBtn.style.border = '2px solid blue'
      }
      if (knapsack.weight < knapsack.capacity) {
        statusBtn.style.border = '2px solid green'
      }

      knapsack.items.push(`[ ${jsonArray[OptVal].name} |${jsonArray[OptVal].weight}kg |${jsonArray[OptVal].value}xaf ] <br/>`); // one messed up pushing code line! buh it works just right

      selectedItems.innerHTML = `${knapsack.items} <br/>`
      statusBtn.innerHTML = `current weight: ${knapsack.weight}Kg`
    }
  }
})


backBtn.addEventListener('click', () => {
  if (knapsack.weight <= 0) {
    selectDropdown.disabled = false
  }
  let sumWeight = 0;

  for (let i = 0; i < jsonArray.length; i++) {
    if (knapsack.items[i] == jsonArray[i].name) {
      sumWeight += jsonArray[i].weight
    }
  }

  if (knapsack.weight !== 0) {
    knapsack.weight -= weightTrackingArray[weightTrackingArray.length - 1]
  }
  console.log(`this is the weight: ${knapsack.weight}`)

  selectedItems.innerHTML = knapsack.items
  weightTrackingArray.pop()

  knapsack.items.pop()

  selectedItems.innerHTML = `${knapsack.items} <br/>`
  statusBtn.innerHTML = `current weight: ${knapsack.weight}Kg`
})

submitBtn.addEventListener('click', () => {
  if ((maxWeight.value === '') || (maxWeight.value < 0)) {
    if (erroCount > 0) {
      maxWeight.style.border = '2px solid red'
      alert('your knapsack weight input field must have a max weight')
    } else {
      alert(`input a max-weight`)
    } erroCount++
  }
  else if (selectedItems.innerHTML == '') { 
    alert('no items selected')
    selectedItems.style.border = '2px solid red'
  } else {
    alert(`item${knapsack.items.length > 1 ? 's have' : ' has'} been submited`)
    selectDropdown.disabled = true
  }
})

clearAllBtn.addEventListener('click', () => {
  window.location.reload(true)
})
