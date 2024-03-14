// reverse given string or number set
const reverse = (string) => {
    // duplicate string to avoid mutating original
    const strCopy = string;
    // storage for reversed string
    let revStr = "";

    // loop through copy in reverse order
    for (let i = strCopy.length - 1; i >= 0; i--) {
        // assign chars to string
        revStr += strCopy[i];
    }
    // return reversed string
    return revStr;
}

// export module for testing 
module.exports = reverse;

/**
 * Examples: 
 * 
 *  Input: "Hello"
 *  Output: "olleH"
 * 
 *  Input: "W07ld"
 *  Output: "dl70W"
 */