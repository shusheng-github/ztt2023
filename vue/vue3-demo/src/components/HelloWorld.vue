<template>
  {{ fullName }}
  <button @click="changeName">change</button>
</template>
 
<script>
import { computed, reactive } from 'vue';
export default {
  name: 'App',
  setup () {
    const names = reactive({
      firstName: '冲啊',
      lastName: '迪迦奥特曼'
    });
    // 会返回一个ref对象
    const fullName = computed({
      set (newValue) {
        console.log('setter', newValue)
        const tempNames = newValue.split(' ');
        names.firstName = tempNames[0];
        names.lastName = tempNames[1];
      },
      get () {
        console.log('getter')
        return names.firstName + '2121' + names.lastName;
      }
    });
    // 设置值
    const changeName = () => {
      console.log('fullName.value', fullName.value)
      fullName.value = '66666 88888';
    };

    return {
      fullName,
      changeName
    };
  }
};
</script>