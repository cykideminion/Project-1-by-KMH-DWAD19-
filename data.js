

async function loadData() {
  const response = await axios.get("data.json");
  return response.data;
  // console.log(response.data);
}

loadData();


// function filterByMaxPrice(rawData, userInput) {
//   let result = rawData.filter(data => data.resale_price < userInput);
//   console.log(result);
//   return result;
// }


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
  // let filterbystyrange = filtered.filter(filterbystRange);

  let filterbyfloorType = filtered.filter(filterbyfloortype);
  let filterbyflatType = filterbyfloorType.filter(filterbyflattype);
  priceList = filterbyflatType.map(function(record) {
    return {
      'resaleprice': record.resale_price,
      'months': monthNames[record.month]
    }

  })
  console.log("priceList", priceList);

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

//for individual charts
//AMKChart1
function transformData2(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  //shortlist the data for charts
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);
    }
  }
  const series2 = [];
  for (let dataPoint of shortlisted) {

    series2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice
    })
  }
  return series2;
}

//AMKchart2
function transformData3(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);
    }
  }
  const series3 = [];
  for (let dataPoint of shortlisted) {

    series3.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

    console.log("Series", series3);

  }
  return series3;

}

//BKDChart1
function transformDataBDK1(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart2
function transformDataBDK2(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart3
function transformDataBDK3(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart4
function transformDataBDK4(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart5
function transformDataBDK5(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart6
function transformDataBDK6(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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
function transformDataBDK7(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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
function transformDataBDK8(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart9
function transformDataBDK9(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart10
function transformDataBDK10(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart11
function transformDataBDK11(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//BDKChart12
function transformDataBDK12(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BEDOK") {
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

//bhnChart1
function transformDatabhn1(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart2
function transformDatabhn2(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart3
function transformDatabhn3(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart4
function transformDatabhn4(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
function transformDatabhn5(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart6
function transformDatabhn6(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart7
function transformDatabhn7(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart8
function transformDatabhn8(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart9
function transformDatabhn9(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart10
function transformDatabhn10(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart11
function transformDatabhn11(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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

//bhnChart12
function transformDatabhn12(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })

  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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