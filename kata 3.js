module.exports = {
  callsTheFunction: callsTheFunction,
  callsProperty: callsProperty,
  map: map,
  filter: filter,
  find: find
}

function callsTheFunction (increment) {
  increment = increment (+ 1)
return increment
}

function callsProperty (obj) {
  obj.increment()
  return obj
}


function map (array, womble) {
  var animal = []
  for (i=0; i<array.length; i++) {
    var newAnimal = womble(array[i])
    animal.push(newAnimal)
  }
  return animal
}


function filter(arr, filter_function){
  var array = []
  for (j=0; j<arr.length; j++) {
    if (filter_function(arr[j])) {
      array.push(arr[j])
    }
  }
  return array
}

function find (arr, seCond) {
  var first = []
  for (j=0; j<arr.length; j++) {
    if (seCond(arr[j])) {
    return first.push(arr[j])
    }
  }
}
