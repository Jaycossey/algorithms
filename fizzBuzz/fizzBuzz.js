// fizzBuzz is a childrens maths game, count in +1 increments, 
// if multiple of 3, then fizz
// multiple of 5, buzz
// both return fizzBuzz

// fizzBuzz algorithm, takes highest num as param
const fizzBuzz = (num) => {
    // duplication of num to avoid mutation
    const numCopy = num;
    // variables to determine comparisons
    const fizz = 3;
    const buzz = 5;

    // array to store result of return value
    let result = [];

    // iterate up to input number
    for (let i = 1; i <= num; i++) {
        // if divisible by both fizz and buzz
        if (i % fizz === 0 && i % buzz === 0) {
            // push to array
            result.push("fizzBuzz");
        // if divisible by fizz
        } else if (i % fizz === 0) {
            result.push("fizz");
        // if divisible by buzz
        } else if (i % buzz === 0) {
            result.push("buzz");
        // if not divisible
        } else {
            result.push(i);
        }
    }
    // returns result array
    return result;
}

module.exports = fizzBuzz;