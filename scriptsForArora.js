let smartphones = [{
    announced: 1662508800000,
    manufacturer: "Apple",
    series: "iPhone",
    model: "14 Pro",
    sizeMb: 131072,
    color: "white"
}, {
    announced: 1662508800000,
    manufacturer: "Apple",
    series: "iPhone",
    model: "14 Pro Max",
    sizeMb: 262144,
    color: "purple"
}, {
    announced: 1665014400000,
    manufacturer: "Google",
    series: "Pixel",
    model: "7 Pro",
    sizeMb: 131072,
    color: "white"
}, {
    announced: 1655337600000,
    manufacturer: "Honor",
    series: "",
    model: "50",
    sizeMb: 131072,
    color: "white"
}, {
    announced: 1641859200000,
    manufacturer: "OnePlus",
    series: "",
    model: "10 Pro",
    sizeMb: 262144,
    color: "black"
}, {
    announced: 1645660800000,
    manufacturer: "Oppo",
    series: "Find",
    model: "X5 Pro",
    sizeMb: 262144,
    color: "white"
}, {
    announced: 1644364800000,
    manufacturer: "Samsung",
    series: "Galaxy",
    model: "S22 Ultra",
    sizeMb: 262144,
    color: "green"
}, {
    announced: 1650844800000,
    manufacturer: "Vivo",
    series: "",
    model: "X80 Pro",
    sizeMb: 262144,
    color: "blue"
}, {
    announced: 1640044800000,
    manufacturer: "Xiaomi",
    series: "",
    model: "12 Pro",
    sizeMb: 262144,
    color: "purple"
}];

// console.log(createNew("Apple/iPhone/14/128/black/07.09.2022"));
printTable();
console.log("Filter WHITE: " + printWithFilterColor("white"));
console.log("Filter AVG (GB): " + printSmartphonesAvgStorage());
console.log("Filter without series: " + printSmartphoneNames());
console.log("Filter by model: s22 ultRa");
console.log(findSmartphoneByModel("s22 ultRa"));
runTimer();
factor(5).then(result => {
    console.log("Factorial result " + result)
});

// Apple/iPhone/14/128/black/07.09.2022
function createNew(data) {
    let info = data.split("/");
    try {
        if (info.length < 6) throw new Error("[createNew] Недостаточно данных");

        let phone = {
            announced: timeToUNIX(info[5]),
            manufacturer: info[0],
            series: info[1],
            model: info[2],
            sizeMb: gbToMb(info[3]),
            color: info[4]
        }
        return phone;
    } catch (err) {
        console.error(err)
    }
}

function printTable() {
    if (smartphones.length < 1) {
        console.error("Массив пуст :c");
        return;
    }
    let template = smartphones[0];
    let header = "| # | ";
    Object.keys(template).forEach(key => {
        header += key + " | "
    })
    console.log(header);

    smartphones.forEach((elem, index) => {
        let body = "";
        for (const [key, value] of Object.entries(elem)) {
            body += value + " | "
        }
        console.log("| " + (index + 1) + " | " + body);
    })
}

function printWithFilterColor(filter) {
    let counter = 0;
    for (let index in smartphones) {
        if (smartphones[index].color === filter) counter++;
    }
    return counter;
}

function printSmartphonesAvgStorage() {
    return smartphones.filter(elem => elem.sizeMb)
        .map(elem => elem.sizeMb / 1024)
        .reduce((a, b) => a + b) / smartphones.length;
}

function printSmartphoneNames() {
    return smartphones.filter(elem => !elem.series)
        .map(elem => elem.manufacturer + " " + elem.model)
        .reduce((a, b) => a + "," + b);
}

function findSmartphoneByModel(filter) {
    return smartphones.filter(elem => elem.model.toLowerCase()===filter.toLowerCase())
        .map(elem => elem.model)

}

function gbToMb(gb) {
    return gb * 1024;
}

function timeToUNIX(time) {
    return Date.parse(time);
}

function runTimer() {
    var index = 0;
    var timer = setInterval(() => {
        let phone = smartphones[index];
        console.log("[TIMER] Производитель:" + phone.manufacturer + ", Серия: " + phone.series + ", Модель: " + phone.model);
        index++;
        if (index + 1 >= smartphones.length) clearInterval(timer);
    }, 1000)
}

function getFirst() {
    let phone = smartphones[0];
    return "Производитель:" + phone.manufacturer + ", Серия: " + phone.series + ", Модель: " + phone.model;
}

function setFirst(announced,
                  manufacturer,
                  series,
                  model,
                  sizeMb,
                  color) {
    let phone = smartphones[0];
    phone.announced = announced;
    phone.manufacturer = manufacturer;
    phone.series = series;
    phone.model = model;
    phone.sizeMb = sizeMb;
    phone.color = color;
}

async function factor(num) {
    if (num < 0)
        return -1;
    else if (num === 0)
        return 1;
    else {
        return (num * await factor(num - 1));
    }
}



// git 'https://github.com/kaizouman/gtest-cmake-example.git'

// pipeline { agent any stages { stage('code_obtain') { steps{  git 'https://github.com/kaizouman/gtest-cmake-example.git'}

//pipeline {
//            agent any
//           stages {
//               stage('code_obtain') {
//                   steps{
//                       git 'https://github.com/kaizouman/gtest-cmake-example.git'
//         }