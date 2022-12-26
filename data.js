

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
    } else if (flatType == record.flat_type) {
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
  console.log("resalePriceList", resalePriceList)

  //shortlist the data for charts
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);
    }
  }
  console.log("shortlisted", shortlisted);
  const series2 = [];
  for (let dataPoint of shortlisted) {

    series2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

    console.log("Series", series2);

  }
  return series2;

}