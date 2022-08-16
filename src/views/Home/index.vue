<script setup lang="ts">
import { ElHeader, ElMain, ElAside, ElContainer } from "element-plus";
import SideBar from "../../components/SideBar/index.vue";
// import { RouterView } from "vue-router";
</script>

<template>
  <div class="all">
    <el-container>
      <el-aside width="200px">
        <side-bar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100%;
}
</style>
