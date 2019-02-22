// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return {};
    }
    var H = Math.floor(currency / 50);
    currency = currency - H * 50;
    console.log('H: ' + H);
    console.log('curen: ' + currency);
    var Q = Math.floor(currency / 25);
    currency = currency - Q * 25;
    var D = Math.floor(currency / 10);
    currency = currency - D * 10;
    var N = Math.floor(currency / 5);
    currency = currency - N * 5;
    var P = Math.round(currency);
    if (H > 0) {
        result.H = H;
    }
    if (Q > 0) {
        result.Q = Q;
    }
    if (D > 0) {
        result.D = D;
    }
    if (N > 0) {
        result.N = N;
    }
    if (P > 0) {
        result.P = P;
    }
    return result;

}
