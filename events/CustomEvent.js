export default class CustomEvent {
  listeners = {};
  constructor() {
    this.listeners = {};
  }
  subscribe(eventName, someFunction) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [someFunction];
      return;
    }
    this.listeners[eventName].push(someFunction);
  }
  emit(eventName, data) {
    const listeners = this.listeners[eventName];
    listeners &&
      Array.isArray(listeners) &&
      listeners.map((listenr) => {
        listenr.call(null, data);
      });
  }
  unsubscribeAll(eventName) {
    this.listeners[eventName] = undefined;
  }
  unsubscribe(eventName, someFunction) {
    const funcs = this.listeners[eventName];

    const filteredFuncs = funcs.filter(
      (func) => func.toString() !== someFunction.toString()
    );

    this.listeners[eventName] = filteredFuncs;
  }
}
