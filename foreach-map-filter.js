function doubleValues(arr){
    return arr.map(function(value) {
        return value * 2;
    });
}

function onlyEvenValues(arr){
    return arr.filter(function(value) {
        return value % 2 === 0;
    });
}

function showFirstAndLast(arr){
    return arr.map(function(str) {
        return str.charAt(0) + str.charAt(str.length - 1);
    });
}

function addKeyAndValue(arr, key, value){
    return arr.map(function(obj) {
        obj[key] = value;
        return obj;
    });
}

function vowelCount(str){
    var vowels = "aeiou";
    var result = {};
    str.toLowerCase().split('').forEach(function(char) {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    });
    return result;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(value) {
        return value * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(value, index) {
        return value * index;
    });
}

function extractKey(arr, key){
    return arr.map(function(obj) {
        return obj[key];
    });
}

function extractFullName(arr){
    return arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
}

function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
    });
}

function find(arr, searchValue) {
    return arr.find(function(value) {
        return value === searchValue;
    });
}

function findInObj(arr, key, searchValue) {
    return arr.find(function(obj) {
        return obj[key] === searchValue;
    });
}

function removeVowels(str) {
    return str.toLowerCase().replace(/[aeiou]/g, '');
}

function doubleOddNumbers(arr) {
    return arr.filter(function(value) {
        return value % 2 !== 0;
    }).map(function(value) {
        return value * 2;
    });
}