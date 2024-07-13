function checkString(i, s, sign) {
    let result = 0;
    let dec = "0123456789";
    while (s[i] === '0') i++;
    while (dec.includes(s[i])) {
        result *= 10;
        result += parseInt(s[i++]);
    }
    if (result * sign < -2147483648) return -2147483648;
    else if (result * sign > 2147483647) return 2147483647;
    else return result * sign;
}

var myAtoi = function(s) {
    let sign = 1;
    for (let i = 0; i < s.length; i++) {
        if (!"0123456789-+ ".includes(s[i])) return 0;
        if (s[i] === " ") continue;
        if (s[i] === "-" || s[i] === "+") {
            if (s[i] === "-") sign = -1;
            return checkString(i+1, s ,sign);
        } else {
            return checkString(i, s, sign);
        }
    }
    return 0;
};