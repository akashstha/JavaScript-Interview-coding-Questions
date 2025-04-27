import "./styles.css";
/* * Reverse a stringInput: "hello" → Output: "olleh" */

const input = "hello";
const solution = input.split("").reverse().join("");

document.getElementById("app").innerHTML = `
<h1>Interview Questions</h1>
<p>Solution is : ${solution}</p>
`;
