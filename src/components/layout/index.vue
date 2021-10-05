<template>
  <el-container class="h-full">
    <el-header style="padding: 0" height="auto">
      <nav-header
        :showMenus="containerConfig.headerConfig?.showMenus"
        :showActions="containerConfig.headerConfig?.showActions"
        :menu-list="containerConfig.headerConfig?.menuList"
        :userState="userState"
      >
        <template #header-menu>
          <slot name="header"></slot>
        </template>
      </nav-header>
    </el-header>
    <el-main>
      <slot name="content">content</slot>
    </el-main>
    <el-footer>
      <slot name="footer">
        <nav-footer />
      </slot>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IContainer } from './types';
import NavHeader from './components/nav-header.vue';
import NavFooter from './components/nav-footer.vue';

export default defineComponent({
  components: {
    NavHeader,
    NavFooter
  },
  props: {
    containerConfig: {
      type: Object as PropType<IContainer>,
      default: () => ({})
    },
    userState: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {};
  }
});

// header提供两种配置方式：插槽和配置文件
// 使用插槽形式用户可以传入自定义组件代替默认的ul > li
// 使用配置文件用户可以自定义菜单内容
</script>
