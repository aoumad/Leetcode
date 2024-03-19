function myAtoi(s: string): number {
    let i = 0;
    let sign = 1;
    let result = 0;

    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    // Trim leading whitespace
    while (s[i] === ' ')
        i++;

    if (s[i] === '-' || s[i] === '+')
        sign = (s[i++] === '-' ? -1 : 1);

    while (i < s.length && /\d/.test(s[i])) // \d is a shorthand character class that represent digits
    {
        const digit = parseInt(s[i++]);

        // handle the overflow
        if ((result * 10) + digit > Math.floor(Number.MAX_SAFE_INTEGER))
            return (sign === 1) ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;

        if ((result * 10) + digit > MAX_INT || (result * 10) + digit < MIN_INT)
            return (sign === 1) ? MAX_INT : MIN_INT;

        result = result * 10 + digit;
    }

    return (sign * result);
};

// console.log(myAtoi("-2147483646"));