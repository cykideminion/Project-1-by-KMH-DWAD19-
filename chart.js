//chart 2 - AMK Jan Chart
drawChartAMK1();
function drawChartAMK1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Jan HDB Sale Transaction Price',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#amkchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let series2 = transformData2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': series2
      }

    ])
  })

}

// AMK Feb chart
drawChartAMK2();
function drawChartAMK2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Feb HDB Sale Transaction Price',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#amkchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let series3 = transformData3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': series3
      }

    ])
  })

}


//chart 1 - Bedok Jan Chart
drawChartBDK1();
function drawChartBDK1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk1 = transformDataBDK1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk1
      }

    ])
  })

}

//Bedok Feb Chart
drawChartBDK2();
function drawChartBDK2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk2 = transformDataBDK2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk2
      }

    ])
  })

}

//Bedok Mar Chart
drawChartBDK3();
function drawChartBDK3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk3 = transformDataBDK3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk3
      }

    ])
  })

}

//Bedok April Chart
drawChartBDK4();
function drawChartBDK4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk4 = transformDataBDK4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk4
      }

    ])
  })

}

//Bedok May Chart
drawChartBDK5();
function drawChartBDK5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk5 = transformDataBDK5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk5
      }

    ])
  })

}

//Bedok Jun Chart
drawChartBDK6();
function drawChartBDK6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk6 = transformDataBDK6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk6
      }

    ])
  })

}

//Bedok Julu Chart
drawChartBDK7();
function drawChartBDK7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk7 = transformDataBDK7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk7
      }

    ])
  })

}

//Bedok Aug Chart
drawChartBDK8();
function drawChartBDK8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk8 = transformDataBDK8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk8
      }

    ])
  })

}

//Bedok Sept Chart
drawChartBDK9();
function drawChartBDK9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk9 = transformDataBDK9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk9
      }

    ])
  })

}

//Bedok Oct Chart
drawChartBDK10();
function drawChartBDK10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk10 = transformDataBDK10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk10
      }

    ])
  })

}

//Bedok Nov Chart
drawChartBDK11();
function drawChartBDK11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk11 = transformDataBDK11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk11
      }

    ])
  })

}

//Bedok Dec Chart
drawChartBDK12();
function drawChartBDK12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Dec',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bdkchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbdk12 = transformDataBDK12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk12
      }

    ])
  })

}

//Bishan Jan Chart
drawChartbhn1();
function drawChartbhn1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn1 = transformDatabhn1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn1
      }

    ])
  })

}

//Bishan Feb Chart
drawChartbhn2();
function drawChartbhn2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn2 = transformDatabhn2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn2
      }

    ])
  })

}

//Bishan Mar Chart
drawChartbhn3();
function drawChartbhn3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn3 = transformDatabhn3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn3
      }

    ])
  })

}

//Bishan April Chart
drawChartbhn4();
function drawChartbhn4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn4 = transformDatabhn4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn4
      }

    ])
  })

}

//Bishan May Chart
drawChartbhn5();
function drawChartbhn5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn5 = transformDatabhn5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn5
      }

    ])
  })

}

//Bishan Jun Chart
drawChartbhn6();
function drawChartbhn6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn6 = transformDatabhn6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn6
      }

    ])
  })

}

//Bishan Julu Chart
drawChartbhn7();
function drawChartbhn7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn7 = transformDatabhn7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn7
      }

    ])
  })

}

//Bishan Aug Chart
drawChartbhn8();
function drawChartbhn8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn8 = transformDatabhn8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn8
      }

    ])
  })

}

//Bishan Sept Chart
drawChartbhn9();
function drawChartbhn9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn9 = transformDatabhn9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn9
      }

    ])
  })

}

//Bishan Oct Chart
drawChartbhn10();
function drawChartbhn10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn10 = transformDatabhn10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn10
      }

    ])
  })

}

//Bishan Nov Chart
drawChartbhn11();
function drawChartbhn11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn11 = transformDatabhn11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn11
      }

    ])
  })

}

//Bishan Dec Chart
drawChartbhn12();
function drawChartbhn12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bhnchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbhn12 = transformDatabhn12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn12
      }

    ])
  })

}

//BBT Jan Chart
drawChartbbt1();
function drawChartbbt1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt1 = transformDatabbt1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt1
      }

    ])
  })

}

//BBT Feb Chart
drawChartbbt2();
function drawChartbbt2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt2 = transformDatabbt2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt2
      }

    ])
  })

}

//BBT Mar Chart
drawChartbbt3();
function drawChartbbt3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt3 = transformDatabbt3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt3
      }

    ])
  })

}

//BBT April Chart
drawChartbbt4();
function drawChartbbt4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt4 = transformDatabbt4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt4
      }

    ])
  })

}

//BBT May Chart
drawChartbbt5();
function drawChartbbt5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt5 = transformDatabbt5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt5
      }

    ])
  })

}

//BBT Jun Chart
drawChartbbt6();
function drawChartbbt6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt6 = transformDatabbt6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt6
      }

    ])
  })

}

//BBT Julu Chart
drawChartbbt7();
function drawChartbbt7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt7 = transformDatabbt7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt7
      }

    ])
  })

}

//BBT Aug Chart
drawChartbbt8();
function drawChartbbt8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt8 = transformDatabbt8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt8
      }

    ])
  })

}

//BBT Sept Chart
drawChartbbt9();
function drawChartbbt9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt9 = transformDatabbt9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt9
      }

    ])
  })

}

//BBT Oct Chart
drawChartbbt10();
function drawChartbbt10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt10 = transformDatabbt10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt10
      }

    ])
  })

}

//BBT Nov Chart
drawChartbbt11();
function drawChartbbt11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt11 = transformDatabbt11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt11
      }

    ])
  })

}

//BBT Dec Chart
drawChartbbt12();
function drawChartbbt12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bbtchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbbt12 = transformDatabbt12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt12
      }

    ])
  })

}

//BMH Jan Chart
drawChartbmh1();
function drawChartbmh1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh1 = transformDatabmh1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh1
      }

    ])
  })

}

//BMH Feb Chart
drawChartbmh2();
function drawChartbmh2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh2 = transformDatabmh2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh2
      }

    ])
  })

}

//BMH Mar Chart
drawChartbmh3();
function drawChartbmh3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh3 = transformDatabmh3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh3
      }

    ])
  })

}

//BMH April Chart
drawChartbmh4();
function drawChartbmh4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh4 = transformDatabmh4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh4
      }

    ])
  })

}

//BMH May Chart
drawChartbmh5();
function drawChartbmh5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh5 = transformDatabmh5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh5
      }

    ])
  })

}

//BMH Jun Chart
drawChartbmh6();
function drawChartbmh6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh6 = transformDatabmh6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh6
      }

    ])
  })

}

//BMH Julu Chart
drawChartbmh7();
function drawChartbmh7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh7 = transformDatabmh7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh7
      }

    ])
  })

}

//BMH Aug Chart
drawChartbmh8();
function drawChartbmh8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh8 = transformDatabmh8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh8
      }

    ])
  })

}

//BMH Sept Chart
drawChartbmh9();
function drawChartbmh9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh9 = transformDatabmh9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh9
      }

    ])
  })

}

//BMH Oct Chart
drawChartbmh10();
function drawChartbmh10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh10 = transformDatabmh10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh10
      }

    ])
  })

}

//BMH Nov Chart
drawChartbmh11();
function drawChartbmh11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh11 = transformDatabmh11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh11
      }

    ])
  })

}

//BMH Dec Chart
drawChartbmh12();
function drawChartbmh12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bmhchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbmh12 = transformDatabmh12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh12
      }

    ])
  })

}

//BPJ Jan Chart
drawChartbpj1();
function drawChartbpj1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj1 = transformDatabpj1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj1
      }

    ])
  })

}

//BPJ Feb Chart
drawChartbpj2();
function drawChartbpj2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj2 = transformDatabpj2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj2
      }

    ])
  })

}

//BPJ Mar Chart
drawChartbpj3();
function drawChartbpj3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj3 = transformDatabpj3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj3
      }

    ])
  })

}

//BPJ April Chart
drawChartbpj4();
function drawChartbpj4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj4 = transformDatabpj4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj4
      }

    ])
  })

}

//BPJ May Chart
drawChartbpj5();
function drawChartbpj5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj5 = transformDatabpj5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj5
      }

    ])
  })

}

//BPJ Jun Chart
drawChartbpj6();
function drawChartbpj6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj6 = transformDatabpj6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj6
      }

    ])
  })

}

//BPJ Julu Chart
drawChartbpj7();
function drawChartbpj7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj7 = transformDatabpj7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj7
      }

    ])
  })

}

//BPJ Aug Chart
drawChartbpj8();
function drawChartbpj8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj8 = transformDatabpj8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj8
      }

    ])
  })

}

//BPJ Sept Chart
drawChartbpj9();
function drawChartbpj9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj9 = transformDatabpj9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj9
      }

    ])
  })

}

//BPJ Oct Chart
drawChartbpj10();
function drawChartbpj10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj10 = transformDatabpj10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj10
      }

    ])
  })

}

//BPJ Nov Chart
drawChartbpj11();
function drawChartbpj11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj11 = transformDatabpj11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj11
      }

    ])
  })

}

//BPJ Dec Chart
drawChartbpj12();
function drawChartbpj12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#bpjchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbpj12 = transformDatabpj12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj12
      }

    ])
  })

}

//BTM Jan Chart
drawChartbtm1();
function drawChartbtm1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm1 = transformDatabtm1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm1
      }

    ])
  })

}

//BTM Feb Chart
drawChartbtm2();
function drawChartbtm2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm2 = transformDatabtm2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm2
      }

    ])
  })

}

//BTM Mar Chart
drawChartbtm3();
function drawChartbtm3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm3 = transformDatabtm3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm3
      }

    ])
  })

}

//BTM April Chart
drawChartbtm4();
function drawChartbtm4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm4 = transformDatabtm4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm4
      }

    ])
  })

}

//BTM May Chart
drawChartbtm5();
function drawChartbtm5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm5 = transformDatabtm5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm5
      }

    ])
  })

}

//BTM Jun Chart
drawChartbtm6();
function drawChartbtm6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm6 = transformDatabtm6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm6
      }

    ])
  })

}

//BTM Julu Chart
drawChartbtm7();
function drawChartbtm7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm7 = transformDatabtm7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm7
      }

    ])
  })

}

//BTM Aug Chart
drawChartbtm8();
function drawChartbtm8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm8 = transformDatabtm8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm8
      }

    ])
  })

}

//BTM Sept Chart
drawChartbtm9();
function drawChartbtm9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm9 = transformDatabtm9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm9
      }

    ])
  })

}

//BTM Oct Chart
drawChartbtm10();
function drawChartbtm10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm10 = transformDatabtm10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm10
      }

    ])
  })

}

//BTM Nov Chart
drawChartbtm11();
function drawChartbtm11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm11 = transformDatabtm11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm11
      }

    ])
  })

}

//BTM Dec Chart
drawChartbtm12();
function drawChartbtm12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#btmchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesbtm12 = transformDatabtm12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm12
      }

    ])
  })

}

//CTR Jan Chart
drawChartctr1();
function drawChartctr1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr1 = transformDatactr1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr1
      }

    ])
  })

}

//CTR Feb Chart
drawChartctr2();
function drawChartctr2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr2 = transformDatactr2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr2
      }

    ])
  })

}

//CTR Mar Chart
drawChartctr3();
function drawChartctr3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr3 = transformDatactr3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr3
      }

    ])
  })

}

//CTR April Chart
drawChartctr4();
function drawChartctr4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr4 = transformDatactr4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr4
      }

    ])
  })

}

//CTR May Chart
drawChartctr5();
function drawChartctr5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr5 = transformDatactr5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr5
      }

    ])
  })

}

//CTR Jun Chart
drawChartctr6();
function drawChartctr6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr6 = transformDatactr6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr6
      }

    ])
  })

}

//CTR Julu Chart
drawChartctr7();
function drawChartctr7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr7 = transformDatactr7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr7
      }

    ])
  })

}

//CTR Aug Chart
drawChartctr8();
function drawChartctr8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr8 = transformDatactr8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr8
      }

    ])
  })

}

//CTR Sept Chart
drawChartctr9();
function drawChartctr9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr9 = transformDatactr9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr9
      }

    ])
  })

}

//CTR Oct Chart
drawChartctr10();
function drawChartctr10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr10 = transformDatactr10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr10
      }

    ])
  })

}

//CTR Nov Chart
drawChartctr11();
function drawChartctr11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr11 = transformDatactr11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr11
      }

    ])
  })

}

//CTR Dec Chart
drawChartctr12();
function drawChartctr12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#ctrchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriesctr12 = transformDatactr12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr12
      }

    ])
  })

}

//CCK Jan Chart
drawChartcck1();
function drawChartcck1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck1 = transformDatacck1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck1
      }

    ])
  })

}

//CCK Feb Chart
drawChartcck2();
function drawChartcck2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck2 = transformDatacck2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck2
      }

    ])
  })

}

//CCK Mar Chart
drawChartcck3();
function drawChartcck3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck3 = transformDatacck3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck3
      }

    ])
  })

}

//CCK April Chart
drawChartcck4();
function drawChartcck4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck4 = transformDatacck4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck4
      }

    ])
  })

}

//CCK May Chart
drawChartcck5();
function drawChartcck5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck5 = transformDatacck5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck5
      }

    ])
  })

}

//CCK Jun Chart
drawChartcck6();
function drawChartcck6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck6 = transformDatacck6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck6
      }

    ])
  })

}

//CCK Julu Chart
drawChartcck7();
function drawChartcck7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck7 = transformDatacck7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck7
      }

    ])
  })

}

//CCK Aug Chart
drawChartcck8();
function drawChartcck8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck8 = transformDatacck8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck8
      }

    ])
  })

}

//CCK Sept Chart
drawChartcck9();
function drawChartcck9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck9 = transformDatacck9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck9
      }

    ])
  })

}

//CCK Oct Chart
drawChartcck10();
function drawChartcck10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck10 = transformDatacck10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck10
      }

    ])
  })

}

//CCK Nov Chart
drawChartcck11();
function drawChartcck11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck11 = transformDatacck11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck11
      }

    ])
  })

}

//CCK Dec Chart
drawChartcck12();
function drawChartcck12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cckchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescck12 = transformDatacck12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck12
      }

    ])
  })

}

//CMT Jan Chart
drawChartcmt1();
function drawChartcmt1() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jan',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart1'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt1 = transformDatacmt1(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt1
      }

    ])
  })

}

//CMT Feb Chart
drawChartcmt2();
function drawChartcmt2() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Feb',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart2'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt2 = transformDatacmt2(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt2
      }

    ])
  })

}

//CMT Mar Chart
drawChartcmt3();
function drawChartcmt3() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Mar',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart3'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt3 = transformDatacmt3(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt3
      }

    ])
  })

}

//CMT April Chart
drawChartcmt4();
function drawChartcmt4() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Apr',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart4'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt4 = transformDatacmt4(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt4
      }

    ])
  })

}

//CMT May Chart
drawChartcmt5();
function drawChartcmt5() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for May',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart5'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt5 = transformDatacmt5(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt5
      }

    ])
  })

}

//CMT Jun Chart
drawChartcmt6();
function drawChartcmt6() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jun',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart6'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt6 = transformDatacmt6(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt6
      }

    ])
  })

}

//CMT Julu Chart
drawChartcmt7();
function drawChartcmt7() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Jul',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart7'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt7 = transformDatacmt7(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt7
      }

    ])
  })

}

//CMT Aug Chart
drawChartcmt8();
function drawChartcmt8() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Aug',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart8'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt8 = transformDatacmt8(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt8
      }

    ])
  })

}

//CMT Sept Chart
drawChartcmt9();
function drawChartcmt9() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Sep',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart9'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt9 = transformDatacmt9(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt9
      }

    ])
  })

}

//CMT Oct Chart
drawChartcmt10();
function drawChartcmt10() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Oct',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart10'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt10 = transformDatacmt10(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt10
      }

    ])
  })

}

//CMT Nov Chart
drawChartcmt11();
function drawChartcmt11() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart11'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt11 = transformDatacmt11(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt11
      }

    ])
  })

}

//CMT Dec Chart
drawChartcmt12();
function drawChartcmt12() {
  const options = {
    chart: {
      type: 'bar',
      height: 350,

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    title: {
      text: 'Transactions for Nov',
      align: 'center'
    },

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#cmtchart12'), options);

  // render the chart
  chart.render()

  window.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData('data.js');
    let seriescmt12 = transformDatacmt12(data);
    // const series2 = transformData2(data);



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt12
      }

    ])
  })

}


