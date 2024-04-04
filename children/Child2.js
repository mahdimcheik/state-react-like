export default function Child2(titre, callback, type) {
  const handleClick = () => {
    const randomValue = Math.random() * 10;
    callback.emit(type, randomValue);
  };
  const container = document.createElement("div");

  const title = document.createElement("h2");
  title.innerHTML = `${titre}`;

  const btn = document.createElement("button");
  btn.innerHTML = "Change something";
  btn.addEventListener("click", () => {
    handleClick();
  });

  container.append(title, btn);

  return container;
}
