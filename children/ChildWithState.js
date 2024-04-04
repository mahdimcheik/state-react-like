import SingleTaskEvent from "../events/SingleTaskEvent.js";

export default function ChildWithState(title) {
  const innerEvent = new SingleTaskEvent();

  let [state, setState] = ["my state", callback];
  function callback(data) {
    state = data;
    innerEvent.emit(data);
  }
  const element = document.createElement("h2");

  element.innerHTML = `${title} and state ${state}`;

  innerEvent.subscribe(() => {
    element.innerHTML = `${title} and state ${state}`;
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
      setState("new State");
    });
    element.appendChild(btn);
    btn.innerHTML = "change state";
  });
  const btn = document.createElement("button");
  btn.addEventListener("click", () => {
    callback("new State");
  });
  element.appendChild(btn);
  btn.innerHTML = "change state";

  return element;
}
