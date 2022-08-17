<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
import { markRaw } from "vue";

// this.echart = markRaw(echarts.init(charDom))

const unwarp = (obj: any) => obj && (obj.__v_raw || obj.valueOf() || obj);
// const htmlele = <div id="smoothed"></div>;
onMounted(() => {
  const myChart = echarts.init(
    document.getElementById("stacked") as HTMLDivElement,
    "dark"
  );
  const chart2 = markRaw(myChart);
  const chart3 = unwarp(myChart);
  myChart.setOption({
    title: {
      text: "Stacked Line",
      id: "stacked-line-title",
      show: true,
      link: "https://echarts.apache.org/zh/option.html#title.id", //点击后跳转的链接
      target: "blank", //跳转的目标窗口的打开方式 'blank' || 'self'
      textStyle: {
        //文字的样式，还有很多，用驼峰命名法
        fontSize: 16,
        fontWeight: "normal",
        color: "#fff",
      },
      triggerEvent: true, //是否触发事件，默认为false
      padding: [0, 0, 0, 0], //标题内边距，默认为5
      zlevel: 1, //所有图形的 zlevel 值
      z: 2, //组件的所有图形的z值
      left: "0px", //"20px" '20%'  'left', 'center', 'right'。
      top: "0px", //组件离容器上侧的距离 'top', 'middle', 'bottom'
      backgroundColor: "rgba(0,0,0,0)", //标题背景色
      shadowColor: "rgba(9, 9, 250, 0.5)",
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 10,
      borderColor: "#ccc", //标题边框颜色
      borderWidth: 1, //标题边框线宽
      borderRadius: 4, //标题边框圆角
    },

    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        console.log("params", params);
        let circle = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:`;
        let data = `${circle}${params[2].color};"></span>`;
        return `${data}${params[0].name}<br/>${params[0].seriesName} : ${params[0].value}<br/>${params[1].seriesName} : ${params[1].value}`;
      },
    },
    // 图例组件
    legend: {
      type: "plain", //'scroll'（滚动，水平垂直都可） | 'plain' （普通图例）
      orient: "horizontal", // 'vertical'（垂直） | 'horizontal'（水平）
      align: "auto", //图例标记和文本的对齐。 'auto'（自动） | 'left'（左对齐） | 'right'（右对齐）
      itemWidth: 10, //图例标记的图形宽度
      itemHeight: 10, //图例标记的图形高度
      itemStyle: {}, //图例的图形样式。
      lineStyle: {}, //图例的线样式。
      SymbolRotate: 100, //图例标记的旋转角度。
      formatter: (name: string) => {
        return "legend" + name;
      }, //图例文本格式器。
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
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
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  });
  // myChart.setOption();
});
</script>

<template>
  <div id="stacked"></div>
</template>

<style lang="scss" scoped>
#stacked {
  width: 100%;
  height: 100%;
}
</style>
