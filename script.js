const output = document.getElementById("output");
const button = document.getElementById("btn");

function delayFunc(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function display() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);

  await delayFunc(delay); // wait for delay in ms
  output.textContent = text;
}

button.addEventListener("click", display);
