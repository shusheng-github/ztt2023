<template>
  <div ref="listRef" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div ref="items" class="infinite-list-item" v-for="item in visibleData" :key="item.id"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">{{ item.value }}</div>
    </div>
  </div>

</template>
<script setup>
import { ref, computed, onMounted } from 'vue'

const listData = ref([]);
const itemSize = ref(200);
const listRef = ref(null);
// 可视区域的高度
const screenHeight = ref(0);
// 偏移量
const startOffset = ref(0);
//起始索引
const start = ref(0);
//结束索引
const end = ref(null);

// 列表总高度
const listHeight = computed(() => {
  return listData.value.length * itemSize.value;
});

//可显示的列表项数
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / itemSize.value);
});

//偏移量对应的style
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
})

//获取真实显示列表数据
const visibleData = computed(() => {
  return listData.value.slice(start.value, start.value + visibleCount.value);
})

onMounted(() => {
  listData.value = Array.from({ length: 10000 }).map((item, index) => {
    return {
      id: index,
      value: index
    }
  })
  console.log('screenHeight.value', listRef.value.clientHeight)
  screenHeight.value = listRef.value.clientHeight;
  start.value = 0;
  end.value = start.value + visibleCount.value;
})

const scrollEvent = (e) => {
  // 滚动位置
  let scrollTop = listRef.value.scrollTop;
  start.value = Math.floor(scrollTop / itemSize.value);
  end.value = start.value + visibleCount.value;
  startOffset.value = scrollTop - (scrollTop % itemSize.value);
  console.log('startOffset.value', startOffset.value)
}

</script>
<style scoped>
.infinite-list-container {
  width: 300px;
  height: 500px;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  border: 1px solid black;
  box-sizing: border-box;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
  background: aquamarine;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
