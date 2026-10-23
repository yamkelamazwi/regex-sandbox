const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const resetButton = document.getElementById("reset-btn");
const matchCount = document.getElementById("match-count");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const text = stringToTest.textContent;

  const regex = new RegExp(pattern, flags);

  const matches = text.match(regex);

  if (matches) {
    stringToTest.innerHTML = text.replace(
      regex,
      '<span class="highlight">$&</span>'
    );

    testResult.textContent = matches.join(", ");
    matchCount.textContent = `Matches Found: ${matches.length}`;

    testResult.classList.remove("error");
    testResult.classList.add("success");
  } else {
    testResult.textContent = "no match";
    matchCount.textContent = "Matches Found: 0";

    testResult.classList.remove("success");
    testResult.classList.add("error");
  }
});

resetButton.addEventListener("click", () => {
  regexPattern.value = "";
  stringToTest.textContent = "";
  testResult.textContent = "";
  matchCount.textContent = "Matches Found: 0";

  testResult.classList.remove("success");
  testResult.classList.remove("error");
});
