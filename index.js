import ChildWithState from "./children/ChildWithState.js";
import CustomEvent from "./events/CustomEvent.js";

const root = document.querySelector(".root");

root.appendChild(ChildWithState("my title"));
