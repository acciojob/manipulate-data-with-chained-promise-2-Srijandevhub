//your JS code here. If required.
const output = document.getElementById("output");
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}
function filterEvens(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = numbers.filter((num) => num % 2 === 0);
      output.textContent = `${evens.join(', ')}`;
      resolve(evens);
    }, 1000);
  });
}
function multiplyEvens(evens) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = evens.map((num) => num * 2);
      output.textContent = `${multiplied.join(', ')}`;
      resolve(multiplied);
    }, 2000);
  });
}
getNumbers()
  .then((numbers) => filterEvens(numbers))
  .then((evens) => multiplyEvens(evens))
  .catch((error) => {
    output.textContent = `Error: ${error.message}`;
});