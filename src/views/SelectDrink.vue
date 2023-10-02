<script setup lang="ts">
import TopBarVue from "../components/TopBar.vue"
import axios from "axios";
import { onMounted } from "vue";
let items: Array<object> = []
onMounted(() => {
  axios.get("/home/getdata").then((res) => {
    items = res.data.tableData
  })
})
function minWidth(str: string) {
  return str.length * 18 + 15
}

function add() {
}
</script>

<template>
  <TopBarVue/>
  <div class="title">
    <span>點餐紀錄</span>
    <el-button type="success" class="add-btn" @click="add">+</el-button>
  </div>
  <br/>
  <el-table 
    :data="items"
    :key="items"
  >
    <el-table-column label="名稱" align="center" :min-width="minWidth('名稱')" prop="order" ></el-table-column>
    <el-table-column label="尺寸" align="center" :min-width="minWidth('尺寸')" prop="size"></el-table-column>
    <el-table-column label="價格" align="center" :min-width="minWidth('價格')" prop="cost"></el-table-column>
    <el-table-column label="店家" align="center" :min-width="minWidth('店家')" prop="store"></el-table-column>
    <el-table-column label="上次點單時間" align="center" :min-width="minWidth('上次點單時間')" prop="lastOrderTime"></el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.title {
  padding: 50px 0px;
  border-bottom: 1px solid #1a1a1a;
  span {
    font-size: 36px;
  }

  .add-btn {
    float: right;
    margin: {
      top: 15px;
      right: 10px;
    }
  }
}
</style>