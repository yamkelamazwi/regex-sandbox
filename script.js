const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");

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
  } else {
    testResult.textContent = "no match";
  }
});

resetButton.addEventListener("click", () => {
  regexPattern.value = "";
  stringToTest.textContent = "";
  testResult.textContent = "";
});
