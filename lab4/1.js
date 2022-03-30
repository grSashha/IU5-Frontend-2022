/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let copy_arr = arr.slice(0, arr.length);
    let res = [];
    for (let i = 0; i < copy_arr.length; i++) {
       let temp = [];
       temp.push(copy_arr[i]);
       let arr_copy_str2;
       let copy_str2;
       for (let j = i + 1; j < copy_arr.length; j++) {
           if (copy_arr[i].length === copy_arr[j].length) {
                let str1 = copy_arr[i].toLowerCase();
                let str2 = copy_arr[j].toLowerCase();
                copy_str2 = str2;
                //---------------------------------------
                for (let k = 0; k < str1.length; k++) {
                    for (let s = 0; s < str1.length; s++) {
                        if (str1[k] === str2[s]) {
                            copy_str2 = copy_str2.replace(str2[s], '_');
                        }
                        else continue;
                    }
                }
                //---------------------------------------
            }
            else continue;
            arr_copy_str2 = copy_str2.split('');
            if (arr_copy_str2.every(elem => elem === '_') && copy_arr[j].length > 0) temp.push(copy_arr[j]);
        }
        if (temp.length > 0 && temp[0].length > 0) res.push(temp);
        for (let m = 0; m < temp.length; m++)
            for (let b = 0; b < copy_arr.length; b++)
                if (temp[m] === copy_arr[b]) {
                    delete copy_arr[b];
                    copy_arr[b] = "";
                }
    }
    return res;
}

module.exports = getAnagramms;
