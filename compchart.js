let options15 = {
  series: [{
    name: "Highest Transactions by Room Type",
    data: [248000, 560000, 958000, 1370000, 1418000, 1290800, 1062500]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Highest Transactions by Room Type',
    align: 'left'
  },
  annotations: {
    xaxis: [
      {
        x: "1 ROOM",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "Bukit Merah, 31 sqm"
        }
      },
      {
        x: "2 ROOM",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "Bukit Merah, 64 sqm"
        }
      },
      {
        x: "3 ROOM",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "KALLANG/WHAMPOA, 99 sqm"
        }
      },
      {
        x: "4 ROOM",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "CENTRAL AREA, 93 sqm"
        }
      },
      {
        x: "MULTI-GENERATION",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "YISHUN, 164 sqm"
        }
      }
    ],
    points:
      [
        {
          x: "5 ROOM",
          y: 1418000,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#2698FF",
            radius: 2
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560"
            },

            text: "QUEENSTOWN, 122 sqm"
          }
        },
        {
          x: "EXECUTIVE",
          y: 1290800,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#2698FF",
            radius: 2
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560"
            },

            text: "BUKIT TIMAH, 150 sqm"
          }
        }

      ]
  },


  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['1 ROOM', '2 ROOM', '3 ROOM', '4 ROOM', '5 ROOM', 'EXECUTIVE', 'MULTI-GENERATION'],
  }
};

let chartcomp = new ApexCharts(document.querySelector("#highestpricechart"), options15);
chartcomp.render();

// Tree chartcomp
let options6 = {
  series: [
    {
      data: [
        {
          x: 'ANG MO KIO',
          y: 980
        },
        {
          x: 'BEDOK',
          y: 1309
        },
        {
          x: 'BISHAN',
          y: 444
        },
        {
          x: 'BUKIT BATOK',
          y: 836
        },
        {
          x: 'BUKIT MERAH',
          y: 926
        },
        {
          x: 'BUKIT PANJANG',
          y: 907
        },
        {
          x: 'BUKIT TIMAH',
          y: 61
        },
        {
          x: 'CENTRAL AREA',
          y: 203
        },
        {
          x: 'CHOA CHU KANG',
          y: 1325
        },
        {
          x: 'CLEMENTI',
          y: 579
        },
        {
          x: 'GEYLANG',
          y: 644
        },
        {
          x: 'HOUGANG',
          y: 1252
        },
        {
          x: 'JURONG EAST',
          y: 459
        },
        {
          x: 'JURONG WEST',
          y: 1565
        },
        {
          x: 'KALLANG/WHAMPOA',
          y: 891
        },
        {
          x: 'MARINE PARADE',
          y: 184
        },
        {
          x: 'PASIR RIS',
          y: 773
        },
        {
          x: 'PUNGGOL',
          y: 1898
        },
        {
          x: 'QUEENSTOWN',
          y: 714
        },
        {
          x: 'SEMBAWANG',
          y: 731
        },
        {
          x: 'SENGKANG',
          y: 2188
        },
        {
          x: 'SERANGOON',
          y: 409
        },
        {
          x: 'TAMPINES',
          y: 1601
        },
        {
          x: 'TOA PAYOH',
          y: 803
        },
        {
          x: 'WOODLANDS',
          y: 1738
        },
        {
          x: 'YISHUN',
          y: 1890
        }
      ]
    }
  ],
  legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: 'Number of flats transacted in 2022'
  }
};

let chartTree = new ApexCharts(document.querySelector("#treechart"), options6);
chartTree.render();

var optionscir = {
  series: [20, 508, 290, 146, 16],
  chart: {
    height: 250,
    type: 'radialBar',
  },
  title: {
    text: 'AMK'
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          fontSize: '22px',
        },
        value: {
          show: true,
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function(w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 980
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
};

var chartcir = new ApexCharts(document.querySelector("#circhartamk"), optionscir);
chartcir.render();

var optionscirbdk = {
  series: [20, 529, 438, 248, 74],
  chart: {
    height: 250,
    type: 'radialBar',
  },
  title: {
    text: 'Bedok'
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          fontSize: '22px',
        },
        value: {
          show: true,
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function(w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 1309
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
};

var chartcirbdk = new ApexCharts(document.querySelector("#circhartbdk"), optionscirbdk);
chartcirbdk.render();

var optionscirbhn = {
  series: [63, 194, 136, 51],
  chart: {
    height: 250,
    type: 'radialBar',
  },
  title: {
    text: 'Bishan'
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          fontSize: '22px',
        },
        value: {
          show: true,
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function(w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 1309
          }
        }
      }
    }
  },
  labels: ['3 Room', '4 Room', '5 Room', 'Executive'],
};

var chartcirbhn = new ApexCharts(document.querySelector("#circhartbhn"), optionscirbhn);
chartcirbhn.render();