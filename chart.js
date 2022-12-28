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
