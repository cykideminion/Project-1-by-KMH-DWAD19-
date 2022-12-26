
window.addEventListener("DOMContentLoaded", async function() {
  let data = await loadData();
  let transformed = transformData(data, null, null);
  // console.log('transformed', transformed)


  chart.updateSeries([
    {
      'name': 'Sales',
      'data': transformed
    }

  ])

  let checkboxesblock = document.querySelector('#checkboxbtn');
  checkboxesblock.addEventListener;

  document.querySelector("#droplist").addEventListener;
  let radionbuttons = document.querySelectorAll('input[name="floortype"]');
  for (let i = 0; i < radionbuttons.length; i++) {
    radionbuttons[i].addEventListener('change', function() {
      let floorType = this.value;
      let checkboxes = document.querySelectorAll('#flatType');
      let selectedboxes = [];
      for (let checkbox of checkboxes) {
        if (checkbox.checked) {
          selectedboxes.push(checkbox.value);
        }
      }
      let flatType = selectedboxes;
      let town = document.querySelector("#droplist").value;

      // selectedcheckboxes =
      //   Array.from(checkboxes)
      //     .filter(j => j.checked)
      //     .map(j => j.value)

      console.log("FlatType", flatType)
      let transformed = transformData(data, town, floorType, flatType);
      chart.updateSeries([
        {
          'name': 'Sales',
          'data': transformed
        }
      ])
    })
  }
})


const options = {
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
    text: 'Total HDB Resale Trasaction by Month',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],

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
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()



//chart 2
drawChart2();
function drawChart2() {
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
  const chart = new ApexCharts(document.querySelector('#chart2'), options);

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

    series: [
      // NO DATA
    ],
    // what to show there is no data
    noData: {
      "text": "Loading..."
    }
  };

  // create the chart
  const chart = new ApexCharts(document.querySelector('#chart3'), options);

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
