function  gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}  


// GCD formula: GCD(a, b) = GCD(b, a mod b)

// devide the larger number by smaller number
// take remainder
// now, divide smaller number by remainder
// repeat the process until remainder is 0
// when remainder is 0, smaller number at that point is GCD
// eg GCD(12, 18) = GCD(18, 12) = GCD(12, 6) = GCD(6, 0) = 6