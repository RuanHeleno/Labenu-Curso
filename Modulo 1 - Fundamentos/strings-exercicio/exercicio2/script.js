const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim();

console.log(`Original string: ${minhaString.length}
Trim string: ${minhaStringTrim.length}
Replace string: ${minhaStringTrim.replace("________", "sticioso")}
`);