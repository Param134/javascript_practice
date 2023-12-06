function outer(){
    let secureKey = 1234;

    function inner_getKey(){
        return secureKey;
    }

    return inner_getKey
}

let getKey = outer()
console.log(getKey());