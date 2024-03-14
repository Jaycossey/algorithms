// const reverse = require('../reverse/index');
// const sum = require('../sum/sum');
// const fizzBuzz = require('../fizzBuzz/fizzBuzz');
const palindrome = require('../palindrome/palindrome');

// // Reverse String
// test(`Reverses string`, () => {
//     expect(reverse("Hello"))
//         .toBe("olleH")
//     expect(reverse("W0rld"))
//         .toBe("dlr0W");
// })

// // Sum 
// test(`Returns sum 1 + 2 to equal 3`, () => {
//     expect(sum(1, 2))
//         .toBe(3);
// })

// // FizzBuzz
// test(`FizzBuzz algorithm, returns fizz on x3, buzz on x5 and fizzBuzz if both`, () => {
//     expect(fizzBuzz(15))
//         .toStrictEqual([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzBuzz"]);
// })

// Palindrome
test(`If palindrome, returns true, else returns false`, () => {
    expect(palindrome("level"))
        .toBe(true);
    expect(palindrome("RaCEcar"))
        .toBe(true);
    expect(palindrome("RaC Ec ar"))
        .toBe(true);
    expect(palindrome("hello world"))
        .toBe(false);
})
