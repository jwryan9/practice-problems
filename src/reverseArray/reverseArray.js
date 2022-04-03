export default (arr) => arr.reduce((acc, curr) => [curr, ...acc], []);
