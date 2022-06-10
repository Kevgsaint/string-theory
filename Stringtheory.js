


function xify(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + "x";
    }
    return newStr;
}
console.log(xify("hello"));
console.log(xify("hi there"));


function yellingChars(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let exclamation = "!";
        newStr = newStr + str[i] + exclamation;

    }

    return newStr
}
console.log(yellingChars("loud noises"));


function indexedChars(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + i + str[i];
    }

    return newStr
}

console.log(indexedChars("hello"));
console.log(indexedChars("bye"));



function exclaim(str)  {
   let newStr = ""

   for (let i = 0; i < str.length; i++){
   if (str[i] === "?" || str[i] === "."){
   newStr = newStr + "!"
   } else {
       newStr = newStr + st[i]
   }
   }
     return newStr
}

console.log(exclaim("What are you doing? Are you a fool?"))
console.log(exclaim("This is fine"))



function truncate(str) {
    let newStr = "";
    for (let i = 0; i < 15; i++) {
        newStr = newStr + str[i]
    }
    if (str.length >= 15) {
        newStr = newStr + "..."
    }
    return newStr
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));



function ciEmailify(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr = newStr + "."
        } else {
            newStr = newStr + str[i]
        }

    }
    newStr = newStr + "@codeimmersives.com"
    return newStr


}
console.log(ciEmailify("colin jaffe"))
console.log(ciEmailify("Anthony DeRosa"))



function reverse(str) {
    let newStr = "";

    
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr
}

console.log(reverse("colin"));
console.log(reverse("mesuara"));



function onlyVowels(str) {

    let newStr = "";

    for (let i = 0; i < str.length; i++) { 
        if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
            newStr = newStr + ""
        } else {
            newStr = newStr + str[i]
        }


    }
    return newStr
}
console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));