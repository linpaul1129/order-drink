<script setup lang="ts">
import TopBarVue from "../components/TopBar.vue"
import { ElMessage } from "element-plus";
import { getOrderHistoryList, saveOrderItem } from '@/api/index'
import { ref, onMounted, reactive } from "vue";
const renew = ref(0)
const sizeList = ref<Array<{value: string}>>([
  { value: 'S'},
  { value: 'M'},
  { value: 'L'},
  { value: 'XL'}
])
const state = reactive({
  dialogview: false,
  title: '新增',
  data: [],
  dialogData: {
    order: '',
    size: '',
    cost: 0,
    store: ''
  }
})
onMounted(() => {
  init()
})

const init = () => {
  getOrderHistoryList().then((res) => {
    if (res.code === 200) {
      state.data = res.result.data
      renew.value++
      console.log(state.data)
    } else {
      ElMessage.error(res.message)
    }
  })
}

const minWidth = (str: string) => {
  return str.length * 18 + 15
}

const add = () => {
  state.dialogview = true
  state.title = '新增'
}

const closeDialog = () => {
  state.dialogview = false
}

const save = () => {
  console.log(state.dialogData)
  saveOrderItem(state.dialogData).then((res) => {
    if (res.code === 200) {
      ElMessage.success(res.message)
      init()
      state.dialogview = false
    }
  })
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
    :data="state.data"
    :key="renew"
  >
    <el-table-column label="名稱" align="center" :min-width="minWidth('名稱')" prop="order" ></el-table-column>
    <el-table-column label="尺寸" align="center" :min-width="minWidth('尺寸')" prop="size"></el-table-column>
    <el-table-column label="價格" align="center" :min-width="minWidth('價格')" prop="cost"></el-table-column>
    <el-table-column label="店家" align="center" :min-width="minWidth('店家')" prop="store"></el-table-column>
    <el-table-column label="上次點單時間" align="center" :min-width="minWidth('上次點單時間')" prop="lastOrderTime"></el-table-column>
  </el-table>
  <el-dialog
    width="400"
    :title="state.title"
    v-model="state.dialogview"
    append-to-body
    center
  >
    <el-form :label-width="120" :model="state.dialogData">
      <el-form-item label="品項">
        <el-input class="input-type" v-model="state.dialogData.order" placeholder="請輸入品項"></el-input>
      </el-form-item>
      <el-form-item label="杯量">
        <el-select v-model="state.dialogData.size" class="input-type">
          <el-option v-for="(item, index) in sizeList" :key="index" :label="item.value" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="價格">
        <el-input-number class="input-type" v-model="state.dialogData.cost" placeholder="請輸入價格"></el-input-number>
      </el-form-item>
      <el-form-item label="店家">
        <el-input class="input-type" v-model="state.dialogData.store" placeholder="請輸入店家"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="save">確認</el-button>
      </span>
    </template>
  </el-dialog>
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

.input-type {
  width: 150px
}
</style>