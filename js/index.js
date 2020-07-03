// 柱状图模块1
(function() {
  // 获取元素
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
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
  // 让图表跟随屏幕自适应
  window.addEventListener('resize', function() {
    myChart.resize();
  });
})();
// 柱状图2
(function() {
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  option = {
    grid: {
        top: '10%',
        left: '22%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        inverse: true,
        axisLine: {
          show: false
        },
        // 不显示y轴的刻度线
        axisTick: {
          show: false
        },
        // 刻度标签文字
        axisLabel: {
          color: "#fff"
        }
      },
      {
        show: true,
        data:[702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            // 修改第一组的圆角
            itemStyle: {
              barBorderRadius: 20,
              // 此处的color可以修改柱子颜色
              // dataIndex当前柱子的索引号
              color: function (params) {
                return myColor[params.dataIndex]
              }
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            // 柱子的宽度
            barWidth: 12,
            // 显示柱子上的文字
            label: {
              show: true,
              position: "inside",
              // {c}会自动解析为 数据， data里面的数据
              formatter: "{c}%"
            }
        },
        {
            name: '框',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 15,
            data: [100, 100, 100, 100, 100],
            yAxisIndex: 1,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
            }
        }
    ]
};
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();