import { reactive } from "./vue3/reactive";

const state = reactive({
  name: '小米南瓜',
  age: 12,
  info: {
    job: '2121'
  },
  hobby: ['we', 'dsd', '3232']
})
state.hobby.push('ewewew')