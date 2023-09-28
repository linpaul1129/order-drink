<script setup lang="ts">
</script>

<template>
  <main>
    <RouterLink to="/selectD">
      <img alt="drink logo" class="logo" src="@/assets/drinks.svg" width="750" height="500" />
      <div class="hint">Enter 進入</div>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  margin-top: 100px;
  text-align: center;
}

.hint {
  color: black;
  font-size: 24px;
}
</style>
