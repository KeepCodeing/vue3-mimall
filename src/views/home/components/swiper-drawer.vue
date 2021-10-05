<template>
  <div class="absolute h-full bg-white shadow drawer-box">
    <div
      class="flex items-center justify-center w-full pl-5"
      style="height: 100%"
    >
      <el-row align="center" justify="center">
        <el-col :span="6" v-for="item in 20" :key="item">
          <div class="flex p-5">
            <div><img width="42" height="35" src="/imgs/item-box-1.png" /></div>
            <div class="ml-4 text-sm font-light" style="line-height: 40px">
              小米CC9
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
// 败笔...这里这个东西其实可以复用，但是没考虑到..
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
.drawer-box {
  top: 0;
  width: 1000px;
  left: 264px;
}
</style>
