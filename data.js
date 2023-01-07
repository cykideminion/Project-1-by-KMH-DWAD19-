

async function loadData() {
  const response = await axios.get("data.json");
  return response.data;

}

loadData();


function transformData(rawData, town, floorType, flatType, flatType, flatType, flatType, flatType, flatType, flatType) {
  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let filterFunc = function(record) {
    if (!town) {
      return true;
    } else if (town == record.town) {
      return true;
    }
  }

  //filter by floorType
  let filterbyfloortype = function(record) {
    if (!floorType) {
      return true;
    } else if (floorType == record.storey_range) {
      return true;
    }
  }

  //filter by flatType
  let filterbyflattype = function(record) {
    if (!flatType) {
      return true;
    } else if (flatType[0] == record.flat_type || flatType[1] == record.flat_type || flatType[2] == record.flat_type || flatType[3] == record.flat_type || flatType[4] == record.flat_type || flatType[5] == record.flat_type || flatType[6] == record.flat_type) {
      return true;
    }
  }
  let filtered = rawData.filter(filterFunc);
  let filterbyfloorType = filtered.filter(filterbyfloortype);
  let filterbyflatType = filterbyfloorType.filter(filterbyflattype);
  priceList = filterbyflatType.map(function(record) {
    return {
      'resaleprice': record.resale_price,
      'months': monthNames[record.month]
    }

  })

  //creat group
  let groups = {};
  for (let i = 0; i < 12; i++) {
    // groups is not an array, it's an object
    groups[monthNames[i]] = [];  // create one array per possible month
  }

  // //categorize into months  
  for (let record of priceList) {
    groups[record.months].push(record);
  }

  //push into series
  let series = [];
  let reducer = function(total, record) {
    return parseInt(total + record.resaleprice);
  }
  for (let months in groups) {
    let group = groups[months];
    series.push({
      x: months,
      y: group.reduce(reducer, 0)
    })

  }
  return series;
}



let resalePriceList;

//for individual charts
//AMKChart1
function transformData2(data) {

  resalePriceList = data.map(function(dataPoint) {
    return {
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range
    }

  })
}
//shortlist the data for charts
function shortlistedDataAmk1() {
  let shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }


  console.log('shortlist', shortlisted)

  const seriesAmk1 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice
    })

  }

  return seriesAmk1;
}


// AMKchart2
function shortlistedDataAmk2() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk2 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk2;

}

// AMKchart3
function shortlistedDataAmk3() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk3 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk3;

}

// AMKchart4
function shortlistedDataAmk4() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk4 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk4;

}

// AMKchart5
function shortlistedDataAmk5() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk5 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk5;

}

// AMKchart6
function shortlistedDataAmk6() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk6 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk6;

}

// AMKchart7
function shortlistedDataAmk7() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk7 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk7;

}

// AMKchart8
function shortlistedDataAmk8() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk8 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk8;

}

// AMKchart9
function shortlistedDataAmk9() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk9 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk9;

}

// AMKchart10
function shortlistedDataAmk10() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk10 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk10;

}

// AMKchart11
function shortlistedDataAmk11() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk11 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk11;

}

// AMKchart12
function shortlistedDataAmk12() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);

    }
  }
  const seriesAmk12 = [];
  for (let dataPoint of shortlisted) {

    seriesAmk12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

  }
  return seriesAmk12;

}



// //BKDChart1
function shortlistedDataBdk1() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk1 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk1;

}

// //BDKChart2
function shortlistedDataBdk2() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk3 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk3;

}

// //BDKChart3
function shortlistedDataBdk3() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk3 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk3;

}

// //BDKChart4
function shortlistedDataBdk4() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk4 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk4;

}

// //BDKChart5
function shortlistedDataBdk5() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk5 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk5;

}

// //BDKChart6
function shortlistedDataBdk6() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk6 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk6;

}

//BDKChart7
function shortlistedDataBdk7() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk7 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk7;

}

//BDKChart8
function shortlistedDataBdk8() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk8 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk8;

}

// //BDKChart9
function shortlistedDataBdk9() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk9 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk9;

}

// //BDKChart10
function shortlistedDataBdk10() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk10 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk10;

}

// //BDKChart11
function shortlistedDataBdk11() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk11 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk11;

}

// //BDKChart12
function shortlistedDataBdk12() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbdk12 = [];
  for (let dataPoint of shortlisted) {

    seriesbdk12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbdk12;

}

// //bhnChart1
function shortlistedDataBhn1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn1 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn1;

}

// //bhnChart2
function shortlistedDataBhn2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn3 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn3;

}

// //bhnChart3
function shortlistedDataBhn3() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn3 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn3;

}

// //bhnChart4
function shortlistedDataBhn4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn4 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn4;

}

//bhnChart5
function shortlistedDataBhn5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn5 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn5;

}

// //bhnChart6
function shortlistedDataBhn6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn6 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn6;

}

// //bhnChart7
function shortlistedDataBhn7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn7 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn7;

}

// //bhnChart8
function shortlistedDataBhn8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn8 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn8;

}

// //bhnChart9
function shortlistedDataBhn9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn9 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn9;

}

// //bhnChart10
function shortlistedDataBhn10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn10 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn10;

}

// //bhnChart11
function shortlistedDataBhn11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn11 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn11;

}

// //bhnChart12
function shortlistedDataBhn12() {
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbhn12 = [];
  for (let dataPoint of shortlisted) {

    seriesbhn12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbhn12;

}

//bbtChart1
function shortlistedDataBbt1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt1 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt1;

}

//bbtChart2
function shortlistedDataBbt2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt3 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt3;

}

//bbtChart3
function shortlistedDataBbt3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt3 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt3;

}

//bbtChart4
function shortlistedDataBbt4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt4 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt4;

}

//bbtChart5
function shortlistedDataBbt5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt5 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt5;

}

//bbtChart6
function shortlistedDataBbt6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt6 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt6;

}

//bbtChart7
function shortlistedDataBbt7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt7 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt7;

}

//bbtChart8
function shortlistedDataBbt8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt8 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt8;

}

//bbtChart9
function shortlistedDataBbt9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt9 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt9;

}

//bbtChart10
function shortlistedDataBbt10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt10 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt10;

}

//bbtChart11
function shortlistedDataBbt11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt11 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt11;

}

//bbtChart12
function shortlistedDataBbt12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbbt12 = [];
  for (let dataPoint of shortlisted) {

    seriesbbt12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbbt12;

}

//bmhChart1
function shortlistedDataBmh1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh1 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh1;

}

//bmhChart2
function shortlistedDataBmh2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh2 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh2;

}

//bmhChart3
function shortlistedDataBmh3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh3 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh3;

}

//bmhChart4
function shortlistedDataBmh4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh4 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh4;

}

//bmhChart5
function shortlistedDataBmh5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh5 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh5;

}

//bmhChart6
function shortlistedDataBmh6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh6 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh6;

}

//bmhChart7
function shortlistedDataBmh7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh7 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh7;

}

//bmhChart8

function shortlistedDataBmh8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh8 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh8;

}
//bmhChart9
function shortlistedDataBmh9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh9 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh9;

}

//bmhChart10
function shortlistedDataBmh10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh10 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh10;

}


//bmhChart11
function shortlistedDataBmh11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh11 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh11;

}

//bmhChart12
function shortlistedDataBmh12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbmh12 = [];
  for (let dataPoint of shortlisted) {

    seriesbmh12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbmh12;

}

// //bpjChart1
function shortistedDatabpj1() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj1 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj1;

}

//bpjChart2
function shortistedDatabpj2() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj2 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj2;

}

//bpjChart3
function shortistedDatabpj3() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj3 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj3;

}

//bpjChart4
function shortistedDatabpj4() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj4 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj4;

}

//bpjChart5
function shortistedDatabpj5() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj5 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj5;

}

//bpjChart6
function shortistedDatabpj6() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj6 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj6;

}

//bpjChart7
function shortistedDatabpj7() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj7 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj7;

}

//bpjChart8
function shortistedDatabpj8() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj8 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj8;

}

//bpjChart9
function shortistedDatabpj9() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj9 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj9;

}

//bpjChart10
function shortistedDatabpj10() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj10 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj10;

}

//bpjChart11
function shortistedDatabpj11() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj11 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj11;

}

//bpjChart12
function shortistedDatabpj12() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbpj12 = [];
  for (let dataPoint of shortlisted) {

    seriesbpj12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbpj12;

}

//btmChart1
function shortistedDatabtm1() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm1 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm1;

}

//btmChart2
function shortistedDatabtm2() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm2 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm2;

}

//btmChart3
function shortistedDatabtm3() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm3 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm3;

}

//btmChart4
function shortistedDatabtm4() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm4 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm4;

}

//btmChart5
function shortistedDatabtm5() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm5 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm5;

}

//btmChart6
function shortistedDatabtm6() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm6 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm6;

}

//btmChart7
function shortistedDatabtm7() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm7 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm7;

}

//btmChart8
function shortistedDatabtm8() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm8 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm8;

}

//btmChart9
function shortistedDatabtm9() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm9 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm9;

}

//btmChart10
function shortistedDatabtm10() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm10 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm10;

}

//btmChart11
function shortistedDatabtm11() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm11 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm11;

}

//btmChart12
function shortistedDatabtm12() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesbtm12 = [];
  for (let dataPoint of shortlisted) {

    seriesbtm12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesbtm12;

}

//ctrChart1
function shortistedDatactr1() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr1 = [];
  for (let dataPoint of shortlisted) {

    seriesctr1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr1;

}

//ctrChart2
function shortistedDatactr2() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr2 = [];
  for (let dataPoint of shortlisted) {

    seriesctr2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr2;

}

//ctrChart3
function shortistedDatactr3() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr3 = [];
  for (let dataPoint of shortlisted) {

    seriesctr3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr3;

}

//ctrChart4
function shortistedDatactr4() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr4 = [];
  for (let dataPoint of shortlisted) {

    seriesctr4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr4;

}

//ctrChart5
function shortistedDatactr5() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr5 = [];
  for (let dataPoint of shortlisted) {

    seriesctr5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr5;

}

//ctrChart6
function shortistedDatactr6() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr6 = [];
  for (let dataPoint of shortlisted) {

    seriesctr6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr6;

}

//ctrChart7
function shortistedDatactr7() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr7 = [];
  for (let dataPoint of shortlisted) {

    seriesctr7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr7;

}

//ctrChart8
function shortistedDatactr8() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr8 = [];
  for (let dataPoint of shortlisted) {

    seriesctr8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr8;

}

//ctrChart9
function shortistedDatactr9() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr9 = [];
  for (let dataPoint of shortlisted) {

    seriesctr9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr9;

}

//ctrChart10
function shortistedDatactr10() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr10 = [];
  for (let dataPoint of shortlisted) {

    seriesctr10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr10;

}

//ctrChart11
function shortistedDatactr11() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr11 = [];
  for (let dataPoint of shortlisted) {

    seriesctr11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr11;

}

//ctrChart12
function shortistedDatactr12() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesctr12 = [];
  for (let dataPoint of shortlisted) {

    seriesctr12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesctr12;

}

//cckChart1
function shortistedDatacck1() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck1 = [];
  for (let dataPoint of shortlisted) {

    seriescck1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck1;

}

//cckChart2
function shortistedDatacck2() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck2 = [];
  for (let dataPoint of shortlisted) {

    seriescck2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck2;

}

//cckChart3
function shortistedDatacck3() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck3 = [];
  for (let dataPoint of shortlisted) {

    seriescck3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck3;

}

//cckChart4
function shortistedDatacck4() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck4 = [];
  for (let dataPoint of shortlisted) {

    seriescck4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck4;

}

//cckChart5
function shortistedDatacck5() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck5 = [];
  for (let dataPoint of shortlisted) {

    seriescck5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck5;

}

//cckChart6
function shortistedDatacck6() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck6 = [];
  for (let dataPoint of shortlisted) {

    seriescck6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck6;

}

//cckChart7
function shortistedDatacck7() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck7 = [];
  for (let dataPoint of shortlisted) {

    seriescck7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck7;

}

//cckChart8
function shortistedDatacck8() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck8 = [];
  for (let dataPoint of shortlisted) {

    seriescck8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck8;

}

//cckChart9
function shortistedDatacck9() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck9 = [];
  for (let dataPoint of shortlisted) {

    seriescck9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck9;

}

//cckChart10
function shortistedDatacck10() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck10 = [];
  for (let dataPoint of shortlisted) {

    seriescck10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck10;

}

//cckChart11
function shortistedDatacck11() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck11 = [];
  for (let dataPoint of shortlisted) {

    seriescck11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck11;

}

//cckChart12
function shortistedDatacck12() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescck12 = [];
  for (let dataPoint of shortlisted) {

    seriescck12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescck12;

}

//cmtChart1
function shortistedDatacmt1() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt1 = [];
  for (let dataPoint of shortlisted) {

    seriescmt1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt1;

}

//cmtChart2
function shortistedDatacmt2() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt2 = [];
  for (let dataPoint of shortlisted) {

    seriescmt2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt2;

}

//cmtChart3
function shortistedDatacmt3() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt3 = [];
  for (let dataPoint of shortlisted) {

    seriescmt3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt3;

}

//cmtChart4
function shortistedDatacmt4() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt4 = [];
  for (let dataPoint of shortlisted) {

    seriescmt4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt4;

}

//cmtChart5
function shortistedDatacmt5() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt5 = [];
  for (let dataPoint of shortlisted) {

    seriescmt5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt5;

}

//cmtChart6
function shortistedDatacmt6() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt6 = [];
  for (let dataPoint of shortlisted) {

    seriescmt6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt6;

}

//cmtChart7
function shortistedDatacmt7() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt7 = [];
  for (let dataPoint of shortlisted) {

    seriescmt7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt7;

}

//cmtChart8
function shortistedDatacmt8() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt8 = [];
  for (let dataPoint of shortlisted) {

    seriescmt8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt8;

}

//cmtChart9
function shortistedDatacmt9() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt9 = [];
  for (let dataPoint of shortlisted) {

    seriescmt9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt9;

}

//cmtChart10
function shortistedDatacmt10() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt10 = [];
  for (let dataPoint of shortlisted) {

    seriescmt10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt10;

}

//cmtChart11
function shortistedDatacmt11() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt11 = [];
  for (let dataPoint of shortlisted) {

    seriescmt11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt11;

}

//cmtChart12
function shortistedDatacmt12() {


  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
      shortlisted.push(dataPoint);
    }
  }
  const seriescmt12 = [];
  for (let dataPoint of shortlisted) {

    seriescmt12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriescmt12;

}

//geyChart1
function shortlistedDatagey1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey1 = [];
  for (let dataPoint of shortlisted) {

    seriesgey1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey1;

}

//geyChart2
function shortlistedDatagey2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey2 = [];
  for (let dataPoint of shortlisted) {

    seriesgey2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey2;

}

//geyChart3
function shortlistedDatagey3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey3 = [];
  for (let dataPoint of shortlisted) {

    seriesgey3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey3;

}

//geyChart4
function shortlistedDatagey4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey4 = [];
  for (let dataPoint of shortlisted) {

    seriesgey4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey4;

}

//geyChart5
function shortlistedDatagey5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey5 = [];
  for (let dataPoint of shortlisted) {

    seriesgey5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey5;

}

//geyChart6
function shortlistedDatagey6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey6 = [];
  for (let dataPoint of shortlisted) {

    seriesgey6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey6;

}

//geyChart7
function shortlistedDatagey7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey7 = [];
  for (let dataPoint of shortlisted) {

    seriesgey7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey7;

}

//geyChart8
function shortlistedDatagey8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey8 = [];
  for (let dataPoint of shortlisted) {

    seriesgey8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey8;

}

//geyChart9
function shortlistedDatagey9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey9 = [];
  for (let dataPoint of shortlisted) {

    seriesgey9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey9;

}

//geyChart10
function shortlistedDatagey10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey10 = [];
  for (let dataPoint of shortlisted) {

    seriesgey10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey10;

}

//geyChart11
function shortlistedDatagey11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey11 = [];
  for (let dataPoint of shortlisted) {

    seriesgey11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey11;

}

//geyChart12
function shortlistedDatagey12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "GEYLANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesgey12 = [];
  for (let dataPoint of shortlisted) {

    seriesgey12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesgey12;

}

//HkgChart1
function shortlistedDatahkg1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg1 = [];
  for (let dataPoint of shortlisted) {

    serieshkg1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg1;

}

//hkgChart2
function shortlistedDatahkg2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg2 = [];
  for (let dataPoint of shortlisted) {

    serieshkg2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg2;

}

//hkgChart3
function shortlistedDatahkg3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg3 = [];
  for (let dataPoint of shortlisted) {

    serieshkg3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg3;

}

//hkgChart4
function shortlistedDatahkg4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg4 = [];
  for (let dataPoint of shortlisted) {

    serieshkg4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg4;

}

//hkgChart5
function shortlistedDatahkg5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg5 = [];
  for (let dataPoint of shortlisted) {

    serieshkg5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg5;

}

//hkgChart6
function shortlistedDatahkg6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg6 = [];
  for (let dataPoint of shortlisted) {

    serieshkg6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg6;

}

//hkgChart7
function shortlistedDatahkg7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg7 = [];
  for (let dataPoint of shortlisted) {

    serieshkg7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg7;

}

//hkgChart8
function shortlistedDatahkg8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg8 = [];
  for (let dataPoint of shortlisted) {

    serieshkg8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg8;

}

//hkgChart9
function shortlistedDatahkg9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg9 = [];
  for (let dataPoint of shortlisted) {

    serieshkg9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg9;

}

//hkgChart10
function shortlistedDatahkg10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg10 = [];
  for (let dataPoint of shortlisted) {

    serieshkg10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg10;

}

//hkgChart11
function shortlistedDatahkg11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg11 = [];
  for (let dataPoint of shortlisted) {

    serieshkg11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg11;

}

//hkgChart12
function shortlistedDatahkg12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "HOUGANG") {
      shortlisted.push(dataPoint);
    }
  }
  const serieshkg12 = [];
  for (let dataPoint of shortlisted) {

    serieshkg12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieshkg12;

}

//JEEChart1
function shortlistedDatajee1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee1 = [];
  for (let dataPoint of shortlisted) {

    seriesjee1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee1;

}

//jeeChart2
function shortlistedDatajee2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee2 = [];
  for (let dataPoint of shortlisted) {

    seriesjee2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee2;

}

//jeeChart3
function shortlistedDatajee3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee3 = [];
  for (let dataPoint of shortlisted) {

    seriesjee3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee3;

}

//jeeChart4
function shortlistedDatajee4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee4 = [];
  for (let dataPoint of shortlisted) {

    seriesjee4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee4;

}

//jeeChart5
function shortlistedDatajee5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee5 = [];
  for (let dataPoint of shortlisted) {

    seriesjee5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee5;

}

//jeeChart6
function shortlistedDatajee6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee6 = [];
  for (let dataPoint of shortlisted) {

    seriesjee6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee6;

}

//jeeChart7
function shortlistedDatajee7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee7 = [];
  for (let dataPoint of shortlisted) {

    seriesjee7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee7;

}

//jeeChart8
function shortlistedDatajee8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee8 = [];
  for (let dataPoint of shortlisted) {

    seriesjee8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee8;

}

//jeeChart9
function shortlistedDatajee9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee9 = [];
  for (let dataPoint of shortlisted) {

    seriesjee9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee9;

}

//jeeChart10
function shortlistedDatajee10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee10 = [];
  for (let dataPoint of shortlisted) {

    seriesjee10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee10;

}

//jeeChart11
function shortlistedDatajee11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee11 = [];
  for (let dataPoint of shortlisted) {

    seriesjee11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee11;

}

//jeeChart12
function shortlistedDatajee12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG EAST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjee12 = [];
  for (let dataPoint of shortlisted) {

    seriesjee12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjee12;

}

//JewChart1
function shortlistedDatajew1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew1 = [];
  for (let dataPoint of shortlisted) {

    seriesjew1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew1;

}

//jewChart2
function shortlistedDatajew2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew2 = [];
  for (let dataPoint of shortlisted) {

    seriesjew2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew2;

}

//jewChart3
function shortlistedDatajew3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew3 = [];
  for (let dataPoint of shortlisted) {

    seriesjew3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew3;

}

//jewChart4
function shortlistedDatajew4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew4 = [];
  for (let dataPoint of shortlisted) {

    seriesjew4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew4;

}

//jewChart5
function shortlistedDatajew5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew5 = [];
  for (let dataPoint of shortlisted) {

    seriesjew5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew5;

}

//jewChart6
function shortlistedDatajew6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew6 = [];
  for (let dataPoint of shortlisted) {

    seriesjew6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew6;

}

//jewChart7
function shortlistedDatajew7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew7 = [];
  for (let dataPoint of shortlisted) {

    seriesjew7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew7;

}

//jewChart8
function shortlistedDatajew8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew8 = [];
  for (let dataPoint of shortlisted) {

    seriesjew8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew8;

}

//jewChart9
function shortlistedDatajew9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew9 = [];
  for (let dataPoint of shortlisted) {

    seriesjew9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew9;

}

//jewChart10
function shortlistedDatajew10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew10 = [];
  for (let dataPoint of shortlisted) {

    seriesjew10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew10;

}

//jewChart11
function shortlistedDatajew11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew11 = [];
  for (let dataPoint of shortlisted) {

    seriesjew11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew11;

}

//jewChart12
function shortlistedDatajew12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "JURONG WEST") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesjew12 = [];
  for (let dataPoint of shortlisted) {

    seriesjew12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesjew12;

}

//KlwpChart1
function shortlistedDataklwp1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp1 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp1;

}

//klwpChart2
function shortlistedDataklwp2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp2 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp2;

}

//klwpChart3
function shortlistedDataklwp3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp3 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp3;

}

//klwpChart4
function shortlistedDataklwp4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp4 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp4;

}

//klwpChart5
function shortlistedDataklwp5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp5 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp5;

}

//klwpChart6
function shortlistedDataklwp6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp6 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp6;

}

//klwpChart7
function shortlistedDataklwp7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp7 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp7;

}

//klwpChart8
function shortlistedDataklwp8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp8 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp8;

}

//klwpChart9
function shortlistedDataklwp9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp9 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp9;

}

//klwpChart10
function shortlistedDataklwp10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp10 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp10;

}

//klwpChart11
function shortlistedDataklwp11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp11 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp11;

}

//klwpChart12
function shortlistedDataklwp12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "KALLANG/WHAMPOA") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesklwp12 = [];
  for (let dataPoint of shortlisted) {

    seriesklwp12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesklwp12;

}

//MrpChart1
function shortlistedDataMrp1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp1 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp1;

}

//MrpChart2
function shortlistedDataMrp2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp2 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp2;

}

//MrpChart3
function shortlistedDataMrp3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp3 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp3;

}

//MrpChart4
function shortlistedDataMrp4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp4 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp4;

}

//MrpChart5
function shortlistedDataMrp5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp5 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp5;

}

//MrpChart6
function shortlistedDataMrp6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp6 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp6;

}

//MrpChart7
function shortlistedDataMrp7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp7 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp7;

}

//MrpChart8
function shortlistedDataMrp8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp8 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp8;

}

//MrpChart9
function shortlistedDataMrp9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp9 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp9;

}

//MrpChart10
function shortlistedDataMrp10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp10 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp10;

}

//MrpChart11
function shortlistedDataMrp11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp11 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp11;

}

//MrpChart12
function shortlistedDataMrp12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "MARINE PARADE") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesMrp12 = [];
  for (let dataPoint of shortlisted) {

    seriesMrp12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesMrp12;

}

//psrChart1
function shortlistedDatapsr1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr1 = [];
  for (let dataPoint of shortlisted) {

    seriespsr1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr1;

}

//psrChart2
function shortlistedDatapsr2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr2 = [];
  for (let dataPoint of shortlisted) {

    seriespsr2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr2;

}

//psrChart3
function shortlistedDatapsr3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr3 = [];
  for (let dataPoint of shortlisted) {

    seriespsr3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr3;

}

//psrChart4
function shortlistedDatapsr4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr4 = [];
  for (let dataPoint of shortlisted) {

    seriespsr4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr4;

}

//psrChart5
function shortlistedDatapsr5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr5 = [];
  for (let dataPoint of shortlisted) {

    seriespsr5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr5;

}

//psrChart6
function shortlistedDatapsr6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr6 = [];
  for (let dataPoint of shortlisted) {

    seriespsr6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr6;

}

//psrChart7
function shortlistedDatapsr7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr7 = [];
  for (let dataPoint of shortlisted) {

    seriespsr7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr7;

}

//psrChart8
function shortlistedDatapsr8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr8 = [];
  for (let dataPoint of shortlisted) {

    seriespsr8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr8;

}

//psrChart9
function shortlistedDatapsr9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr9 = [];
  for (let dataPoint of shortlisted) {

    seriespsr9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr9;

}

//psrChart10
function shortlistedDatapsr10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr10 = [];
  for (let dataPoint of shortlisted) {

    seriespsr10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr10;

}

//psrChart11
function shortlistedDatapsr11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr11 = [];
  for (let dataPoint of shortlisted) {

    seriespsr11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr11;

}

//psrChart12
function shortlistedDatapsr12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PASIR RIS") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespsr12 = [];
  for (let dataPoint of shortlisted) {

    seriespsr12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespsr12;

}

//pggChart1
function shortlistedDatapgg1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg1 = [];
  for (let dataPoint of shortlisted) {

    seriespgg1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg1;

}

//pggChart2
function shortlistedDatapgg2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg2 = [];
  for (let dataPoint of shortlisted) {

    seriespgg2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg2;

}

//pggChart3
function shortlistedDatapgg3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg3 = [];
  for (let dataPoint of shortlisted) {

    seriespgg3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg3;

}

//pggChart4
function shortlistedDatapgg4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg4 = [];
  for (let dataPoint of shortlisted) {

    seriespgg4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg4;

}

//pggChart5
function shortlistedDatapgg5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg5 = [];
  for (let dataPoint of shortlisted) {

    seriespgg5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg5;

}

//pggChart6
function shortlistedDatapgg6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg6 = [];
  for (let dataPoint of shortlisted) {

    seriespgg6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg6;

}

//pggChart7
function shortlistedDatapgg7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg7 = [];
  for (let dataPoint of shortlisted) {

    seriespgg7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg7;

}

//pggChart8
function shortlistedDatapgg8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg8 = [];
  for (let dataPoint of shortlisted) {

    seriespgg8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg8;

}

//pggChart9
function shortlistedDatapgg9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg9 = [];
  for (let dataPoint of shortlisted) {

    seriespgg9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg9;

}

//pggChart10
function shortlistedDatapgg10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg10 = [];
  for (let dataPoint of shortlisted) {

    seriespgg10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg10;

}

//pggChart11
function shortlistedDatapgg11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg11 = [];
  for (let dataPoint of shortlisted) {

    seriespgg11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg11;

}

//pggChart12
function shortlistedDatapgg12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "PUNGGOL") {
      shortlisted.push(dataPoint);
    }
  }
  const seriespgg12 = [];
  for (let dataPoint of shortlisted) {

    seriespgg12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriespgg12;

}

//qstChart1
function shortlistedDataqst1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst1 = [];
  for (let dataPoint of shortlisted) {

    seriesqst1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst1;

}

//qstChart2
function shortlistedDataqst2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst2 = [];
  for (let dataPoint of shortlisted) {

    seriesqst2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst2;

}

//qstChart3
function shortlistedDataqst3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst3 = [];
  for (let dataPoint of shortlisted) {

    seriesqst3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst3;

}

//qstChart4
function shortlistedDataqst4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst4 = [];
  for (let dataPoint of shortlisted) {

    seriesqst4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst4;

}

//qstChart5
function shortlistedDataqst5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst5 = [];
  for (let dataPoint of shortlisted) {

    seriesqst5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst5;

}

//qstChart6
function shortlistedDataqst6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst6 = [];
  for (let dataPoint of shortlisted) {

    seriesqst6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst6;

}

//qstChart7
function shortlistedDataqst7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst7 = [];
  for (let dataPoint of shortlisted) {

    seriesqst7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst7;

}

//qstChart8
function shortlistedDataqst8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst8 = [];
  for (let dataPoint of shortlisted) {

    seriesqst8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst8;

}

//qstChart9
function shortlistedDataqst9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst9 = [];
  for (let dataPoint of shortlisted) {

    seriesqst9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst9;

}

//qstChart10
function shortlistedDataqst10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst10 = [];
  for (let dataPoint of shortlisted) {

    seriesqst10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst10;

}

//qstChart11
function shortlistedDataqst11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst11 = [];
  for (let dataPoint of shortlisted) {

    seriesqst11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst11;

}

//qstChart12
function shortlistedDataqst12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "QUEENSTOWN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesqst12 = [];
  for (let dataPoint of shortlisted) {

    seriesqst12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesqst12;

}

//sbwChart1
function shortlistedDatasbw1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw1 = [];
  for (let dataPoint of shortlisted) {

    seriessbw1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw1;

}

//sbwChart2
function shortlistedDatasbw2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw2 = [];
  for (let dataPoint of shortlisted) {

    seriessbw2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw2;

}

//sbwChart3
function shortlistedDatasbw3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw3 = [];
  for (let dataPoint of shortlisted) {

    seriessbw3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw3;

}

//sbwChart4
function shortlistedDatasbw4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw4 = [];
  for (let dataPoint of shortlisted) {

    seriessbw4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw4;

}

//sbwChart5
function shortlistedDatasbw5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw5 = [];
  for (let dataPoint of shortlisted) {

    seriessbw5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw5;

}

//sbwChart6
function shortlistedDatasbw6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw6 = [];
  for (let dataPoint of shortlisted) {

    seriessbw6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw6;

}

//sbwChart7
function shortlistedDatasbw7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw7 = [];
  for (let dataPoint of shortlisted) {

    seriessbw7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw7;

}

//sbwChart8
function shortlistedDatasbw8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw8 = [];
  for (let dataPoint of shortlisted) {

    seriessbw8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw8;

}

//sbwChart9
function shortlistedDatasbw9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw9 = [];
  for (let dataPoint of shortlisted) {

    seriessbw9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw9;

}

//sbwChart10
function shortlistedDatasbw10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw10 = [];
  for (let dataPoint of shortlisted) {

    seriessbw10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw10;

}

//sbwChart11
function shortlistedDatasbw11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw11 = [];
  for (let dataPoint of shortlisted) {

    seriessbw11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw11;

}

//sbwChart12
function shortlistedDatasbw12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SEMBAWANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessbw12 = [];
  for (let dataPoint of shortlisted) {

    seriessbw12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessbw12;

}

//skgChart1
function shortlistedDataskg1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg1 = [];
  for (let dataPoint of shortlisted) {

    seriesskg1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg1;

}

//skgChart2
function shortlistedDataskg2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg2 = [];
  for (let dataPoint of shortlisted) {

    seriesskg2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg2;

}

//skgChart3
function shortlistedDataskg3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg3 = [];
  for (let dataPoint of shortlisted) {

    seriesskg3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg3;

}

//skgChart4
function shortlistedDataskg4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg4 = [];
  for (let dataPoint of shortlisted) {

    seriesskg4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg4;

}

//skgChart5
function shortlistedDataskg5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg5 = [];
  for (let dataPoint of shortlisted) {

    seriesskg5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg5;

}

//skgChart6
function shortlistedDataskg6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg6 = [];
  for (let dataPoint of shortlisted) {

    seriesskg6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg6;

}

//skgChart7
function shortlistedDataskg7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg7 = [];
  for (let dataPoint of shortlisted) {

    seriesskg7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg7;

}

//skgChart8
function shortlistedDataskg8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg8 = [];
  for (let dataPoint of shortlisted) {

    seriesskg8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg8;

}

//skgChart9
function shortlistedDataskg9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg9 = [];
  for (let dataPoint of shortlisted) {

    seriesskg9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg9;

}

//skgChart10
function shortlistedDataskg10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg10 = [];
  for (let dataPoint of shortlisted) {

    seriesskg10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg10;

}

//skgChart11
function shortlistedDataskg11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg11 = [];
  for (let dataPoint of shortlisted) {

    seriesskg11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg11;

}

//skgChart12
function shortlistedDataskg12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SENGKANG") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesskg12 = [];
  for (let dataPoint of shortlisted) {

    seriesskg12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesskg12;

}

//srgChart1
function shortlistedDatasrg1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg1 = [];
  for (let dataPoint of shortlisted) {

    seriessrg1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg1;

}

//srgChart2
function shortlistedDatasrg2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg2 = [];
  for (let dataPoint of shortlisted) {

    seriessrg2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg2;

}

//srgChart3
function shortlistedDatasrg3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg3 = [];
  for (let dataPoint of shortlisted) {

    seriessrg3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg3;

}

//srgChart4
function shortlistedDatasrg4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg4 = [];
  for (let dataPoint of shortlisted) {

    seriessrg4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg4;

}

//srgChart5
function shortlistedDatasrg5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg5 = [];
  for (let dataPoint of shortlisted) {

    seriessrg5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg5;

}

//srgChart6
function shortlistedDatasrg6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg6 = [];
  for (let dataPoint of shortlisted) {

    seriessrg6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg6;

}

//srgChart7
function shortlistedDatasrg7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg7 = [];
  for (let dataPoint of shortlisted) {

    seriessrg7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg7;

}

//srgChart8
function shortlistedDatasrg8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg8 = [];
  for (let dataPoint of shortlisted) {

    seriessrg8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg8;

}

//srgChart9
function shortlistedDatasrg9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg9 = [];
  for (let dataPoint of shortlisted) {

    seriessrg9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg9;

}

//srgChart10
function shortlistedDatasrg10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg10 = [];
  for (let dataPoint of shortlisted) {

    seriessrg10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg10;

}

//srgChart11
function shortlistedDatasrg11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg11 = [];
  for (let dataPoint of shortlisted) {

    seriessrg11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg11;

}

//srgChart12
function shortlistedDatasrg12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "SERANGOON") {
      shortlisted.push(dataPoint);
    }
  }
  const seriessrg12 = [];
  for (let dataPoint of shortlisted) {

    seriessrg12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriessrg12;

}

//tmpChart1
function shortlistedDatatmp1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp1 = [];
  for (let dataPoint of shortlisted) {

    seriestmp1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp1;

}

//tmpChart2
function shortlistedDatatmp2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp2 = [];
  for (let dataPoint of shortlisted) {

    seriestmp2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp2;

}

//tmpChart3
function shortlistedDatatmp3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp3 = [];
  for (let dataPoint of shortlisted) {

    seriestmp3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp3;

}

//tmpChart4
function shortlistedDatatmp4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp4 = [];
  for (let dataPoint of shortlisted) {

    seriestmp4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp4;

}

//tmpChart5
function shortlistedDatatmp5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp5 = [];
  for (let dataPoint of shortlisted) {

    seriestmp5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp5;

}

//tmpChart6
function shortlistedDatatmp6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp6 = [];
  for (let dataPoint of shortlisted) {

    seriestmp6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp6;

}

//tmpChart7
function shortlistedDatatmp7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp7 = [];
  for (let dataPoint of shortlisted) {

    seriestmp7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp7;

}

//tmpChart8
function shortlistedDatatmp8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp8 = [];
  for (let dataPoint of shortlisted) {

    seriestmp8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp8;

}

//tmpChart9
function shortlistedDatatmp9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp9 = [];
  for (let dataPoint of shortlisted) {

    seriestmp9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp9;

}

//tmpChart10
function shortlistedDatatmp10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp10 = [];
  for (let dataPoint of shortlisted) {

    seriestmp10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp10;

}

//tmpChart11
function shortlistedDatatmp11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp11 = [];
  for (let dataPoint of shortlisted) {

    seriestmp11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp11;

}

//tmpChart12
function shortlistedDatatmp12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TAMPINES") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestmp12 = [];
  for (let dataPoint of shortlisted) {

    seriestmp12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestmp12;

}

//tpyChart1
function shortlistedDatatpy1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy1 = [];
  for (let dataPoint of shortlisted) {

    seriestpy1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy1;

}

//tpyChart1
function shortlistedDatatpy1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy1 = [];
  for (let dataPoint of shortlisted) {

    seriestpy1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy1;

}

//tpyChart2
function shortlistedDatatpy2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy2 = [];
  for (let dataPoint of shortlisted) {

    seriestpy2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy2;

}

//tpyChart3
function shortlistedDatatpy3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy3 = [];
  for (let dataPoint of shortlisted) {

    seriestpy3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy3;

}

//tpyChart4
function shortlistedDatatpy4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy4 = [];
  for (let dataPoint of shortlisted) {

    seriestpy4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy4;

}

//tpyChart5
function shortlistedDatatpy5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy5 = [];
  for (let dataPoint of shortlisted) {

    seriestpy5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy5;

}

//tpyChart6
function shortlistedDatatpy6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy6 = [];
  for (let dataPoint of shortlisted) {

    seriestpy6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy6;

}

//tpyChart7
function shortlistedDatatpy7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy7 = [];
  for (let dataPoint of shortlisted) {

    seriestpy7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy7;

}

//tpyChart8
function shortlistedDatatpy8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy8 = [];
  for (let dataPoint of shortlisted) {

    seriestpy8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy8;

}

//tpyChart9
function shortlistedDatatpy9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy9 = [];
  for (let dataPoint of shortlisted) {

    seriestpy9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy9;

}

//tpyChart10
function shortlistedDatatpy10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy10 = [];
  for (let dataPoint of shortlisted) {

    seriestpy10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy10;

}

//tpyChart11
function shortlistedDatatpy11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy11 = [];
  for (let dataPoint of shortlisted) {

    seriestpy11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy11;

}

//tpyChart12
function shortlistedDatatpy12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "TOA PAYOH") {
      shortlisted.push(dataPoint);
    }
  }
  const seriestpy12 = [];
  for (let dataPoint of shortlisted) {

    seriestpy12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriestpy12;

}

//wdlChart1
function shortlistedDatawdl1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl1 = [];
  for (let dataPoint of shortlisted) {

    serieswdl1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl1;

}

//wdlChart2
function shortlistedDatawdl2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl3 = [];
  for (let dataPoint of shortlisted) {

    serieswdl3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl3;

}

//wdlChart3
function shortlistedDatawdl3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl3 = [];
  for (let dataPoint of shortlisted) {

    serieswdl3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl3;

}

//wdlChart4
function shortlistedDatawdl4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl4 = [];
  for (let dataPoint of shortlisted) {

    serieswdl4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl4;

}

//wdlChart5
function shortlistedDatawdl5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl5 = [];
  for (let dataPoint of shortlisted) {

    serieswdl5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl5;

}

//wdlChart6
function shortlistedDatawdl6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl6 = [];
  for (let dataPoint of shortlisted) {

    serieswdl6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl6;

}

//wdlChart7
function shortlistedDatawdl7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl7 = [];
  for (let dataPoint of shortlisted) {

    serieswdl7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl7;

}

//wdlChart8
function shortlistedDatawdl8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl8 = [];
  for (let dataPoint of shortlisted) {

    serieswdl8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl8;

}

//wdlChart9
function shortlistedDatawdl9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl9 = [];
  for (let dataPoint of shortlisted) {

    serieswdl9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl9;

}

//wdlChart10
function shortlistedDatawdl10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl10 = [];
  for (let dataPoint of shortlisted) {

    serieswdl10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl10;

}

//wdlChart11
function shortlistedDatawdl11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl11 = [];
  for (let dataPoint of shortlisted) {

    serieswdl11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl11;

}

//wdlChart12
function shortlistedDatawdl12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "WOODLANDS") {
      shortlisted.push(dataPoint);
    }
  }
  const serieswdl12 = [];
  for (let dataPoint of shortlisted) {

    serieswdl12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return serieswdl12;

}

//yhnChart1
function shortlistedDatayhn1() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn1 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn1.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn1;

}

//yhnChart2
function shortlistedDatayhn2() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn3 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn3;

}

//yhnChart3
function shortlistedDatayhn3() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn3 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn3;

}

//yhnChart4
function shortlistedDatayhn4() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn4 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn4.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn4;

}

//yhnChart5
function shortlistedDatayhn5() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn5 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn5.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn5;

}

//yhnChart6
function shortlistedDatayhn6() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn6 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn6.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn6;

}

//yhnChart7
function shortlistedDatayhn7() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn7 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn7.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn7;

}

//yhnChart8
function shortlistedDatayhn8() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn8 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn8.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn8;

}

//yhnChart9
function shortlistedDatayhn9() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn9 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn9.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn9;

}

//yhnChart10
function shortlistedDatayhn10() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn10 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn10.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn10;

}

//yhnChart11
function shortlistedDatayhn11() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn11 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn11.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn11;

}

//yhnChart12
function shortlistedDatayhn12() {

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "YISHUN") {
      shortlisted.push(dataPoint);
    }
  }
  const seriesyhn12 = [];
  for (let dataPoint of shortlisted) {

    seriesyhn12.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
  }
  return seriesyhn12;

}