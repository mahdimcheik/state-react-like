export default class SingleTaskEvent {
  constructor() {
    this.subscribers = [];
  }
  subscribe(someFunction) {
    if (!this.subscribers) {
      this.subscribers = [someFunction];
      return;
    }
    this.subscribers.push(someFunction);
    this.subscribers = [...new Set(this.subscribers)];
  }
  emit(data) {
    this.subscribers.map((subscriber) => subscriber(data));
  }
  unsubscribeAll() {
    this.subscribers = undefined;
  }
  unsubscribe(someFunction) {
    const filteredFuncs = this.subscribers.filter(
      (func) => func.toString() !== someFunction.toString()
    );

    this.subscribers = filteredFuncs;
  }
}
