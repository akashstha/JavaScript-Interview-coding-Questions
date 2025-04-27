import "./styles.css";

/* * Check for PalindromeInput: "racecar" → Output: true */

const input = "raceCar@#";

const reverse = input
  .replace(/[^a-zA-Z0-9]/g, "")
  .toLowerCase()
  .split("")
  .reverse()
  .join("");

const solution = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === reverse;

document.getElementById("app").innerHTML = `
<h1>Interview Questions!</h1>
<p>solutions is : ${solution}</p>
`;
