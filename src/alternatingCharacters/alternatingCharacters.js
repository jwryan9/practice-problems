const alternatingCharacters = (s) => {
    const strArr = s.split('');

    return strArr.reduce(
        (count, char, index) =>
            char === strArr[index + 1] ? count + 1 : count,
        0
    );
};

export default alternatingCharacters;
