import "./styles.css";

/* Flatten a nested array
Input: [1, [2, [3, 4], 5]] → Output: [1, 2, 3, 4, 5] */

const input = [1, [2, [3, 4], 5]];

const solution = input.flat(Infinity);

const test = 2;

document.getElementById("app").innerHTML = `
<h1>Invterview  Questions</h1>
The result output is : ${solution}
The result output Type is : ${typeof solution}

`;
