import Vue from 'vue'
let vm = new Vue({
  el: '#app',
  data () {
    return {
      title: '我的这是数据',
      total: 2,
      students: [
        { name: '1', age: 20 },
        {
          name: '2', age: 30
        }],
      teacher: ['张三', '李四'],
      info: {
        a: {
          b: 1
        }
      }
    }
  }
})
console.log('vm', vm)