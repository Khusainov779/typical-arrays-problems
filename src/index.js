exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let minValue = Math.min.apply(null, array);
    return minValue;
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let maxValue = Math.max.apply(null, array);
    return maxValue;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let sumValue = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return (avgValue = sumValue / array.length);
};
