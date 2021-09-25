function isValidAge(person) {
    if (person["age"] > 19) {
        return true
    }  else {
        return false
    }
}

var personArray = [
    {"name": "John Doe", "age":20},
    {"name": "Jane Doe", "age":19},
];
for (var i = 0; i < personArray.length; i++) {
    console.log(personArray[i]['name'])
    if (isValidAge(personArray[i])) {
        console.log('your!')
    }  else {
        console.log('Get out!')
    }
}

