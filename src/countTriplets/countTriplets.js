const countTriplets = (arr, r) => {
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(Number.isInteger))
        return 0;

    let count = 0;

    const after = arr.reduce((acc, curr) => {
        if (curr in acc) acc[curr] += 1;
        else acc[curr] = 1;
        return acc;
    }, {});

    const before = {};
    arr.forEach((item) => {
        after[item] -= 1;
        if (item / r in before && item % r === 0 && item * r in after)
            count += before[item / r] * after[item * r];
        if (item in before) before[item] += 1;
        else before[item] = 1;
    });

    return count;
};

export default countTriplets;
