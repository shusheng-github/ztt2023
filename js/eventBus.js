class EventBus {
  constructor(options) {
    this.eventObject = {};
    this.callback = [];
    this.instance = null;
  }
  subscribe (eventName, callback) {
    if (!this.eventObject[eventName]) {
      this.eventObject[eventName] = [];
    }
    this.eventObject[eventName].push(callback)
  }
  unSubscribe (eventName) {
    delete this.eventObject[eventName];
  }
  publish (eventName, ...args) {
    const callbackList = this.eventObject[eventName];
    if (!callbackList) return console.warn(eventName + " not found!");
    for (let fn of callbackList) {
      fn(...args)
    }
  }
  static getInstance () {
    if (!this.instance) {
      this.instance = new EventBus();
    }
    return this.instance
  }
}

// 测试
const eventBus = EventBus.getInstance();

// 订阅事件eventX
eventBus.subscribe("eventX", (args) => {
  console.log("模块A", args);
});
eventBus.subscribe("eventX", () => {
  console.log("模块B");
});
eventBus.subscribe("eventX", () => {
  console.log("模块C");
});

// 发布事件eventX
eventBus.publish("eventX", { name: 'haha' });
// eventBus.unSubscribe('eventX');
// eventBus.publish("eventX");