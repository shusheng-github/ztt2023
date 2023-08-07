import observe from "./observe"

function defineReactiveData (data, key, value) {
  // 因为value有可能还是对象
  observe(value)
  Object.defineProperty(data, key, {
    get: function () {
      console.log('响应式数据获取', value)
      return value
    },
    set: function (newValue) {
      if (newValue === value) return;
      console.log('响应式数据设置', newValue)
      observe(newValue)
      value = newValue;
    }
  })
}

export default defineReactiveData