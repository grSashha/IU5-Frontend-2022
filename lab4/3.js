/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let res = "", i = 0, copy_str = str.slice(0, str.length);
    while (i < str.length) {
        let reg =  new RegExp(str[i] + "+", 'g');
        let a = reg.exec(copy_str);
        if (a[0].length > 1) {
            res = res + str[i] + a[0].length;
            copy_str = copy_str.replace(str.slice(i, i+a[0].length), '_');
            i = i + a[0].length;
        }
        else if (a[0].length <= 1) {
            res = res + str[i];
            copy_str = copy_str.replace(str.slice(i, i+1), '_');
            i++;
        }
    }
    return res;
}

module.exports = rle;
