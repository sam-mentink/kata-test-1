// makeObject should return an object like this:
// {
//   key: value
// }
function makeObject (key, value) {
var result = {}
  result[key] = value
  return result
}

// getValue should return the value of the property contained in `key`
function getValue (obj, key) {
  return obj[key]
}

// ageOneYear should add one to the `age` property of `obj`
// and then return obj
function ageOneYear (obj) {
  obj["age"] = obj.age + 1
  return obj
}

// deleteProp should remove the property contained in `key` from `obj`
function deleteProp (obj, key) {
   delete obj[key]
}

// makeArrayOfItem should return an array that is `length` long, made up of `item`
// For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem (item, length) {
 var foo = []
  for (i = 0; i < length; i++) {
    foo.push(item)
  }
return foo
}

// makeArrayOfItems should return an array containing all arguments passed to it
function makeArrayOfItems () {
  // return Array.prototype.slice.call(arguments)
  var args = []
  for (i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  return args
}

// getGreeting should return a string containing 'Hello ' and the contents of `name`
function getGreeting (name) {
  return 'Hello ' + [name]
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
function returnErrorIfFalsy (val) {
  if (!val) {
    return new Error('Oh no, an error!')
  }
}




// Leave this alone for now: it just makes your code visible so it can be tested!
module.exports = {
  makeObject: makeObject,
  getValue: getValue,
  ageOneYear: ageOneYear,
  deleteProp: deleteProp,
  makeArrayOfItem: makeArrayOfItem,
  makeArrayOfItems: makeArrayOfItems,
  getGreeting: getGreeting,
  returnErrorIfFalsy: returnErrorIfFalsy
}
