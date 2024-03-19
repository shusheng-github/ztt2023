<!--
 * @Date: 2023-10-31 11:15:26
 * @LastEditors: Shusheng
 * @LastEditTime: 2024-03-07 22:57:31
 * @FilePath: /2023/vue/vue3-demo/src/components/HelloWorld.vue
-->
<template>
  <button id="text" @click="push">{{ count }}</button>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
</template>

<script>
import { ref, nextTick, reactive } from "vue";
export default {
  name: "App",
  setup () {
    const count = ref(0);
    const push = () => {
      a = '66'
      b.name='33'
      console.log('a', a)
    };
    let { a, b } = reactive({
      a: 1,
      b: { name: '小明' }
    })
    a = 33
    b.name = 'xiao'
    console.log('a', a)
    console.log('b', b)

    // nextTick(() => {
    //     console.log("2121 :>> ", 2121);
    // });
    return { count, push, a, b };
  }
};
</script>
