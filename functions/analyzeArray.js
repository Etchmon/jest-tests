const analyzeArray = (arr) => {
    const arrObject = {
        average: (arr.reduce((pSum, a) => pSum + a, 0) / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };

    return arrObject;
};

export default analyzeArray;