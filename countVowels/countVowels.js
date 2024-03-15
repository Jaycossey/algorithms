// count total vowels within a string
const countVowels = (string) => {
    // duplicate string to avoid mutation
    const strCopy = string;
    // initialize count
    let count = 0;

    // brute force solution, will need reoptimizing 
    for (let i = 0; i < strCopy.length; i++) {
        // switch case, avoids searching an array for possible vowels
        switch(strCopy[i]) {
            case "a" || "A":
                count++;
                break;
            case "e" || "E":
                count++;
                break;
            case "i" || "I":
                count++;
                break;
            case "o" || "O":
                count++;
                break;
            case "u" || "U": 
                count++;
                break;
            default: 
                break;
        }
    }
    return count;
}

// countVowels("Hello World");
module.exports = countVowels;