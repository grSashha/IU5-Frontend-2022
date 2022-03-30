/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let flag = true;
    let copy1_str = str.split('');
    let copy2_str = copy1_str.slice(0, copy1_str.length);
    copy2_str.reverse();
    for (let i = 0; i < copy1_str.length; i++){
        if (copy1_str[i] === copy2_str[i]) continue;
        else {
            flag = false;
            break;
        }
    }
    if (flag) return true;
    else return false;
}

module.exports = isPalindrome;
