document.write(`2. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!<br>`);

const objectTask2 = {
    userVar : parseInt(prompt("Enter some number", 1,2,3)),

    getResult : (number) => {
            if(number > 0){
                document.write(`1<br>`);
            } else if ( number <=0){
                document.write(`2<br>`);
            } else {
                throw new Error(`It's not a number`);
            }

    }
}

let ggg = objectTask2.getResult(objectTask2.userVar);
