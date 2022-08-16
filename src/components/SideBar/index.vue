<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElMenu } from "element-plus";
import MySubMenu from "./SubMenu.vue";
import { useRoute } from "vue-router";
type MenuItem = {
  title: string;
  index: string;
  subs?: MenuItem[];
};

const menuList: MenuItem[] = [
  {
    title: "首页",
    index: "home",
    subs: [
      {
        title: "折线图",
        index: "line",
      },
      {
        title: "首页2",
        index: "home2",
        subs: [
          {
            title: "首页2-1",
            index: "home2-1",
          },
          {
            title: "首页2-2",
            index: "home2-2",
          },
        ],
      },
    ],
  },
  {
    title: "表格",
    index: "home3",
  },
];
const route = useRoute();
</script>

<template>
  <div>
    <el-menu router style="width: 200px; height: calc(100vh - 60px)">
      <my-sub-menu :menuList="menuList"></my-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped></style>
