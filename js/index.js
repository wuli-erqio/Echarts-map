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
// 折线图1
(function() {
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
          [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
          [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
      }
    ];
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
          color: "#4c9bfd"
        },
        right: "10%"
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#4c9bfd' // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#4c9bfd' // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: '#012f4a' // 分割线颜色
          }
        },
        boundaryGap: false  // 去除轴内间距
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            stack: '总量',
            data:  yearData[0].data[0],
            // 折线修饰为圆滑
            smooth: true,
        },
        {
            name: '新增游客',
            type: 'line',
            stack: '总量',
            data: yearData[0].data[1],
            // 折线修饰为圆滑
            smooth: true,
        }
    ]
};

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
  // 点解切换
  $(".line1 h2").on("click", "a", function() {
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    // 需要重新渲染图标
    myChart.setOption(option);
  })
})();
// 折线图2
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
// 饼状图1
(function() {
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
// 饼状图2
(function() {
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
// 地图
(function() {
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();