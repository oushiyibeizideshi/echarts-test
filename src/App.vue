<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCN from "element-plus/lib/locale/lang/zh-cn";
</script>

<template>
  <div>
    <el-config-provider :locale="zhCN">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
@import "./assets/style/reset.scss";
body {
  width: 100%;
  height: 100%;
}
</style>
