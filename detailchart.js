let optionssta = {
  series: [
    {
      name: 'Ang Mo Kio',
      data: [82, 81, 81, 81, 93, 91, 96, 104, 100, 70, 68, 33]
    },
    {
      name: 'Bedok',
      data: [123, 95, 124, 128, 113, 93, 127, 136, 133, 94, 102, 41]
    },
    {
      name: 'Bishan',
      data: [47, 30, 45, 38, 35, 45, 47, 30, 52, 38, 28, 9]
    },
    {
      name: 'B.Batok',
      data: [83, 54, 67, 73, 67, 74, 66, 99, 83, 81, 64, 25]
    },
    {
      name: 'B.Merah',
      data: [82, 70, 92, 92, 91, 83, 87, 82, 85, 77, 60, 25]
    },
    {
      name: 'B.Panjang',
      data: [91, 69, 90, 94, 69, 78, 74, 85, 88, 59, 78, 32]
    },

  ],
  chart: {
    type: 'area',
    height: 350,
    group: 'Number of HDB transacted',
    id: 'type2',
    stacked: true,

  },
  colors: ['#008FFB', '#00E396', '#e28743', '#42d4f5', '#f42272', '#f397d6'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

let chartsta = new ApexCharts(document.querySelector("#chartsta"), optionssta);
chartsta.render();

let optionssta2 = {
  series: [
    {
      name: 'B.Timah',
      data: [7, 4, 4, 5, 3, 4, 8, 4, 7, 6, 5, 4]
    },
    {
      name: 'Central',
      data: [16, 22, 19, 16, 16, 20, 14, 17, 27, 13, 19, 4]
    },
    {
      name: 'C.C.Kang',
      data: [156, 97, 142, 127, 109, 112, 103, 96, 144, 94, 107, 38]
    },
    {
      name: 'Clementi',
      data: [61, 45, 66, 65, 53, 48, 54, 56, 42, 39, 35, 15]
    },
    {
      name: 'Geylang',
      data: [59, 54, 71, 60, 47, 48, 60, 54, 63, 44, 57, 27]
    },
    {
      name: 'Hougang',
      data: [146, 91, 126, 115, 105, 108, 120, 109, 123, 74, 107, 28]
    },

  ],
  chart: {
    type: 'area',
    height: 350,
    group: 'Number of HDB transacted',
    id: 'type2',
    stacked: true,

  },
  colors: ['#008FFB', '#00E396', '#e28743', '#42d4f5', '#f42272', '#f397d6'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

let chartsta2 = new ApexCharts(document.querySelector("#chartsta2"), optionssta2);
chartsta2.render();

let optionssta3 = {
  series: [
    {
      name: 'Jurong East',
      data: [44, 38, 39, 35, 40, 41, 42, 55, 47, 29, 41, 8]
    },
    {
      name: 'Jurong West',
      data: [145, 117, 117, 139, 149, 146, 137, 135, 159, 125, 141, 55]
    },
    {
      name: 'Kallang/Whampoa',
      data: [75, 67, 100, 75, 86, 74, 99, 66, 81, 78, 67, 23]
    },
    {
      name: 'Marine Parade',
      data: [12, 11, 14, 18, 17, 15, 16, 17, 21, 18, 14, 11]
    },
    {
      name: 'Pasir Ris',
      data: [76, 72, 64, 72, 67, 73, 77, 62, 66, 66, 58, 20]
    },
    {
      name: 'Punggol',
      data: [206, 134, 165, 178, 148, 162, 189, 127, 197, 148, 170, 74]
    },
    {
      name: 'Queenstown',
      data: [77, 57, 62, 50, 62, 59, 66, 61, 89, 52, 60, 19]
    },

  ],
  chart: {
    type: 'area',
    height: 350,
    group: 'Number of HDB transacted',
    id: 'type2',
    stacked: true,

  },
  colors: ['#008FFB', '#00E396', '#e28743', '#42d4f5', '#f42272', '#f397d6'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

let chartsta3 = new ApexCharts(document.querySelector("#chartsta3"), optionssta3);
chartsta3.render();

let optionssta4 = {
  series: [
    {
      name: 'Sembawang',
      data: [60, 44, 61, 54, 57, 57, 61, 53, 96, 76, 77, 35]
    },
    {
      name: 'Sengkang',
      data: [221, 164, 190, 202, 200, 180, 225, 207, 213, 155, 162, 69]
    },
    {
      name: 'Serangoon',
      data: [40, 40, 34, 40, 33, 22, 41, 36, 40, 34, 35, 14]
    },
    {
      name: 'Tampines',
      data: [163, 129, 131, 146, 117, 143, 140, 151, 149, 131, 149, 52]
    },
    {
      name: 'Toa Payoh',
      data: [61, 52, 82, 64, 71, 60, 88, 93, 80, 72, 62, 28]
    },
    {
      name: 'Woodlands',
      data: [123, 129, 116, 138, 148, 151, 142, 170, 195, 154, 202, 70]
    },
    {
      name: 'Yishun',
      data: [186, 129, 160, 157, 158, 148, 182, 204, 206, 136, 171, 53]
    },

  ],
  chart: {
    type: 'area',
    height: 350,
    group: 'Number of HDB transacted',
    id: 'type2',
    stacked: true,

  },
  colors: ['#008FFB', '#00E396', '#e28743', '#42d4f5', '#f42272', '#f397d6'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

let chartsta4 = new ApexCharts(document.querySelector("#chartsta4"), optionssta4);
chartsta4.render();