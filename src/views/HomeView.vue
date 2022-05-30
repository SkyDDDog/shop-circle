
<template>
  <div class="warp-box">
    <HeaderHandler />
    <Search/>
    <Release/>
  </div>
</template>

<script>
import HeaderHandler from '../components/HeaderHandler.vue'
import Search from '../components/Search.vue'
import Release from '../components/Release.vue'
export default {
  name: "HomeView",
  components: {
      HeaderHandler,
      Search,
      Release
  }
};
</script>

<style lang="scss" scoped></style>
