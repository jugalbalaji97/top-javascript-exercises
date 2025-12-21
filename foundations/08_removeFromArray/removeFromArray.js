const removeFromArray = function(arr, ...elementsToRemove) {
    return arr.filter((num) => !elementsToRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
