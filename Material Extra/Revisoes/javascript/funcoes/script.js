const array = [6, 7, 8, 9, 10];

function dividePorDois1(arr) {
    const primeiro = arr[0] / 2;
    const ultimo = arr[arr.length - 1] / 2;

    arr[0] = primeiro;
    arr[arr.length - 1] = ultimo;

    return arr;
}

const dividePorDois2 = function(arr) {
    const primeiro = arr[0] / 2;
    const ultimo = arr[arr.length - 1] / 2;

    arr[0] = primeiro;
    arr[arr.length - 1] = ultimo;

    return arr;
}

const dividePorDois3 = (arr) => {
    const primeiro = arr[0] / 2;
    const ultimo = arr[arr.length - 1] / 2;

    arr[0] = primeiro;
    arr[arr.length - 1] = ultimo;

    return arr;
}

console.log(dividePorDois1(array));
console.log(dividePorDois2(array));
console.log(dividePorDois3(array));