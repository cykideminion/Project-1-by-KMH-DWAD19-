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
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Source Serif Pro, serif',
      color: '#E54F6D'
    },
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
        x: "5 ROOM",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "BUKIT TIMAH, 150 sqm"
        }
      },
      {
        x: "EXECUTIVE",
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0"
          },
          text: "QUEENSTOWN, 122 sqm"
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
  plotOptions: {
    treemap: {
      distributed: true
    }
  },

  title: {
    text: 'Total Number of flats transacted by Towns',
    align: 'center',
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'Source Serif Pro, serif',
      color: '#E54F6D'
    },
  }
};

let chartTree = new ApexCharts(document.querySelector("#treechart"), options6);
chartTree.render();

// let optionscir = {
//   series: [20, 508, 290, 146, 16],
//   chart: {
//     height: 250,
//     type: 'radialBar',
//   },
//   title: {
//     text: 'AMK'
//   },
//   plotOptions: {
//     radialBar: {
//       dataLabels: {
//         name: {
//           show: true,
//           fontSize: '22px',
//         },
//         value: {
//           show: true,
//           fontSize: '16px',
//         },
//         total: {
//           show: true,
//           label: 'Total',

//         }
//       }
//     }
//   },
//   labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
// };

// let chartcir = new ApexCharts(document.querySelector("#circhartamk"), optionscir);
// chartcir.render();

// let optionscirbdk = {
//   series: [20, 529, 438, 248, 74],
//   chart: {
//     height: 250,
//     type: 'radialBar',
//   },
//   title: {
//     text: 'Bedok'
//   },
//   plotOptions: {
//     radialBar: {
//       dataLabels: {
//         name: {
//           show: true,
//           fontSize: '22px',
//         },
//         value: {
//           show: true,
//           fontSize: '16px',
//         },
//         total: {
//           show: true,
//           label: 'Total',
//           formatter: function(w) {
//             // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
//             return 1309
//           }
//         }
//       }
//     }
//   },
//   labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
// };

// let chartcirbdk = new ApexCharts(document.querySelector("#circhartbdk"), optionscirbdk);
// chartcirbdk.render();

let optionscirbhn = {
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

let chartcirbhn = new ApexCharts(document.querySelector("#circhartbhn"), optionscirbhn);
chartcirbhn.render();

// Don AMK Chart
let optionsdonamk = {
  series: [20, 508, 290, 146, 16],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Ang Mo Kio"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonamk = new ApexCharts(document.querySelector("#donchartamk"), optionsdonamk);
chartdonamk.render();


// Don BDK Chart
let optionsdonbdk = {
  series: [20, 529, 438, 248, 74],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bedok"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbdk = new ApexCharts(document.querySelector("#donchartbdk"), optionsdonbdk);
chartdonbdk.render();

// Don BHN Chart
let optionsdonbhn = {
  series: [63, 194, 136, 51],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bishan"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbhn = new ApexCharts(document.querySelector("#donchartbhn"), optionsdonbhn);
chartdonbhn.render();

// Don BBT Chart
let optionsdonbbt = {
  series: [3, 271, 335, 148, 79],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bukit Batok"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbbt = new ApexCharts(document.querySelector("#donchartbbt"), optionsdonbbt);
chartdonbbt.render();

// Don BMH Chart
let optionsdonbmh = {
  series: [10, 26, 319, 347, 224],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['1 Room', '2 Room', '3 Room', '4 Room', '5 Room'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bukit Merah"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbmh = new ApexCharts(document.querySelector("#donchartbmh"), optionsdonbmh);
chartdonbmh.render();

// Don BPJ Chart
let optionsdonbpj = {
  series: [18, 108, 445, 262, 74],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bukit Panjang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbpj = new ApexCharts(document.querySelector("#donchartbpj"), optionsdonbpj);
chartdonbpj.render();

// Don BTM Chart
let optionsdonbtm = {
  series: [13, 28, 11, 9],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['3 Room', '4 Room', '5 Room'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Bukit Timah"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonbtm = new ApexCharts(document.querySelector("#donchartbtm"), optionsdonbtm);
chartdonbtm.render();

// Don CTR Chart
let optionsdonctr = {
  series: [12, 82, 81, 28],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Central Area"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonctr = new ApexCharts(document.querySelector("#donchartctr"), optionsdonctr);
chartdonctr.render();

// Don CCK Chart
let optionsdoncck = {
  series: [13, 92, 627, 477, 116],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Choa Chu Kang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdoncck = new ApexCharts(document.querySelector("#donchartcck"), optionsdoncck);
chartdoncck.render();


// Don CMT Chart
let optionsdoncmt = {
  series: [6, 264, 209, 85, 15],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Clementi"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdoncmt = new ApexCharts(document.querySelector("#donchartcmt"), optionsdoncmt);
chartdoncmt.render();


// Don GEY Chart
let optionsdongey = {
  series: [18, 298, 221, 80, 27],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Geylang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdongey = new ApexCharts(document.querySelector("#donchartgey"), optionsdongey);
chartdongey.render();

// Don HGG Chart
let optionsdonhgg = {
  series: [3, 281, 613, 236, 119],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Hougang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonhgg = new ApexCharts(document.querySelector("#doncharthgg"), optionsdonhgg);
chartdonhgg.render();

// Don JEE Chart
let optionsdonjee = {
  series: [6, 163, 132, 118, 40],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Jurong East"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonjee = new ApexCharts(document.querySelector("#donchartjee"), optionsdonjee);
chartdonjee.render();


// Don JEw Chart
let optionsdonjew = {
  series: [19, 304, 562, 497, 183],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Jurong West"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonjew = new ApexCharts(document.querySelector("#donchartjew"), optionsdonjew);
chartdonjew.render();


// Don KLWP Chart
let optionsdonklwp = {
  series: [8, 332, 412, 124, 15],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Kallang/Whampoa"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonklwp = new ApexCharts(document.querySelector("#donchartklwp"), optionsdonklwp);
chartdonklwp.render();

// Don MPR Chart
let optionsdonmpr = {
  series: [83, 43, 58],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['3 Room', '4 Room', '5 Room'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Marine Parade"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonmpr = new ApexCharts(document.querySelector("#donchartmpr"), optionsdonmpr);
chartdonmpr.render();

// Don PSR Chart
let optionsdonpsr = {
  series: [6, 21, 291, 253, 202],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Pasir Ris"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonpsr = new ApexCharts(document.querySelector("#donchartpsr"), optionsdonpsr);
chartdonpsr.render();


// Don PGG Chart
let optionsdonpgg = {
  series: [37, 196, 984, 652, 29],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Punggol"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonpgg = new ApexCharts(document.querySelector("#donchartpgg"), optionsdonpgg);
chartdonpgg.render();


// Don QST Chart
let optionsdonqst = {
  series: [14, 310, 279, 104, 7],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Queenstown"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonqst = new ApexCharts(document.querySelector("#donchartqst"), optionsdonqst);
chartdonqst.render();


// Don SEM Chart
let optionsdonsem = {
  series: [44, 54, 328, 241, 64],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Sembawang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonsem = new ApexCharts(document.querySelector("#donchartsem"), optionsdonsem);
chartdonsem.render();

// Don SKG Chart
let optionsdonskg = {
  series: [50, 170, 1074, 774, 120],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Sengkang"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonskg = new ApexCharts(document.querySelector("#donchartskg"), optionsdonskg);
chartdonskg.render();

// Don SRG Chart
let optionsdonsrg = {
  series: [4, 86, 193, 69, 57],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Serangoon"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonsrg = new ApexCharts(document.querySelector("#donchartsrg"), optionsdonsrg);
chartdonsrg.render();

// Don TMP Chart
let optionsdontmp = {
  series: [12, 360, 614, 415, 196, 4],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive', 'Multi-Generation'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Tampines"
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdontmp = new ApexCharts(document.querySelector("#doncharttmp"), optionsdontmp);
chartdontmp.render();


// Don TPY Chart
let optionsdontpy = {
  series: [19, 372, 265, 135, 22],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Toa Payoh"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdontpy = new ApexCharts(document.querySelector("#doncharttpy"), optionsdontpy);
chartdontpy.render();

// Don WDL Chart
let optionsdonwdl = {
  series: [24, 216, 781, 531, 186],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Woodlands"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonwdl = new ApexCharts(document.querySelector("#donchartwdl"), optionsdonwdl);
chartdonwdl.render();

// Don YHN Chart
let optionsdonyhn = {
  series: [42, 510, 893, 351, 86, 8],
  chart: {
    width: 300,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ['2 Room', '3 Room', '4 Room', '5 Room', 'Executive', 'Multi-Generation'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  title: {
    text: "Yishun"
  },
  responsive: [{
    breakpoint: 360,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

let chartdonyhn = new ApexCharts(document.querySelector("#donchartyhn"), optionsdonyhn);
chartdonyhn.render();
