// boolean function to determine if a string is a palindrome
const palindrome = (string) => {
    // dupe of string to lower
    const strDupe = string.toLowerCase();
    // remove whitespace
    let strCopy = strDupe.replace(/\s/g, "");

    // loop through string in reverse
    for (let i = strCopy.length - 1; i >= 0; i--) {
        // compare equality of string through reverse order
        if (strCopy[i] !== strCopy[strCopy.length - i - 1]) return false;
    }

    return true;
}

// export module
module.exports = palindrome;