document.write(`2. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!<br>`);

const objectTask2 = {
    userVar: parseInt(prompt("Enter some number", 1, 2, 3)),

    getResult: (number) => {
        if (number > 0) {
            return function () { return 1 }
        } else if (number <= 0) {
            return function () { return 2 }
        } else {
            throw new Error(`It's not a number`);
        }

    }
}

const ggg = objectTask2.getResult(1);

console.log(ggg());
