<script setup lang="ts">
import BasicLine from "./components/BasicLine.vue";
import Smoothed from "./components/Smoothed.vue";
import BasicArea from "./components/BasicArea.vue";
import Stacked from "./components/Stacked.vue";
import RainfallVsEvaporation from "./components/RainfallVSEvaporation.vue";
import Linkage from "./components/Linkage.vue";
</script>

<template>
  <div class="main">
    <div class="chartContainer">
      <basic-line />
    </div>
    <div class="chartContainer">
      <smoothed />
    </div>
    <div class="chartContainer">
      <basic-area />
    </div>
    <div class="chartContainer">
      <stacked />
    </div>
    <div class="chartContainer">
      <rainfall-vs-evaporation />
    </div>
    <div class="chartContainer">
      <linkage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .chartContainer {
    padding: 0 20px;
    width: 40%;
    height: 300px;
    background-color: #f0f0f0;
    margin: 20px 10px;
  }
}
</style>
