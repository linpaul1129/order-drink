// 解決vue3 找不到模組報錯 造成原因 => Typescript 只理解.ts 不能理解.vue
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
