//chart 2 - AMK Jan Chart
drawChart2();
function drawChart2() {
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
drawChart3();
function drawChart3() {
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
