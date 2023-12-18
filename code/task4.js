document.write(`4.Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.<br>`);


function  isEmpty(obj){
    for(let iterator in obj){
        return false;
    }
    return true;
}

let object1 = new Object();

let object2 = {
    userName : "Roman"
};

document.write(`This object is empty ${isEmpty(object1)}<br>`);

document.write(`This object has properties ${isEmpty(object2)}<br>`);