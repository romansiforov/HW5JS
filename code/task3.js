document.write(`Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. 
Поверніть результатом функції ggg суму 3 та 4.<br>`);


function ggg(fn1, fn2) {
    return fn1() + fn2();
}

let someResultTask3 = ggg(function () { return 3 }, function () { return 4 });

document.write(`The result = ${someResultTask3}`);