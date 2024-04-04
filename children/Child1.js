export default function Child1(title, callback) {
  const element = document.createElement("h2");
  element.innerHTML = `${title}`;

  callback.subscribe("ice", (e) => {
    element.innerHTML = `Ice : ${e}`;
  });

  callback.subscribe("fire", (e) => {
    element.innerHTML = `Fire : ${e}`;
  });

  return element;
}
