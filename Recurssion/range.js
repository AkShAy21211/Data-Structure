function rangeExclusive(a,b){
    if (b - a <= 1) {
        return [];
    }
    return [a + 1].concat(this.rangeExclusive(a + 1, b));
}


function rangeInclusive(a,b){
    if (a > b) {
        return [];
    }
    return [a].concat(this.rangeInclusive(a + 1, b));
}


function rangeInclusiveTCO(a, b, acc = []) {
    if (a > b) {
        return acc;
    }
    acc.push(a);
    return rangeInclusiveTCO(a + 1, b, acc);
}
