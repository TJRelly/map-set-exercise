// # **Maps and Sets Exercise**

// ## **Quick Question #1**

// What does the following code return?

// ```jsx
// console.log(new Set([1,1,2,2,3,4])) // {1, 2, 3, 4}
// ```

// ## **Quick Question #2**

// What does the following code return?

// ```jsx
console.log([...new Set("referee")].join("")) // ref
// ```

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

// ```jsx
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m)
// {[1,2,3] => true, [1,2,3] => false}



// ```

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// ```jsx
const hasDuplicate = (arr) => arr.length !== new Set(arr).size

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false
// ```



// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// ```jsx
console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }

function vowelCount(str) {
    const vowels = "aeiou"
    return [...str].reduce((map, curr) => {
        if(vowels.includes(curr.toLowerCase())) {
            !map.has(curr) ? map.set(curr, 1) : map.set(curr, map.get(curr) + 1)
        }
        return map
    }, new Map)
}