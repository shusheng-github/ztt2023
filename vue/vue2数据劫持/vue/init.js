import proxyData from "./proxy";
import observe from './observe';

function initState (vm) {
  var options = vm.$options;
  if (options.data) {
    initData(vm)
  }
}

function initData (vm) {
  var data = vm.$options.data;
  // vue 不直接操作用户传入的data，复制给 _data 再操作
  // data 如果是函数则调用函数获取值，否则返回data对象
  vm._data = typeof data === 'function' ? data.call(vm) : data || {};
  data = vm._data
  // 做一层代理，原因：不做代理之前访问数据：vm._data.title,做代理之后访问数据vm.title,目的是去掉中间的_data,
  for (var key in data) {
    proxyData(vm, '_data', key)
  }
  observe(vm._data)
}

export {
  initState
}