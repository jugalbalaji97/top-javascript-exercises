const fibonacci = function(n, sum=1, prev=0) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return sum;
    else {
        [prev, sum] = [sum, sum + prev];
        return fibonacci(n-1, sum, prev);
    }
};

// Do not edit below this line
module.exports = fibonacci;
