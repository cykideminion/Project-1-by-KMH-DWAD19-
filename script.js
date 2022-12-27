
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

      let transformed = transformData(data, town, floorType, flatType, flatType, flatType, flatType, flatType, flatType, flatType);
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
    group: 'HDB Resale Transaction',
    id: 'type2',
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

//--------------------------------------------------------

//crea sync chart
window.addEventListener("DOMContentLoaded", async function() {
  let data = await loadData();
  let transformed = transformData(data, null, null);
  // console.log('transformed', transformed)


  chartsync.updateSeries([
    {
      'name': 'Sales',
      'data': transformed
    }

  ])

  let checkboxesblock = document.querySelector('#checkboxbtn');
  checkboxesblock.addEventListener;

  document.querySelector("#droplist2").addEventListener;
  let radionbuttons = document.querySelectorAll('input[name="floortype2"]');
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

      let transformed = transformData(data, town, floorType, flatType, flatType, flatType, flatType, flatType, flatType, flatType);
      chartsync.updateSeries([
        {
          'name': 'Sales',
          'data': transformed
        }
      ])
    })
  }
})



const options2 = {
  chart: {
    height: 350,
    group: 'HDB Resale Transaction',
    id: 'type2',
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
const chartsync = new ApexCharts(document.querySelector('#chartsync'), options2);

// render the chart
chartsync.render()
// end of sync chart



