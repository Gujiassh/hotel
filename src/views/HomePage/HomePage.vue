<template>
  <div>
    <!-- 上半部部分 -->
    <el-row :gutter="50">
      <el-col :span="12">
        <div class="salesVolume">
          <h3>总的销售额</h3>
          <p>￥{{salesVolume}}</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="linChart"></div>
      </el-col>
    </el-row>
    <!-- 下半部分 -->
    <el-row>
      <el-col :span="12">
        <div id="histogram"></div>
      </el-col>
      <el-col :span="12">
        <div class="list">
          <h3>销售排行榜</h3>
          <div>1 xx门店 12:26</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import echarts from '@/echarts/useEcharts'
import { EChartsOption } from 'node_modules/_echarts@5.2.2@echarts/types/dist/shared'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'homepage',
  // components: {},
  setup() {
    const salesVolume = 12345
    onMounted(() => {
      // eslint-disable-next-line
      const chartDom: HTMLElement = document.getElementById('linChart')!
      const lineChart = echarts.init(chartDom)
      // eslint-disable-next-line
      const histogramDom: HTMLElement = document.getElementById('histogram')!
      const histogramChart = echarts.init(histogramDom)

      var lineChartOption: EChartsOption
      var histogramOption: EChartsOption

      // 折线图
      lineChartOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }

      lineChartOption && lineChart.setOption(lineChartOption)

      // 柱状图
      histogramOption = {
        title: {
          text: '柱状与折线图',
          subtext: '数据显示'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Rainfall', 'Evaporation']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '昨日入账',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '今日入账',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          }
        ]
      }

      histogramOption && histogramChart.setOption(histogramOption)
    })

    return {
      salesVolume
    }
  }
})
</script>

<style lang="less" scoped>
.el-row {
  height: 100%;
  margin-bottom: 20px;
}
#linChart {
  width: 350px;
  height: 350px;
}
#histogram {
  width: 550px;
  height: 550px;
}
.salesVolume {
  padding: 3px;
  height: 100%;
  position: relative;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    position: absolute;
    top: 5%;
    left: 5%;
  }
  p {
    font-size: xx-large;
    color: #5470c6;
    text-align: center;
  }
}

.list {
  min-height: 400px;
  padding: 10px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  div {
    text-align: center;
    padding-left: 15px;
  }
}
</style>
