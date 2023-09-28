<script setup lang="ts">
</script>

<template>
  <div class="top-bar">
    <RouterLink to="/">回到首頁</RouterLink>
    <RouterLink to="/selectD">點餐紀錄</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  a {
    padding: 10px;
    width: 250px;
    text-align: center;
    display: inline-block;
    color: #000;
    text-decoration: none;
  }
}
</style>