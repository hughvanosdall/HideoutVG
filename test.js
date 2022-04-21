var isPalindrome = function(x) {
    let isPalindrome = x.toString().split("").join("") === x.toString().split("").reverse().join("")
        ? true : false;

    return isPalindrome;
};