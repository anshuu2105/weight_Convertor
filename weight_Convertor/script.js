const input = document.getElementById("pounds");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const pounds = parseFloat(input.value);
  if (!isNaN(pounds)) {
    const kilograms = (pounds * 0.453592).toFixed(2);
    result.textContent = `Your weight in kg is: ${kilograms}`;

    // Clear result and input after 10 seconds
    setTimeout(() => {
      result.textContent = "";
      input.value = "";
    }, 10000);
  } else {
    result.textContent = "";
  }
});
