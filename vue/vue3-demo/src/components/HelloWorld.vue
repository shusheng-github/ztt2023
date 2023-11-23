<!--
 * @Date: 2023-10-31 11:15:26
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-20 19:22:34
 * @FilePath: /2023/vue/vue3-demo/src/components/HelloWorld.vue
-->
<template>
    <button id="text" @click="push">{{ count }}</button>
</template>

<script>
import { ref, nextTick } from "vue";
export default {
    name: "App",
    setup() {
        const count = ref(0);
        const push = () => {
            count.value++;
            const ids = document.getElementById("text");
            console.log("ids :>> ", ids.innerHTML);
            nextTick(() => {
                const ids = document.getElementById("text");
                console.log("ids-nextTick :>> ", ids.innerHTML);
            });
            // nextTick(() => {
            //     console.log("callback after");
            // }).then(() => {
            //     console.log("promise after");
            // });
        };

        // nextTick(() => {
        //     console.log("2121 :>> ", 2121);
        // });
        return { count, push };
    }
};
</script>
