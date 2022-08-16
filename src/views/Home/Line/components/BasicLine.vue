<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  const myChart = echarts.init(
    document.getElementById("basic") as HTMLDivElement
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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });
});
</script>

<template>
  <div id="basic"></div>
</template>

<style lang="scss" scoped>
#basic {
  width: 100%;
  height: 100%;
}
</style>
