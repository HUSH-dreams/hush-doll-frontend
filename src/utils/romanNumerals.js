/**
 * Преобразует число в римскую цифру.
 * @param {number} num Число для преобразования.
 * @returns {string} Римская цифра или исходное число в виде строки, если преобразование невозможно.
 */
export const toRoman = (num) => {
    if (num < 1 || num > 3999) {
        console.warn(`Число ${num} находится вне диапазона (1-3999) для римских цифр.`);
        return String(num);
    }
    const numerals = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let roman = '';

    for (let i in numerals) {
        while (num >= numerals[i]) {
            roman += i;
            num -= numerals[i];
        }
    }

    return roman;
};