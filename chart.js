

window.addEventListener("DOMContentLoaded", async function() {
  const data = await loadData('data.js');
  let seriesAmk1 = shortlistedDataAmk1(transformData2(data));
  let seriesAmk2 = shortlistedDataAmk2(transformData2(data));
  let seriesAmk3 = shortlistedDataAmk3(transformData2(data));
  let seriesAmk4 = shortlistedDataAmk4(transformData2(data));
  let seriesAmk5 = shortlistedDataAmk5(transformData2(data));
  let seriesAmk6 = shortlistedDataAmk6(transformData2(data));
  let seriesAmk7 = shortlistedDataAmk7(transformData2(data));
  let seriesAmk8 = shortlistedDataAmk8(transformData2(data));
  let seriesAmk9 = shortlistedDataAmk9(transformData2(data));
  let seriesAmk10 = shortlistedDataAmk10(transformData2(data));
  let seriesAmk11 = shortlistedDataAmk11(transformData2(data));
  let seriesAmk12 = shortlistedDataAmk12(transformData2(data));

  // Bedok
  let seriesbdk1 = shortlistedDataBdk1(transformData2(data));
  let seriesbdk2 = shortlistedDataBdk2(transformData2(data));
  let seriesbdk3 = shortlistedDataBdk3(transformData2(data));
  let seriesbdk4 = shortlistedDataBdk4(transformData2(data));
  let seriesbdk5 = shortlistedDataBdk5(transformData2(data));
  let seriesbdk6 = shortlistedDataBdk6(transformData2(data));
  let seriesbdk7 = shortlistedDataBdk7(transformData2(data));
  let seriesbdk8 = shortlistedDataBdk8(transformData2(data));
  let seriesbdk9 = shortlistedDataBdk9(transformData2(data));
  let seriesbdk10 = shortlistedDataBdk10(transformData2(data));
  let seriesbdk11 = shortlistedDataBdk11(transformData2(data));
  let seriesbdk12 = shortlistedDataBdk12(transformData2(data));

  // / Bishan
  let seriesbhn1 = shortlistedDataBhn1(transformData2(data));
  let seriesbhn2 = shortlistedDataBhn2(transformData2(data));
  let seriesbhn3 = shortlistedDataBhn3(transformData2(data));
  let seriesbhn4 = shortlistedDataBhn4(transformData2(data));
  let seriesbhn5 = shortlistedDataBhn5(transformData2(data));
  let seriesbhn6 = shortlistedDataBhn6(transformData2(data));
  let seriesbhn7 = shortlistedDataBhn7(transformData2(data));
  let seriesbhn8 = shortlistedDataBhn8(transformData2(data));
  let seriesbhn9 = shortlistedDataBhn9(transformData2(data));
  let seriesbhn10 = shortlistedDataBhn10(transformData2(data));
  let seriesbhn11 = shortlistedDataBhn11(transformData2(data));
  let seriesbhn12 = shortlistedDataBhn12(transformData2(data));

  // Bukit Batok
  let seriesbbt1 = shortlistedDataBbt1(transformData2(data));
  let seriesbbt2 = shortlistedDataBbt2(transformData2(data));
  let seriesbbt3 = shortlistedDataBbt3(transformData2(data));
  let seriesbbt4 = shortlistedDataBbt4(transformData2(data));
  let seriesbbt5 = shortlistedDataBbt5(transformData2(data));
  let seriesbbt6 = shortlistedDataBbt6(transformData2(data));
  let seriesbbt7 = shortlistedDataBbt7(transformData2(data));
  let seriesbbt8 = shortlistedDataBbt8(transformData2(data));
  let seriesbbt9 = shortlistedDataBbt9(transformData2(data));
  let seriesbbt10 = shortlistedDataBbt10(transformData2(data));
  let seriesbbt11 = shortlistedDataBbt11(transformData2(data));
  let seriesbbt12 = shortlistedDataBbt12(transformData2(data));

  // Bukit Merah
  let seriesbmh1 = shortlistedDataBmh1(transformData2(data));
  let seriesbmh2 = shortlistedDataBmh2(transformData2(data));
  let seriesbmh3 = shortlistedDataBmh3(transformData2(data));
  let seriesbmh4 = shortlistedDataBmh4(transformData2(data));
  let seriesbmh5 = shortlistedDataBmh5(transformData2(data));
  let seriesbmh6 = shortlistedDataBmh6(transformData2(data));
  let seriesbmh7 = shortlistedDataBmh7(transformData2(data));
  let seriesbmh8 = shortlistedDataBmh8(transformData2(data));
  let seriesbmh9 = shortlistedDataBmh9(transformData2(data));
  let seriesbmh10 = shortlistedDataBmh10(transformData2(data));
  let seriesbmh11 = shortlistedDataBmh11(transformData2(data));
  let seriesbmh12 = shortlistedDataBmh12(transformData2(data));

  // Bukit Panjang
  let seriesbpj1 = shortistedDatabpj1(transformData2(data));
  let seriesbpj2 = shortistedDatabpj2(transformData2(data));
  let seriesbpj3 = shortistedDatabpj3(transformData2(data));
  let seriesbpj4 = shortistedDatabpj4(transformData2(data));
  let seriesbpj5 = shortistedDatabpj5(transformData2(data));
  let seriesbpj6 = shortistedDatabpj6(transformData2(data));
  let seriesbpj7 = shortistedDatabpj7(transformData2(data));
  let seriesbpj8 = shortistedDatabpj8(transformData2(data));
  let seriesbpj9 = shortistedDatabpj9(transformData2(data));
  let seriesbpj10 = shortistedDatabpj10(transformData2(data));
  let seriesbpj11 = shortistedDatabpj11(transformData2(data));
  let seriesbpj12 = shortistedDatabpj12(transformData2(data));

  // Bukit Timah
  let seriesbtm1 = shortistedDatabtm1(transformData2(data));
  let seriesbtm2 = shortistedDatabtm2(transformData2(data));
  let seriesbtm3 = shortistedDatabtm3(transformData2(data));
  let seriesbtm4 = shortistedDatabtm4(transformData2(data));
  let seriesbtm5 = shortistedDatabtm5(transformData2(data));
  let seriesbtm6 = shortistedDatabtm6(transformData2(data));
  let seriesbtm7 = shortistedDatabtm7(transformData2(data));
  let seriesbtm8 = shortistedDatabtm8(transformData2(data));
  let seriesbtm9 = shortistedDatabtm9(transformData2(data));
  let seriesbtm10 = shortistedDatabtm10(transformData2(data));
  let seriesbtm11 = shortistedDatabtm11(transformData2(data));
  let seriesbtm12 = shortistedDatabtm12(transformData2(data));

  // Central Area
  let seriesctr1 = shortistedDatactr1(transformData2(data));
  let seriesctr2 = shortistedDatactr2(transformData2(data));
  let seriesctr3 = shortistedDatactr3(transformData2(data));
  let seriesctr4 = shortistedDatactr4(transformData2(data));
  let seriesctr5 = shortistedDatactr5(transformData2(data));
  let seriesctr6 = shortistedDatactr6(transformData2(data));
  let seriesctr7 = shortistedDatactr7(transformData2(data));
  let seriesctr8 = shortistedDatactr8(transformData2(data));
  let seriesctr9 = shortistedDatactr9(transformData2(data));
  let seriesctr10 = shortistedDatactr10(transformData2(data));
  let seriesctr11 = shortistedDatactr11(transformData2(data));
  let seriesctr12 = shortistedDatactr12(transformData2(data));

  // Choa Chu Kang
  let seriescck1 = shortistedDatacck1(transformData2(data));
  let seriescck2 = shortistedDatacck2(transformData2(data));
  let seriescck3 = shortistedDatacck3(transformData2(data));
  let seriescck4 = shortistedDatacck4(transformData2(data));
  let seriescck5 = shortistedDatacck5(transformData2(data));
  let seriescck6 = shortistedDatacck6(transformData2(data));
  let seriescck7 = shortistedDatacck7(transformData2(data));
  let seriescck8 = shortistedDatacck8(transformData2(data));
  let seriescck9 = shortistedDatacck9(transformData2(data));
  let seriescck10 = shortistedDatacck10(transformData2(data));
  let seriescck11 = shortistedDatacck11(transformData2(data));
  let seriescck12 = shortistedDatacck12(transformData2(data));

  // Clementi
  let seriescmt1 = shortistedDatacmt1(transformData2(data));
  let seriescmt2 = shortistedDatacmt2(transformData2(data));
  let seriescmt3 = shortistedDatacmt3(transformData2(data));
  let seriescmt4 = shortistedDatacmt4(transformData2(data));
  let seriescmt5 = shortistedDatacmt5(transformData2(data));
  let seriescmt6 = shortistedDatacmt6(transformData2(data));
  let seriescmt7 = shortistedDatacmt7(transformData2(data));
  let seriescmt8 = shortistedDatacmt8(transformData2(data));
  let seriescmt9 = shortistedDatacmt9(transformData2(data));
  let seriescmt10 = shortistedDatacmt10(transformData2(data));
  let seriescmt11 = shortistedDatacmt11(transformData2(data));
  let seriescmt12 = shortistedDatacmt12(transformData2(data));

  // Geylang
  let seriesgey1 = shortlistedDatagey1(transformData2(data));
  let seriesgey2 = shortlistedDatagey2(transformData2(data));
  let seriesgey3 = shortlistedDatagey3(transformData2(data));
  let seriesgey4 = shortlistedDatagey4(transformData2(data));
  let seriesgey5 = shortlistedDatagey5(transformData2(data));
  let seriesgey6 = shortlistedDatagey6(transformData2(data));
  let seriesgey7 = shortlistedDatagey7(transformData2(data));
  let seriesgey8 = shortlistedDatagey8(transformData2(data));
  let seriesgey9 = shortlistedDatagey9(transformData2(data));
  let seriesgey10 = shortlistedDatagey10(transformData2(data));
  let seriesgey11 = shortlistedDatagey11(transformData2(data));
  let seriesgey12 = shortlistedDatagey12(transformData2(data));

  // Hougang
  let serieshkg1 = shortlistedDatahkg1(transformData2(data));
  let serieshkg2 = shortlistedDatahkg2(transformData2(data));
  let serieshkg3 = shortlistedDatahkg3(transformData2(data));
  let serieshkg4 = shortlistedDatahkg4(transformData2(data));
  let serieshkg5 = shortlistedDatahkg5(transformData2(data));
  let serieshkg6 = shortlistedDatahkg6(transformData2(data));
  let serieshkg7 = shortlistedDatahkg7(transformData2(data));
  let serieshkg8 = shortlistedDatahkg8(transformData2(data));
  let serieshkg9 = shortlistedDatahkg9(transformData2(data));
  let serieshkg10 = shortlistedDatahkg10(transformData2(data));
  let serieshkg11 = shortlistedDatahkg11(transformData2(data));
  let serieshkg12 = shortlistedDatahkg12(transformData2(data));

  // Jurong East
  let seriesjee1 = shortlistedDatajee1(transformData2(data));
  let seriesjee2 = shortlistedDatajee2(transformData2(data));
  let seriesjee3 = shortlistedDatajee3(transformData2(data));
  let seriesjee4 = shortlistedDatajee4(transformData2(data));
  let seriesjee5 = shortlistedDatajee5(transformData2(data));
  let seriesjee6 = shortlistedDatajee6(transformData2(data));
  let seriesjee7 = shortlistedDatajee7(transformData2(data));
  let seriesjee8 = shortlistedDatajee8(transformData2(data));
  let seriesjee9 = shortlistedDatajee9(transformData2(data));
  let seriesjee10 = shortlistedDatajee10(transformData2(data));
  let seriesjee11 = shortlistedDatajee11(transformData2(data));
  let seriesjee12 = shortlistedDatajee12(transformData2(data));

  // Jurong West
  let seriesjew1 = shortlistedDatajew1(transformData2(data));
  let seriesjew2 = shortlistedDatajew2(transformData2(data));
  let seriesjew3 = shortlistedDatajew3(transformData2(data));
  let seriesjew4 = shortlistedDatajew4(transformData2(data));
  let seriesjew5 = shortlistedDatajew5(transformData2(data));
  let seriesjew6 = shortlistedDatajew6(transformData2(data));
  let seriesjew7 = shortlistedDatajew7(transformData2(data));
  let seriesjew8 = shortlistedDatajew8(transformData2(data));
  let seriesjew9 = shortlistedDatajew9(transformData2(data));
  let seriesjew10 = shortlistedDatajew10(transformData2(data));
  let seriesjew11 = shortlistedDatajew11(transformData2(data));
  let seriesjew12 = shortlistedDatajew12(transformData2(data));

  // Kallang/Whampoa
  let seriesklwp1 = shortlistedDataklwp1(transformData2(data));
  let seriesklwp2 = shortlistedDataklwp2(transformData2(data));
  let seriesklwp3 = shortlistedDataklwp3(transformData2(data));
  let seriesklwp4 = shortlistedDataklwp4(transformData2(data));
  let seriesklwp5 = shortlistedDataklwp5(transformData2(data));
  let seriesklwp6 = shortlistedDataklwp6(transformData2(data));
  let seriesklwp7 = shortlistedDataklwp7(transformData2(data));
  let seriesklwp8 = shortlistedDataklwp8(transformData2(data));
  let seriesklwp9 = shortlistedDataklwp9(transformData2(data));
  let seriesklwp10 = shortlistedDataklwp10(transformData2(data));
  let seriesklwp11 = shortlistedDataklwp11(transformData2(data));
  let seriesklwp12 = shortlistedDataklwp12(transformData2(data));

  // Marine Parade
  let seriesMrp1 = shortlistedDataMrp1(transformData2(data));
  let seriesMrp2 = shortlistedDataMrp2(transformData2(data));
  let seriesMrp3 = shortlistedDataMrp3(transformData2(data));
  let seriesMrp4 = shortlistedDataMrp4(transformData2(data));
  let seriesMrp5 = shortlistedDataMrp5(transformData2(data));
  let seriesMrp6 = shortlistedDataMrp6(transformData2(data));
  let seriesMrp7 = shortlistedDataMrp7(transformData2(data));
  let seriesMrp8 = shortlistedDataMrp8(transformData2(data));
  let seriesMrp9 = shortlistedDataMrp9(transformData2(data));
  let seriesMrp10 = shortlistedDataMrp10(transformData2(data));
  let seriesMrp11 = shortlistedDataMrp11(transformData2(data));
  let seriesMrp12 = shortlistedDataMrp12(transformData2(data));

  // Pasir Ris
  let seriespsr1 = shortlistedDatapsr1(transformData2(data));
  let seriespsr2 = shortlistedDatapsr2(transformData2(data));
  let seriespsr3 = shortlistedDatapsr3(transformData2(data));
  let seriespsr4 = shortlistedDatapsr4(transformData2(data));
  let seriespsr5 = shortlistedDatapsr5(transformData2(data));
  let seriespsr6 = shortlistedDatapsr6(transformData2(data));
  let seriespsr7 = shortlistedDatapsr7(transformData2(data));
  let seriespsr8 = shortlistedDatapsr8(transformData2(data));
  let seriespsr9 = shortlistedDatapsr9(transformData2(data));
  let seriespsr10 = shortlistedDatapsr10(transformData2(data));
  let seriespsr11 = shortlistedDatapsr11(transformData2(data));
  let seriespsr12 = shortlistedDatapsr12(transformData2(data));

  // Punggol
  let seriespgg1 = shortlistedDatapgg1(transformData2(data));
  let seriespgg2 = shortlistedDatapgg2(transformData2(data));
  let seriespgg3 = shortlistedDatapgg3(transformData2(data));
  let seriespgg4 = shortlistedDatapgg4(transformData2(data));
  let seriespgg5 = shortlistedDatapgg5(transformData2(data));
  let seriespgg6 = shortlistedDatapgg6(transformData2(data));
  let seriespgg7 = shortlistedDatapgg7(transformData2(data));
  let seriespgg8 = shortlistedDatapgg8(transformData2(data));
  let seriespgg9 = shortlistedDatapgg9(transformData2(data));
  let seriespgg10 = shortlistedDatapgg10(transformData2(data));
  let seriespgg11 = shortlistedDatapgg11(transformData2(data));
  let seriespgg12 = shortlistedDatapgg12(transformData2(data));

  // Queenstown
  let seriesqst1 = shortlistedDataqst1(transformData2(data));
  let seriesqst2 = shortlistedDataqst2(transformData2(data));
  let seriesqst3 = shortlistedDataqst3(transformData2(data));
  let seriesqst4 = shortlistedDataqst4(transformData2(data));
  let seriesqst5 = shortlistedDataqst5(transformData2(data));
  let seriesqst6 = shortlistedDataqst6(transformData2(data));
  let seriesqst7 = shortlistedDataqst7(transformData2(data));
  let seriesqst8 = shortlistedDataqst8(transformData2(data));
  let seriesqst9 = shortlistedDataqst9(transformData2(data));
  let seriesqst10 = shortlistedDataqst10(transformData2(data));
  let seriesqst11 = shortlistedDataqst11(transformData2(data));
  let seriesqst12 = shortlistedDataqst12(transformData2(data));

  // Sembawang
  let seriessbw1 = shortlistedDatasbw1(transformData2(data));
  let seriessbw2 = shortlistedDatasbw2(transformData2(data));
  let seriessbw3 = shortlistedDatasbw3(transformData2(data));
  let seriessbw4 = shortlistedDatasbw4(transformData2(data));
  let seriessbw5 = shortlistedDatasbw5(transformData2(data));
  let seriessbw6 = shortlistedDatasbw6(transformData2(data));
  let seriessbw7 = shortlistedDatasbw7(transformData2(data));
  let seriessbw8 = shortlistedDatasbw8(transformData2(data));
  let seriessbw9 = shortlistedDatasbw9(transformData2(data));
  let seriessbw10 = shortlistedDatasbw10(transformData2(data));
  let seriessbw11 = shortlistedDatasbw11(transformData2(data));
  let seriessbw12 = shortlistedDatasbw12(transformData2(data));

  // Sengkang
  let seriesskg1 = shortlistedDataskg1(transformData2(data));
  let seriesskg2 = shortlistedDataskg2(transformData2(data));
  let seriesskg3 = shortlistedDataskg3(transformData2(data));
  let seriesskg4 = shortlistedDataskg4(transformData2(data));
  let seriesskg5 = shortlistedDataskg5(transformData2(data));
  let seriesskg6 = shortlistedDataskg6(transformData2(data));
  let seriesskg7 = shortlistedDataskg7(transformData2(data));
  let seriesskg8 = shortlistedDataskg8(transformData2(data));
  let seriesskg9 = shortlistedDataskg9(transformData2(data));
  let seriesskg10 = shortlistedDataskg10(transformData2(data));
  let seriesskg11 = shortlistedDataskg11(transformData2(data));
  let seriesskg12 = shortlistedDataskg12(transformData2(data));

  // Serangoon
  let seriessrg1 = shortlistedDatasrg1(transformData2(data));
  let seriessrg2 = shortlistedDatasrg2(transformData2(data));
  let seriessrg3 = shortlistedDatasrg3(transformData2(data));
  let seriessrg4 = shortlistedDatasrg4(transformData2(data));
  let seriessrg5 = shortlistedDatasrg5(transformData2(data));
  let seriessrg6 = shortlistedDatasrg6(transformData2(data));
  let seriessrg7 = shortlistedDatasrg7(transformData2(data));
  let seriessrg8 = shortlistedDatasrg8(transformData2(data));
  let seriessrg9 = shortlistedDatasrg9(transformData2(data));
  let seriessrg10 = shortlistedDatasrg10(transformData2(data));
  let seriessrg11 = shortlistedDatasrg11(transformData2(data));
  let seriessrg12 = shortlistedDatasrg12(transformData2(data));

  // Tampines
  let seriestmp1 = shortlistedDatatmp1(transformData2(data));
  let seriestmp2 = shortlistedDatatmp2(transformData2(data));
  let seriestmp3 = shortlistedDatatmp3(transformData2(data));
  let seriestmp4 = shortlistedDatatmp4(transformData2(data));
  let seriestmp5 = shortlistedDatatmp5(transformData2(data));
  let seriestmp6 = shortlistedDatatmp6(transformData2(data));
  let seriestmp7 = shortlistedDatatmp7(transformData2(data));
  let seriestmp8 = shortlistedDatatmp8(transformData2(data));
  let seriestmp9 = shortlistedDatatmp9(transformData2(data));
  let seriestmp10 = shortlistedDatatmp10(transformData2(data));
  let seriestmp11 = shortlistedDatatmp11(transformData2(data));
  let seriestmp12 = shortlistedDatatmp12(transformData2(data));

  // Toa Payoh
  let seriestpy1 = shortlistedDatatpy1(transformData2(data));
  let seriestpy2 = shortlistedDatatpy2(transformData2(data));
  let seriestpy3 = shortlistedDatatpy3(transformData2(data));
  let seriestpy4 = shortlistedDatatpy4(transformData2(data));
  let seriestpy5 = shortlistedDatatpy5(transformData2(data));
  let seriestpy6 = shortlistedDatatpy6(transformData2(data));
  let seriestpy7 = shortlistedDatatpy7(transformData2(data));
  let seriestpy8 = shortlistedDatatpy8(transformData2(data));
  let seriestpy9 = shortlistedDatatpy9(transformData2(data));
  let seriestpy10 = shortlistedDatatpy10(transformData2(data));
  let seriestpy11 = shortlistedDatatpy11(transformData2(data));
  let seriestpy12 = shortlistedDatatpy12(transformData2(data));

  // Toa Payoh
  let serieswdl1 = shortlistedDatawdl1(transformData2(data));
  let serieswdl2 = shortlistedDatawdl2(transformData2(data));
  let serieswdl3 = shortlistedDatawdl3(transformData2(data));
  let serieswdl4 = shortlistedDatawdl4(transformData2(data));
  let serieswdl5 = shortlistedDatawdl5(transformData2(data));
  let serieswdl6 = shortlistedDatawdl6(transformData2(data));
  let serieswdl7 = shortlistedDatawdl7(transformData2(data));
  let serieswdl8 = shortlistedDatawdl8(transformData2(data));
  let serieswdl9 = shortlistedDatawdl9(transformData2(data));
  let serieswdl10 = shortlistedDatawdl10(transformData2(data));
  let serieswdl11 = shortlistedDatawdl11(transformData2(data));
  let serieswdl12 = shortlistedDatawdl12(transformData2(data));

  // Yishun
  let seriesyhn1 = shortlistedDatayhn1(transformData2(data));
  let seriesyhn2 = shortlistedDatayhn2(transformData2(data));
  let seriesyhn3 = shortlistedDatayhn3(transformData2(data));
  let seriesyhn4 = shortlistedDatayhn4(transformData2(data));
  let seriesyhn5 = shortlistedDatayhn5(transformData2(data));
  let seriesyhn6 = shortlistedDatayhn6(transformData2(data));
  let seriesyhn7 = shortlistedDatayhn7(transformData2(data));
  let seriesyhn8 = shortlistedDatayhn8(transformData2(data));
  let seriesyhn9 = shortlistedDatayhn9(transformData2(data));
  let seriesyhn10 = shortlistedDatayhn10(transformData2(data));
  let seriesyhn11 = shortlistedDatayhn11(transformData2(data));
  let seriesyhn12 = shortlistedDatayhn12(transformData2(data));

  // AMK Jan Chart
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

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');
    // let series2 = shortlistedDataAmk1(transformData2(data));


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesAmk1
      }

    ])
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



    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk2
      }
    ])
  }

  // AMK Mar chart
  drawChartAMK3();
  function drawChartAMK3() {
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
        text: 'Mar HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart3'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk3
      }
    ])
  }

  // AMK Apr chart
  drawChartAMK4();
  function drawChartAMK4() {
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
        text: 'Apr HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart4'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk4
      }
    ])
  }

  // AMK May chart
  drawChartAMK5();
  function drawChartAMK5() {
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
        text: 'May HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart5'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk5
      }
    ])
  }

  // AMK Jun chart
  drawChartAMK6();
  function drawChartAMK6() {
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
        text: 'Jun HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart6'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk6
      }
    ])
  }

  // AMK Jul chart
  drawChartAMK7();
  function drawChartAMK7() {
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
        text: 'Jul HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart7'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk7
      }
    ])
  }

  // AMK Aug chart
  drawChartAMK8();
  function drawChartAMK8() {
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
        text: 'Aug HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart8'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk8
      }
    ])
  }

  // AMK Sep chart
  drawChartAMK9();
  function drawChartAMK9() {
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
        text: 'Sep HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart9'), options);

    // render the chart
    chart.render()

    // window.addEventListener("DOMContentLoaded", async function() {
    // const data = await loadData('data.js');    
    // let series3 = shortlistedDataAmk2(transformData2(data));

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk9
      }
    ])
  }

  // AMK Oct chart
  drawChartAMK10();
  function drawChartAMK10() {
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
        text: 'Oct HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart10'), options);

    // render the chart
    chart.render()


    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk10
      }
    ])
  }

  // AMK Nov chart
  drawChartAMK11();
  function drawChartAMK11() {
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
        text: 'Nov HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart11'), options);

    // render the chart
    chart.render()


    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk11
      }
    ])
  }

  // AMK Dec chart
  drawChartAMK12();
  function drawChartAMK12() {
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
        text: 'Dec HDB Sale Transaction Price',
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
    const chart = new ApexCharts(document.querySelector('#amkchart12'), options);

    // render the chart
    chart.render()

    chart.updateSeries([

      {
        'name': 'Sales',
        'data': seriesAmk12
      }
    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk1
      }

    ])

  }

  // //Bedok Feb Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk2
      }

    ])
  }

  // //Bedok Mar Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk3
      }

    ])
  }

  // //Bedok April Chart
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



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk4
      }

    ])
  }

  // //Bedok May Chart
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk5
      }

    ])
  }


  // //Bedok Jun Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk6
      }

    ])
  }

  // //Bedok Julu Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk7
      }

    ])
  }


  // //Bedok Aug Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk8
      }

    ])
  }

  // //Bedok Sept Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk9
      }

    ])
  }


  // //Bedok Oct Chart
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk10
      }

    ])
  }


  // //Bedok Nov Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk11
      }

    ])
  }

  // //Bedok Dec Chart
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbdk12
      }

    ])
  }



  // //Bishan Jan Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn1
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn2
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn3
      }

    ])
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



    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn4
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn5
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn6
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn7
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn8
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn9
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn10
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn11
      }

    ])
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
    const chart = new ApexCharts(document.querySelector('#bhnchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbhn12
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt1
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt2
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt3
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt4
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt5
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt6
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt7
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt8
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt9
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt10
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt11
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbbt12
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh1
      }

    ])
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
    const chart = new ApexCharts(document.querySelector('#bmhchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh2
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh3
      }

    ])
  }

  //BMH Apr Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh4
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh5
      }

    ])
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
    const chart = new ApexCharts(document.querySelector('#bmhchart6'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh6
      }

    ])
  }

  //BMH Jul Chart
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
    const chart = new ApexCharts(document.querySelector('#bmhchart7'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh7
      }

    ])
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
    const chart = new ApexCharts(document.querySelector('#bmhchart8'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh8
      }

    ])
  }

  //BMH Sep Chart
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh9
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh10
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh11
      }

    ])
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
    const chart = new ApexCharts(document.querySelector('#bmhchart12'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbmh12
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj1
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj3
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj3
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj4
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj5
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj6
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj7
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj8
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj9
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj10
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj11
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbpj12
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm1
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm2
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm3
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm4
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm5
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm6
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm7
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm8
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm9
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm10
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm11
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesbtm12
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr1
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr2
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr3
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr4
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr5
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr6
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr7
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr8
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr9
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr10
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr11
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesctr12
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck1
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck2
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck3
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck4
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck5
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck6
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck7
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck8
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck9
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck10
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck11
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescck12
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt1
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt2
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt3
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt4
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt5
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt6
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt7
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt8
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt9
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt10
      }

    ])
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

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt11
      }

    ])
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


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriescmt12
      }

    ])
  }

  //GEY Jan Chart
  drawChartgey1();
  function drawChartgey1() {
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
    const chart = new ApexCharts(document.querySelector('#geychart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey1
      }

    ])
  }

  //GEY Feb Chart
  drawChartgey2();
  function drawChartgey2() {
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
    const chart = new ApexCharts(document.querySelector('#geychart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey2
      }

    ])
  }

  //GEY Mar Chart
  drawChartgey3();
  function drawChartgey3() {
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
    const chart = new ApexCharts(document.querySelector('#geychart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey3
      }

    ])
  }

  //GEY April Chart
  drawChartgey4();
  function drawChartgey4() {
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
    const chart = new ApexCharts(document.querySelector('#geychart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey4
      }

    ])
  }

  //GEY May Chart
  drawChartgey5();
  function drawChartgey5() {
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
    const chart = new ApexCharts(document.querySelector('#geychart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey5
      }

    ])
  }

  //GEY Jun Chart
  drawChartgey6();
  function drawChartgey6() {
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
    const chart = new ApexCharts(document.querySelector('#geychart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey6
      }

    ])
  }

  //GEY Julu Chart
  drawChartgey7();
  function drawChartgey7() {
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
    const chart = new ApexCharts(document.querySelector('#geychart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey7
      }

    ])
  }

  //GEY Aug Chart
  drawChartgey8();
  function drawChartgey8() {
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
    const chart = new ApexCharts(document.querySelector('#geychart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey8
      }

    ])
  }


  //GEY Sept Chart
  drawChartgey9();
  function drawChartgey9() {
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
    const chart = new ApexCharts(document.querySelector('#geychart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey9
      }

    ])
  }


  //GEY Oct Chart
  drawChartgey10();
  function drawChartgey10() {
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
    const chart = new ApexCharts(document.querySelector('#geychart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey10
      }

    ])
  }

  //GEY Nov Chart
  drawChartgey11();
  function drawChartgey11() {
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
    const chart = new ApexCharts(document.querySelector('#geychart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey11
      }

    ])
  }

  //GEY Dec Chart
  drawChartgey12();
  function drawChartgey12() {
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
    const chart = new ApexCharts(document.querySelector('#geychart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesgey12
      }

    ])
  }

  //HKG Jan Chart
  drawCharthkg1();
  function drawCharthkg1() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg1
      }

    ])
  }

  //HKG Feb Chart
  drawCharthkg2();
  function drawCharthkg2() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg2
      }

    ])
  }

  //HKG Mar Chart
  drawCharthkg3();
  function drawCharthkg3() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg3
      }

    ])
  }

  //HKG April Chart
  drawCharthkg4();
  function drawCharthkg4() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg4
      }

    ])
  }

  //HKG May Chart
  drawCharthkg5();
  function drawCharthkg5() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg5
      }

    ])
  }

  //HKG Jun Chart
  drawCharthkg6();
  function drawCharthkg6() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg6
      }

    ])
  }

  //HKG Julu Chart
  drawCharthkg7();
  function drawCharthkg7() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg7
      }

    ])
  }

  //HKG Aug Chart
  drawCharthkg8();
  function drawCharthkg8() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg8
      }

    ])
  }


  //HKG Sept Chart
  drawCharthkg9();
  function drawCharthkg9() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg9
      }

    ])
  }


  //HKG Oct Chart
  drawCharthkg10();
  function drawCharthkg10() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg10
      }

    ])
  }

  //HKG Nov Chart
  drawCharthkg11();
  function drawCharthkg11() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg11
      }

    ])
  }

  //HKG Dec Chart
  drawCharthkg12();
  function drawCharthkg12() {
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
    const chart = new ApexCharts(document.querySelector('#hkgchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieshkg12
      }

    ])
  }

  //JEE Jan Chart
  drawChartjee1();
  function drawChartjee1() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee1
      }

    ])
  }

  //JEE Feb Chart
  drawChartjee2();
  function drawChartjee2() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee2
      }

    ])
  }

  //JEE Mar Chart
  drawChartjee3();
  function drawChartjee3() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee3
      }

    ])
  }

  //JEE April Chart
  drawChartjee4();
  function drawChartjee4() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee4
      }

    ])
  }

  //JEE May Chart
  drawChartjee5();
  function drawChartjee5() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee5
      }

    ])
  }

  //JEE Jun Chart
  drawChartjee6();
  function drawChartjee6() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee6
      }

    ])
  }

  //JEE Julu Chart
  drawChartjee7();
  function drawChartjee7() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee7
      }

    ])
  }

  //JEE Aug Chart
  drawChartjee8();
  function drawChartjee8() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee8
      }

    ])
  }


  //JEE Sept Chart
  drawChartjee9();
  function drawChartjee9() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee9
      }

    ])
  }


  //JEE Oct Chart
  drawChartjee10();
  function drawChartjee10() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee10
      }

    ])
  }

  //JEE Nov Chart
  drawChartjee11();
  function drawChartjee11() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee11
      }

    ])
  }

  //JEE Dec Chart
  drawChartjee12();
  function drawChartjee12() {
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
    const chart = new ApexCharts(document.querySelector('#jeechart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjee12
      }

    ])
  }

  //JEW Jan Chart
  drawChartjew1();
  function drawChartjew1() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew1
      }

    ])
  }

  //JEW Feb Chart
  drawChartjew2();
  function drawChartjew2() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew2
      }

    ])
  }

  //JEW Mar Chart
  drawChartjew3();
  function drawChartjew3() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew3
      }

    ])
  }

  //JEW April Chart
  drawChartjew4();
  function drawChartjew4() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew4
      }

    ])
  }

  //JEW May Chart
  drawChartjew5();
  function drawChartjew5() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew5
      }

    ])
  }

  //JEW Jun Chart
  drawChartjew6();
  function drawChartjew6() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew6
      }

    ])
  }

  //JEW Julu Chart
  drawChartjew7();
  function drawChartjew7() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew7
      }

    ])
  }

  //JEW Aug Chart
  drawChartjew8();
  function drawChartjew8() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew8
      }

    ])
  }


  //JEW Sept Chart
  drawChartjew9();
  function drawChartjew9() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew9
      }

    ])
  }


  //JEW Oct Chart
  drawChartjew10();
  function drawChartjew10() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew10
      }

    ])
  }

  //JEW Nov Chart
  drawChartjew11();
  function drawChartjew11() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew11
      }

    ])
  }

  //JEW Dec Chart
  drawChartjew12();
  function drawChartjew12() {
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
    const chart = new ApexCharts(document.querySelector('#jewchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesjew12
      }

    ])
  }

  //KLWP Jan Chart
  drawChartklwp1();
  function drawChartklwp1() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp1
      }

    ])
  }

  //KLWP Feb Chart
  drawChartklwp2();
  function drawChartklwp2() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp2
      }

    ])
  }

  //KLWP Mar Chart
  drawChartklwp3();
  function drawChartklwp3() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp3
      }

    ])
  }

  //KLWP April Chart
  drawChartklwp4();
  function drawChartklwp4() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp4
      }

    ])
  }

  //KLWP May Chart
  drawChartklwp5();
  function drawChartklwp5() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp5
      }

    ])
  }

  //KLWP Jun Chart
  drawChartklwp6();
  function drawChartklwp6() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp6
      }

    ])
  }

  //KLWP Julu Chart
  drawChartklwp7();
  function drawChartklwp7() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp7
      }

    ])
  }

  //KLWP Aug Chart
  drawChartklwp8();
  function drawChartklwp8() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp8
      }

    ])
  }


  //KLWP Sept Chart
  drawChartklwp9();
  function drawChartklwp9() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp9
      }

    ])
  }


  //KLWP Oct Chart
  drawChartklwp10();
  function drawChartklwp10() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp10
      }

    ])
  }

  //KLWP Nov Chart
  drawChartklwp11();
  function drawChartklwp11() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp11
      }

    ])
  }

  //KLWP Dec Chart
  drawChartklwp12();
  function drawChartklwp12() {
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
    const chart = new ApexCharts(document.querySelector('#klwpchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesklwp12
      }

    ])
  }

  //Mrp Jan Chart
  drawChartMrp1();
  function drawChartMrp1() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp1
      }

    ])
  }

  //MRP Feb Chart
  drawChartMrp2();
  function drawChartMrp2() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp2
      }

    ])
  }

  //MRP Mar Chart
  drawChartMrp3();
  function drawChartMrp3() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp3
      }

    ])
  }

  //MRP April Chart
  drawChartMrp4();
  function drawChartMrp4() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp4
      }

    ])
  }

  //MRP May Chart
  drawChartMrp5();
  function drawChartMrp5() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp5
      }

    ])
  }

  //MRP Jun Chart
  drawChartMrp6();
  function drawChartMrp6() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp6
      }

    ])
  }

  //MRP Julu Chart
  drawChartMrp7();
  function drawChartMrp7() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp7
      }

    ])
  }

  //MRP Aug Chart
  drawChartMrp8();
  function drawChartMrp8() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp8
      }

    ])
  }


  //MRP Sept Chart
  drawChartMrp9();
  function drawChartMrp9() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp9
      }

    ])
  }


  //MRP Oct Chart
  drawChartMrp10();
  function drawChartMrp10() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp10
      }

    ])
  }

  //MRP Nov Chart
  drawChartMrp11();
  function drawChartMrp11() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp11
      }

    ])
  }

  //MRP Dec Chart
  drawChartMrp12();
  function drawChartMrp12() {
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
    const chart = new ApexCharts(document.querySelector('#Mrpchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesMrp12
      }

    ])
  }


  //psr Jan Chart
  drawChartpsr1();
  function drawChartpsr1() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr1
      }

    ])
  }

  //MRP Feb Chart
  drawChartpsr2();
  function drawChartpsr2() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr2
      }

    ])
  }

  //MRP Mar Chart
  drawChartpsr3();
  function drawChartpsr3() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr3
      }

    ])
  }

  //MRP April Chart
  drawChartpsr4();
  function drawChartpsr4() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr4
      }

    ])
  }

  //MRP May Chart
  drawChartpsr5();
  function drawChartpsr5() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr5
      }

    ])
  }

  //MRP Jun Chart
  drawChartpsr6();
  function drawChartpsr6() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr6
      }

    ])
  }

  //MRP Julu Chart
  drawChartpsr7();
  function drawChartpsr7() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr7
      }

    ])
  }

  //MRP Aug Chart
  drawChartpsr8();
  function drawChartpsr8() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr8
      }

    ])
  }


  //MRP Sept Chart
  drawChartpsr9();
  function drawChartpsr9() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr9
      }

    ])
  }


  //MRP Oct Chart
  drawChartpsr10();
  function drawChartpsr10() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr10
      }

    ])
  }

  //MRP Nov Chart
  drawChartpsr11();
  function drawChartpsr11() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr11
      }

    ])
  }

  //MRP Dec Chart
  drawChartpsr12();
  function drawChartpsr12() {
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
    const chart = new ApexCharts(document.querySelector('#psrchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespsr12
      }

    ])
  }


  //pgg Jan Chart
  drawChartpgg1();
  function drawChartpgg1() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg1
      }

    ])
  }

  //MRP Feb Chart
  drawChartpgg2();
  function drawChartpgg2() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg2
      }

    ])
  }

  //MRP Mar Chart
  drawChartpgg3();
  function drawChartpgg3() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg3
      }

    ])
  }

  //MRP April Chart
  drawChartpgg4();
  function drawChartpgg4() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg4
      }

    ])
  }

  //MRP May Chart
  drawChartpgg5();
  function drawChartpgg5() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg5
      }

    ])
  }

  //MRP Jun Chart
  drawChartpgg6();
  function drawChartpgg6() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg6
      }

    ])
  }

  //MRP Julu Chart
  drawChartpgg7();
  function drawChartpgg7() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg7
      }

    ])
  }

  //MRP Aug Chart
  drawChartpgg8();
  function drawChartpgg8() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg8
      }

    ])
  }


  //MRP Sept Chart
  drawChartpgg9();
  function drawChartpgg9() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg9
      }

    ])
  }


  //MRP Oct Chart
  drawChartpgg10();
  function drawChartpgg10() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg10
      }

    ])
  }

  //MRP Nov Chart
  drawChartpgg11();
  function drawChartpgg11() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg11
      }

    ])
  }

  //MRP Dec Chart
  drawChartpgg12();
  function drawChartpgg12() {
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
    const chart = new ApexCharts(document.querySelector('#pggchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriespgg12
      }

    ])
  }

  //qst Jan Chart
  drawChartqst1();
  function drawChartqst1() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst1
      }

    ])
  }

  //MRP Feb Chart
  drawChartqst2();
  function drawChartqst2() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst2
      }

    ])
  }

  //MRP Mar Chart
  drawChartqst3();
  function drawChartqst3() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst3
      }

    ])
  }

  //MRP April Chart
  drawChartqst4();
  function drawChartqst4() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst4
      }

    ])
  }

  //MRP May Chart
  drawChartqst5();
  function drawChartqst5() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst5
      }

    ])
  }

  //MRP Jun Chart
  drawChartqst6();
  function drawChartqst6() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst6
      }

    ])
  }

  //MRP Julu Chart
  drawChartqst7();
  function drawChartqst7() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst7
      }

    ])
  }

  //MRP Aug Chart
  drawChartqst8();
  function drawChartqst8() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst8
      }

    ])
  }


  //MRP Sept Chart
  drawChartqst9();
  function drawChartqst9() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst9
      }

    ])
  }


  //MRP Oct Chart
  drawChartqst10();
  function drawChartqst10() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst10
      }

    ])
  }

  //MRP Nov Chart
  drawChartqst11();
  function drawChartqst11() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst11
      }

    ])
  }

  //MRP Dec Chart
  drawChartqst12();
  function drawChartqst12() {
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
    const chart = new ApexCharts(document.querySelector('#qstchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesqst12
      }

    ])
  }

  //sbw Jan Chart
  drawChartsbw1();
  function drawChartsbw1() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw1
      }

    ])
  }

  //MRP Feb Chart
  drawChartsbw2();
  function drawChartsbw2() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw2
      }

    ])
  }

  //MRP Mar Chart
  drawChartsbw3();
  function drawChartsbw3() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw3
      }

    ])
  }

  //MRP April Chart
  drawChartsbw4();
  function drawChartsbw4() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw4
      }

    ])
  }

  //MRP May Chart
  drawChartsbw5();
  function drawChartsbw5() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw5
      }

    ])
  }

  //MRP Jun Chart
  drawChartsbw6();
  function drawChartsbw6() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw6
      }

    ])
  }

  //MRP Julu Chart
  drawChartsbw7();
  function drawChartsbw7() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw7
      }

    ])
  }

  //MRP Aug Chart
  drawChartsbw8();
  function drawChartsbw8() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw8
      }

    ])
  }


  //MRP Sept Chart
  drawChartsbw9();
  function drawChartsbw9() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw9
      }

    ])
  }


  //MRP Oct Chart
  drawChartsbw10();
  function drawChartsbw10() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw10
      }

    ])
  }

  //MRP Nov Chart
  drawChartsbw11();
  function drawChartsbw11() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw11
      }

    ])
  }

  //MRP Dec Chart
  drawChartsbw12();
  function drawChartsbw12() {
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
    const chart = new ApexCharts(document.querySelector('#sbwchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessbw12
      }

    ])
  }


  //skg Jan Chart
  drawChartskg1();
  function drawChartskg1() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg1
      }

    ])
  }

  //MRP Feb Chart
  drawChartskg2();
  function drawChartskg2() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg2
      }

    ])
  }

  //MRP Mar Chart
  drawChartskg3();
  function drawChartskg3() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg3
      }

    ])
  }

  //MRP April Chart
  drawChartskg4();
  function drawChartskg4() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg4
      }

    ])
  }

  //MRP May Chart
  drawChartskg5();
  function drawChartskg5() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg5
      }

    ])
  }

  //MRP Jun Chart
  drawChartskg6();
  function drawChartskg6() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg6
      }

    ])
  }

  //MRP Julu Chart
  drawChartskg7();
  function drawChartskg7() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg7
      }

    ])
  }

  //MRP Aug Chart
  drawChartskg8();
  function drawChartskg8() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg8
      }

    ])
  }


  //MRP Sept Chart
  drawChartskg9();
  function drawChartskg9() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg9
      }

    ])
  }


  //MRP Oct Chart
  drawChartskg10();
  function drawChartskg10() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg10
      }

    ])
  }

  //MRP Nov Chart
  drawChartskg11();
  function drawChartskg11() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg11
      }

    ])
  }

  //MRP Dec Chart
  drawChartskg12();
  function drawChartskg12() {
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
    const chart = new ApexCharts(document.querySelector('#skgchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesskg12
      }

    ])
  }

  //srg Jan Chart
  drawChartsrg1();
  function drawChartsrg1() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg1
      }

    ])
  }

  //MRP Feb Chart
  drawChartsrg2();
  function drawChartsrg2() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg2
      }

    ])
  }

  //MRP Mar Chart
  drawChartsrg3();
  function drawChartsrg3() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg3
      }

    ])
  }

  //MRP April Chart
  drawChartsrg4();
  function drawChartsrg4() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg4
      }

    ])
  }

  //MRP May Chart
  drawChartsrg5();
  function drawChartsrg5() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg5
      }

    ])
  }

  //MRP Jun Chart
  drawChartsrg6();
  function drawChartsrg6() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg6
      }

    ])
  }

  //MRP Julu Chart
  drawChartsrg7();
  function drawChartsrg7() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg7
      }

    ])
  }

  //MRP Aug Chart
  drawChartsrg8();
  function drawChartsrg8() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg8
      }

    ])
  }


  //MRP Sept Chart
  drawChartsrg9();
  function drawChartsrg9() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg9
      }

    ])
  }


  //MRP Oct Chart
  drawChartsrg10();
  function drawChartsrg10() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg10
      }

    ])
  }

  //MRP Nov Chart
  drawChartsrg11();
  function drawChartsrg11() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg11
      }

    ])
  }

  //MRP Dec Chart
  drawChartsrg12();
  function drawChartsrg12() {
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
    const chart = new ApexCharts(document.querySelector('#srgchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriessrg12
      }

    ])
  }


  //tmp Jan Chart
  drawCharttmp1();
  function drawCharttmp1() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp1
      }

    ])
  }

  //MRP Feb Chart
  drawCharttmp2();
  function drawCharttmp2() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp2
      }

    ])
  }

  //MRP Mar Chart
  drawCharttmp3();
  function drawCharttmp3() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp3
      }

    ])
  }

  //MRP April Chart
  drawCharttmp4();
  function drawCharttmp4() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp4
      }

    ])
  }

  //MRP May Chart
  drawCharttmp5();
  function drawCharttmp5() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp5
      }

    ])
  }

  //MRP Jun Chart
  drawCharttmp6();
  function drawCharttmp6() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp6
      }

    ])
  }

  //MRP Julu Chart
  drawCharttmp7();
  function drawCharttmp7() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp7
      }

    ])
  }

  //MRP Aug Chart
  drawCharttmp8();
  function drawCharttmp8() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp8
      }

    ])
  }


  //MRP Sept Chart
  drawCharttmp9();
  function drawCharttmp9() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp9
      }

    ])
  }


  //MRP Oct Chart
  drawCharttmp10();
  function drawCharttmp10() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp10
      }

    ])
  }

  //MRP Nov Chart
  drawCharttmp11();
  function drawCharttmp11() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp11
      }

    ])
  }

  //MRP Dec Chart
  drawCharttmp12();
  function drawCharttmp12() {
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
    const chart = new ApexCharts(document.querySelector('#tmpchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestmp12
      }

    ])
  }


  //tpy Jan Chart
  drawCharttpy1();
  function drawCharttpy1() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy1
      }

    ])
  }

  //MRP Feb Chart
  drawCharttpy2();
  function drawCharttpy2() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy2
      }

    ])
  }

  //MRP Mar Chart
  drawCharttpy3();
  function drawCharttpy3() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy3
      }

    ])
  }

  //MRP April Chart
  drawCharttpy4();
  function drawCharttpy4() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy4
      }

    ])
  }

  //MRP May Chart
  drawCharttpy5();
  function drawCharttpy5() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy5
      }

    ])
  }

  //MRP Jun Chart
  drawCharttpy6();
  function drawCharttpy6() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy6
      }

    ])
  }

  //MRP Julu Chart
  drawCharttpy7();
  function drawCharttpy7() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy7
      }

    ])
  }

  //MRP Aug Chart
  drawCharttpy8();
  function drawCharttpy8() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy8
      }

    ])
  }


  //MRP Sept Chart
  drawCharttpy9();
  function drawCharttpy9() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy9
      }

    ])
  }


  //MRP Oct Chart
  drawCharttpy10();
  function drawCharttpy10() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy10
      }

    ])
  }

  //MRP Nov Chart
  drawCharttpy11();
  function drawCharttpy11() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy11
      }

    ])
  }

  //MRP Dec Chart
  drawCharttpy12();
  function drawCharttpy12() {
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
    const chart = new ApexCharts(document.querySelector('#tpychart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriestpy12
      }

    ])
  }


  //wdl Jan Chart
  drawChartwdl1();
  function drawChartwdl1() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl1
      }

    ])
  }

  //MRP Feb Chart
  drawChartwdl2();
  function drawChartwdl2() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl2
      }

    ])
  }

  //MRP Mar Chart
  drawChartwdl3();
  function drawChartwdl3() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl3
      }

    ])
  }

  //MRP April Chart
  drawChartwdl4();
  function drawChartwdl4() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl4
      }

    ])
  }

  //MRP May Chart
  drawChartwdl5();
  function drawChartwdl5() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl5
      }

    ])
  }

  //MRP Jun Chart
  drawChartwdl6();
  function drawChartwdl6() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl6
      }

    ])
  }

  //MRP Julu Chart
  drawChartwdl7();
  function drawChartwdl7() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl7
      }

    ])
  }

  //MRP Aug Chart
  drawChartwdl8();
  function drawChartwdl8() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl8
      }

    ])
  }


  //MRP Sept Chart
  drawChartwdl9();
  function drawChartwdl9() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl9
      }

    ])
  }


  //MRP Oct Chart
  drawChartwdl10();
  function drawChartwdl10() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl10
      }

    ])
  }

  //MRP Nov Chart
  drawChartwdl11();
  function drawChartwdl11() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl11
      }

    ])
  }

  //MRP Dec Chart
  drawChartwdl12();
  function drawChartwdl12() {
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
    const chart = new ApexCharts(document.querySelector('#wdlchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': serieswdl12
      }

    ])
  }

  //yhn Jan Chart
  drawChartyhn1();
  function drawChartyhn1() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart1'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn1
      }

    ])
  }

  //MRP Feb Chart
  drawChartyhn2();
  function drawChartyhn2() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart2'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn2
      }

    ])
  }

  //MRP Mar Chart
  drawChartyhn3();
  function drawChartyhn3() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart3'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn3
      }

    ])
  }

  //MRP April Chart
  drawChartyhn4();
  function drawChartyhn4() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart4'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn4
      }

    ])
  }

  //MRP May Chart
  drawChartyhn5();
  function drawChartyhn5() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart5'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn5
      }

    ])
  }

  //MRP Jun Chart
  drawChartyhn6();
  function drawChartyhn6() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart6'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn6
      }

    ])
  }

  //MRP Julu Chart
  drawChartyhn7();
  function drawChartyhn7() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart7'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn7
      }

    ])
  }

  //MRP Aug Chart
  drawChartyhn8();
  function drawChartyhn8() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart8'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn8
      }

    ])
  }


  //MRP Sept Chart
  drawChartyhn9();
  function drawChartyhn9() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart9'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn9
      }

    ])
  }


  //MRP Oct Chart
  drawChartyhn10();
  function drawChartyhn10() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart10'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn10
      }

    ])
  }

  //MRP Nov Chart
  drawChartyhn11();
  function drawChartyhn11() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart11'), options);

    // render the chart
    chart.render()

    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn11
      }

    ])
  }

  //MRP Dec Chart
  drawChartyhn12();
  function drawChartyhn12() {
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
    const chart = new ApexCharts(document.querySelector('#yhnchart12'), options);

    // render the chart
    chart.render()


    chart.updateSeries([
      {
        'name': 'Sales',
        'data': seriesyhn12
      }

    ])
  }


})
