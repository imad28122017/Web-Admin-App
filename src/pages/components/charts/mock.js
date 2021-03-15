import Highcharts from "highcharts";
import config from "./config";
const colors = config.chartColors;

let columnColors = [
  colors.blue,
  colors.green,
  colors.orange,
  colors.red,
  colors.default,
  colors.gray,
  colors.teal,
  colors.pink,
];
let lineColors = [colors.blue, colors.green, colors.orange];

export const chartData = {
  apex: {
    column: {
      series: [
        {
          data: [5699, 8094, 8396, 7782, 7017, 7136, 7500, 9000],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2018",
            "2019",
            "2020",
          ],
          labels: {
            style: {
              colors: columnColors,
              fontSize: "14px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
        },
        tooltip: {
          theme: "dark",
        },
        grid: {
          borderColor: colors.gridLineColor,
        },
      },
    },

    pie: {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        theme: {
          monochrome: {
            enabled: true,
            color: colors.blue,
          },
        },
        stroke: {
          show: false,
          width: 0,
        },
        legend: false,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
  },

  echarts: {
    line: {
      color: lineColors,
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["2018 Crimes", "2019 Crimes"],
        textStyle: {
          color: colors.textColor,
        },
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[1],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Crimes  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2020-1",
            "2020-2",
            "2020-3",
            "2020-4",
            "2020-5",
            "2020-6",
            "2020-7",
            "2020-8",
            "2020-9",
            "2020-10",
            "2020-11",
            "2020-12",
          ],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[0],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Crimes  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2019-1",
            "2019-2",
            "2019-3",
            "2019-4",
            "2019-5",
            "2019-6",
            "2019-7",
            "2019-8",
            "2019-9",
            "2019-10",
            "2019-11",
            "2019-12",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: colors.textColor,
          },
          axisLine: {
            lineStyle: {
              color: colors.textColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: colors.gridLineColor,
            },
          },
          axisPointer: {
            label: {
              color: colors.dark,
            },
          },
        },
      ],
      series: [
        {
          name: "2018 Crimes",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
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
            2.3,
          ],
        },
        {
          name: "2019 Crimes",
          type: "line",
          smooth: true,
          data: [
            3.9,
            5.9,
            11.1,
            18.7,
            48.3,
            69.2,
            231.6,
            46.6,
            55.4,
            18.4,
            10.3,
            0.7,
          ],
        },
      ],
    },
    donut: {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        show: false,
      },
      color: [
        colors.blue,
        colors.green,
        colors.orange,
        colors.red,
        colors.purple,
      ],
      series: [
        {
          name: "Access source",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: "Direct interview" },
            { value: 310, name: "Email marketing" },
            { value: 234, name: "Alliance advertising" },
            { value: 135, name: "Video ad" },
            { value: 1548, name: "Search engine" },
          ],
        },
      ],
    },
    
    river: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
            width: 1,
            type: "solid",
          },
        },
      },

      legend: {
        data: ["DQ", "TY", "SS", "QG", "SY", "DD"],
        textStyle: {
          color: colors.textColor,
        },
      },
      color: [
        colors.blue,
        colors.green,
        colors.orange,
        colors.red,
        colors.purple,
        colors.gray,
      ],
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {
          color: colors.textColor,
        },
        type: "time",
        axisPointer: {
          animation: true,
          label: {
            show: true,
            color: colors.dark,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [colors.gridLineColor],
            type: "dashed",
            opacity: 0.2,
          },
        },
        axisLine: {
          lineStyle: {
            color: colors.textColor,
          },
        },
      },
   },
  },

  }

export let liveChartInterval = null;

export const liveChart = {
  liveChartInterval: null,
  colors: [colors.blue],
  chart: {
    backgroundColor: "transparent",
    height: 170,
    type: "spline",
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0];
        liveChartInterval = setInterval(function () {
          var x = new Date().getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);
        }, 1000);
      },
    },
  },
};
