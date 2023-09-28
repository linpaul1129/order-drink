<script setup lang="ts">
import TopBarVue from "../components/TopBar.vue"

const items: Array<object>= [
  { order: '多多綠', size: 'L', cost: 55, store:'50嵐', lastOrderTime: '2023-09-28' },
  { order: '大甲芋頭鮮奶', size: 'L', cost: 90, store:'迷客夏', lastOrderTime: '2023-09-01' }
]
function minWidth(str: string) {
  return str.length * 18 + 15
}
</script>

<template>
  <TopBarVue/>
  <div class="title">
    <span>點餐紀錄</span>
  </div>
  <br/>
  <el-table 
    :data="items" 
    :cell-style="{ textAlign: 'center', lineHeight: '48px'}"
  >
    <el-table-column label="名稱" :min-width="minWidth('名稱')" prop="order" ></el-table-column>
    <el-table-column label="尺寸" :min-width="minWidth('尺寸')" prop="size"></el-table-column>
    <el-table-column label="價格" :min-width="minWidth('價格')" prop="cost"></el-table-column>
    <el-table-column label="店家" :min-width="minWidth('店家')" prop="store"></el-table-column>
    <el-table-column label="上次點單時間" :min-width="minWidth('上次點單時間')" prop="lastOrderTime"></el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.title {
  padding: 50px 0px;
  border-bottom: 1px solid #1a1a1a;
  span {
    font-size: 36px;
  }
}
</style>