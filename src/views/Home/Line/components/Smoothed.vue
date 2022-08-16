<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  const myChart = echarts.init(
    document.getElementById("smoothed") as HTMLDivElement,
    "dark"
  );
  myChart.setOption({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  });
});
</script>

<template>
  <div id="smoothed"></div>
</template>

<style lang="scss" scoped>
#smoothed {
  width: 100%;
  height: 100%;
}
</style>
