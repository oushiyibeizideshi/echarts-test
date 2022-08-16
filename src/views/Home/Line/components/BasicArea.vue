<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  const myChart = echarts.init(
    document.getElementById("basicArea") as HTMLDivElement
  );
  myChart.setOption({
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  });
});
</script>

<template>
  <div id="basicArea"></div>
</template>

<style lang="scss" scoped>
#basicArea {
  width: 100%;
  height: 100%;
}
</style>
