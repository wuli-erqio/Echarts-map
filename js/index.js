// 柱状图模块以
(function() {
  // 获取元素
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //设置配置项
  var option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改刻度标签
            axisLabel: {
              color: "rgba(255, 255, 255, .6)",
              fontSize: "12"
            },
            // x轴样式不显示
            axisLine: {
              show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            // 修改刻度标签
            axisLabel: {
              color: "rgba(255, 255, 255, .6)",
              fontSize: 12
            },
            // y轴样式不显示
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, .1)",
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, .1)"
              }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              // 设置柱状图圆角
              barBorderRadius: 5
            }
        }
    ]
  };
  // 两者关联
  myChart.setOption(option)
})();