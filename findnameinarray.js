let data1 = [
    {
        name: "er",
        number: 22
    },
    {
        name: "as",
        number: 18
    },
    {
        name: "bo",
        number: 27
    },
    {
        name: "mo",
        number: 19
    },
    {
        name: "po",
        number: 20
    }
]


function findNumber(data, lookingName) {
    // return (data.filter((el) => el.name === lookingName ))[0].number
    return data.find((el) => el.name === lookingName).number
}

console.log(findNumber(data1, "as"))



function upper100() {
    let num = prompt("введите число больше 100", 0)
    if (num > 100) {
        return alert("good job")
    }
    else if (typeof num === "string" || null) {
        return "gg"
    } else {
        upper100()
    }
}
console.log(upper100())


function findPrimeNumber(n) {
    if (n > 1) {
        nextPrime:
        for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j) {
                    continue nextPrime
                }
            }
            console.log(i)
        }
    }
}
findPrimeNumber(10)