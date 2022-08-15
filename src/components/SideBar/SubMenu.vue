<script lang="ts">
export default {
  name: "MySubMenu",
};
</script>
<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElMenu } from "element-plus";

type MenuItem = {
  title: string;
  index: string;
  subs?: MenuItem[];
};
type Props = {
  menuList: MenuItem[];
};

const props = defineProps<Props>();
console.log(props);
</script>

<template>
  <div v-for="item in menuList">
    <el-menu-item v-if="!item.subs?.length" :index="item.index">
      {{ item.title }}
      {{ item.subs?.length }}
    </el-menu-item>
    <el-sub-menu v-else :index="item.index" :key="item.index">
      <template #title>
        <span
          >{{ item.title }}
          {{ item.subs?.length }}
        </span>
      </template>
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped></style>
