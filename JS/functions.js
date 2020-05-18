function isValidPassword(password, username) {
    // if (password.length >= 8) {
    //     for (let ch of password) {
    //         if (ch === ' ')
    //             return false;
    //     }
    //     if (password.includes(username))
    //         return false;
    //     return true;
    // } else {
    //     return false;
    // }
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const hasUserName = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || hasUserName)
        return false;
    return true;
}

console.log('password validation');
console.log(isValidPassword("89Fjj1ms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123", "dogLuvr"));
console.log(isValidPassword("hello 1", "dogLuvr"));

function averageInArray(arr) {
    let total = 0;
    for (let num of arr)
        total += num;
    return total / arr.length;
}

console.log('average finder');
console.log(averageInArray([0, 50]));
console.log(averageInArray([75, 76, 80, 95, 100]));

function isPangram(str) {
    str = str.toLowerCase().trim();
    alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabets) {
        if (str.indexOf(letter) === -1)
            return false;
    }
    return true;
}

console.log('pangram checker');
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));
console.log(isPangram('The quick brown fox jumps over the lazy dog'));

function getCard() {
    obj = {}
    value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    obj.value = value[Math.floor(Math.random() * 13)];
    suits = ['clubs', 'spades', 'hearts', 'diamonds']
    obj.suits = suits[Math.floor(Math.random() * 4)]
    return obj;
}

console.log('card getter');
console.log(getCard());
console.log(getCard());
console.log(getCard());