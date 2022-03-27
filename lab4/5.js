/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

// проверяет тип скобки (закрывающая - false, открывающая - true)
function fn(ch, obj_arg) {
    let res = true;
    for (let e in obj_arg) {
        if (ch == e) {
            res = true;
            return res;
            break;
        }
    }
    for (let e in obj_arg) {
        if (ch == obj_arg[e]) {
            res = false;
            return res;
            break;
        }
    }
    return res;
}

function checkBrackets(str) {
    let res = true, arr = [];
    let obj = {'[': ']', '{': '}', '<': '>', '(': ')'};
    for (let i = 0; i < str.length; i++)
        for (let e in obj)
            if ((str[i] == obj[e]) || (str[i] == e)) arr.push(str[i]);
    if (!(fn(arr[0], obj))) res = false;

    if (res == false) return res;
    else {
        for (let k = 0; k < arr.length; k++) {
            if (fn(arr[k], obj)) {
                let m = 0, b = k;
                for (let j = k+1; j < arr.length; j++) {
                    let a = j;
                    if (fn(arr[j], obj)) {
                        m++;
                        continue;
                    }
                    else if (m == 0) {
                        if (obj[arr[k]] == arr[j]) {
                            arr[j] = '_';
                            arr[k]= '_';
                        }
                        break;
                    }
                    else m--;
                }
            }
        }
    }
    let flag = true;
    arr.forEach((element) => {
        if (element != '_') flag = false;
    });
    if (arr.length == 0) return true;
    else return flag;
}

module.exports = checkBrackets;