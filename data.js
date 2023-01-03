

// async function loadData() {
//   const response = await axios.get("data.json");
//   return response.data;
  
// }

// loadData();


// function transformData(rawData, town, floorType, flatType, flatType, flatType, flatType, flatType, flatType, flatType) {
//   let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//   let filterFunc = function(record) {
//     if (!town) {
//       return true;
//     } else if (town == record.town) {
//       return true;
//     }
//   }

//   //filter by floorType
//   let filterbyfloortype = function(record) {
//     if (!floorType) {
//       return true;
//     } else if (floorType == record.storey_range) {
//       return true;
//     }
//   }

//   //filter by flatType
//   let filterbyflattype = function(record) {
//     if (!flatType) {
//       return true;
//     } else if (flatType[0] == record.flat_type || flatType[1] == record.flat_type || flatType[2] == record.flat_type || flatType[3] == record.flat_type || flatType[4] == record.flat_type || flatType[5] == record.flat_type || flatType[6] == record.flat_type) {
//       return true;
//     }
//   }
//   let filtered = rawData.filter(filterFunc);
//   let filterbyfloorType = filtered.filter(filterbyfloortype);
//   let filterbyflatType = filterbyfloorType.filter(filterbyflattype);
//   priceList = filterbyflatType.map(function(record) {
//     return {
//       'resaleprice': record.resale_price,
//       'months': monthNames[record.month]
//     }

//   })

//   //creat group
//   let groups = {};
//   for (let i = 0; i < 12; i++) {
//     // groups is not an array, it's an object
//     groups[monthNames[i]] = [];  // create one array per possible month
//   }

//   // //categorize into months  
//   for (let record of priceList) {
//     groups[record.months].push(record);
//   }

//   //push into series
//   let series = [];
//   let reducer = function(total, record) {
//     return parseInt(total + record.resaleprice);
//   }
//   for (let months in groups) {
//     let group = groups[months];
//     series.push({
//       x: months,
//       y: group.reduce(reducer, 0)
//     })

//   }
//   return series;
// }

// //for individual charts
// //AMKChart1
// function transformData2(data) {

//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   //shortlist the data for charts
//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
//       shortlisted.push(dataPoint);

//     }

//   }

//   const series2 = [];
//   for (let dataPoint of shortlisted) {

//     series2.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice
//     })

//   }

//   return series2;
// }


// //AMKchart2
// function transformData3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "ANG MO KIO") {
//       shortlisted.push(dataPoint);
//       console.log("Number", Object.keys(shortlisted).length);

//     }
//   }
//   const series3 = [];
//   for (let dataPoint of shortlisted) {

//     series3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })

//     console.log("Series3", series3);


//   }
//   return series3;

// }

// //BKDChart1
// function transformDataBDK1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }

//   })
//   console.log('resale pricelist', resalePriceList);

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk1;

// }

// //BDKChart2
// function transformDataBDK2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk3;

// }

// //BDKChart3
// function transformDataBDK3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk3;

// }

// //BDKChart4
// function transformDataBDK4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk4;

// }

// //BDKChart5
// function transformDataBDK5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk5;

// }

// //BDKChart6
// function transformDataBDK6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk6;

// }

// //BDKChart7
// function transformDataBDK7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk7;

// }

// //BDKChart8
// function transformDataBDK8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk8;

// }

// //BDKChart9
// function transformDataBDK9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk9;

// }

// //BDKChart10
// function transformDataBDK10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk10;

// }

// //BDKChart11
// function transformDataBDK11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk11;

// }

// //BDKChart12
// function transformDataBDK12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BEDOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbdk12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbdk12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbdk12;

// }

// //bhnChart1
// function transformDatabhn1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn1;

// }

// //bhnChart2
// function transformDatabhn2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn3;

// }

// //bhnChart3
// function transformDatabhn3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn3;

// }

// //bhnChart4
// function transformDatabhn4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn4;

// }

// //bhnChart5
// function transformDatabhn5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn5;

// }

// //bhnChart6
// function transformDatabhn6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn6;

// }

// //bhnChart7
// function transformDatabhn7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn7;

// }

// //bhnChart8
// function transformDatabhn8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn8;

// }

// //bhnChart9
// function transformDatabhn9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn9;

// }

// //bhnChart10
// function transformDatabhn10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn10;

// }

// //bhnChart11
// function transformDatabhn11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn11;

// }

// //bhnChart12
// function transformDatabhn12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BISHAN") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbhn12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbhn12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbhn12;

// }

// //bbtChart1
// function transformDatabbt1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt1;

// }

// //bbtChart2
// function transformDatabbt2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt3;

// }

// //bbtChart3
// function transformDatabbt3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt3;

// }

// //bbtChart4
// function transformDatabbt4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt4;

// }

// //bbtChart5
// function transformDatabbt5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt5;

// }

// //bbtChart6
// function transformDatabbt6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt6;

// }

// //bbtChart7
// function transformDatabbt7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt7;

// }

// //bbtChart8
// function transformDatabbt8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt8;

// }

// //bbtChart9
// function transformDatabbt9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt9;

// }

// //bbtChart10
// function transformDatabbt10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt10;

// }

// //bbtChart11
// function transformDatabbt11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt11;

// }

// //bbtChart12
// function transformDatabbt12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT BATOK") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbbt12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbbt12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbbt12;

// }

// //bmhChart1
// function transformDatabmh1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh1;

// }

// //bmhChart2
// function transformDatabmh2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh3;

// }

// //bmhChart3
// function transformDatabmh3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh3;

// }

// //bmhChart4
// function transformDatabmh4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh4;

// }

// //bmhChart5
// function transformDatabmh5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh5;

// }

// //bmhChart6
// function transformDatabmh6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh6;

// }

// //bmhChart7
// function transformDatabmh7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh7;

// }

// //bmhChart8
// function transformDatabmh8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh8;

// }

// //bmhChart9
// function transformDatabmh9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh9;

// }

// //bmhChart10
// function transformDatabmh10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh10;

// }

// //bmhChart11
// function transformDatabmh11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh11;

// }

// //bmhChart12
// function transformDatabmh12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT MERAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbmh12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbmh12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbmh12;

// }

// //bpjChart1
// function transformDatabpj1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj1;

// }

// //bpjChart2
// function transformDatabpj2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj3;

// }

// //bpjChart3
// function transformDatabpj3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj3;

// }

// //bpjChart4
// function transformDatabpj4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj4;

// }

// //bpjChart5
// function transformDatabpj5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj5;

// }

// //bpjChart6
// function transformDatabpj6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj6;

// }

// //bpjChart7
// function transformDatabpj7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj7;

// }

// //bpjChart8
// function transformDatabpj8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj8;

// }

// //bpjChart9
// function transformDatabpj9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj9;

// }

// //bpjChart10
// function transformDatabpj10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj10;

// }

// //bpjChart11
// function transformDatabpj11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj11;

// }

// //bpjChart12
// function transformDatabpj12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT PANJANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbpj12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbpj12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbpj12;

// }

// //btmChart1
// function transformDatabtm1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm1;

// }

// //btmChart2
// function transformDatabtm2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm3;

// }

// //btmChart3
// function transformDatabtm3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm3;

// }

// //btmChart4
// function transformDatabtm4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm4;

// }

// //btmChart5
// function transformDatabtm5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm5;

// }

// //btmChart6
// function transformDatabtm6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm6;

// }

// //btmChart7
// function transformDatabtm7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm7;

// }

// //btmChart8
// function transformDatabtm8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm8;

// }

// //btmChart9
// function transformDatabtm9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm9;

// }

// //btmChart10
// function transformDatabtm10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm10;

// }

// //btmChart11
// function transformDatabtm11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm11;

// }

// //btmChart12
// function transformDatabtm12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "BUKIT TIMAH") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesbtm12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesbtm12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesbtm12;

// }

// //ctrChart1
// function transformDatactr1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr1 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr1;

// }

// //ctrChart2
// function transformDatactr2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr3;

// }

// //ctrChart3
// function transformDatactr3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr3 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr3;

// }

// //ctrChart4
// function transformDatactr4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr4 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr4;

// }

// //ctrChart5
// function transformDatactr5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr5 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr5;

// }

// //ctrChart6
// function transformDatactr6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr6 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr6;

// }

// //ctrChart7
// function transformDatactr7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr7 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr7;

// }

// //ctrChart8
// function transformDatactr8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr8 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr8;

// }

// //ctrChart9
// function transformDatactr9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr9 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr9;

// }

// //ctrChart10
// function transformDatactr10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr10 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr10;

// }

// //ctrChart11
// function transformDatactr11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr11 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr11;

// }

// //ctrChart12
// function transformDatactr12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CENTRAL AREA") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriesctr12 = [];
//   for (let dataPoint of shortlisted) {

//     seriesctr12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriesctr12;

// }

// //cckChart1
// function transformDatacck1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck1 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck1;

// }

// //cckChart2
// function transformDatacck2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck3 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck3;

// }

// //cckChart3
// function transformDatacck3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck3 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck3;

// }

// //cckChart4
// function transformDatacck4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck4 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck4;

// }

// //cckChart5
// function transformDatacck5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck5 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck5;

// }

// //cckChart6
// function transformDatacck6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck6 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck6;

// }

// //cckChart7
// function transformDatacck7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck7 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck7;

// }

// //cckChart8
// function transformDatacck8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck8 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck8;

// }

// //cckChart9
// function transformDatacck9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck9 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck9;

// }

// //cckChart10
// function transformDatacck10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck10 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck10;

// }

// //cckChart11
// function transformDatacck11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck11 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck11;

// }

// //cckChart12
// function transformDatacck12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CHOA CHU KANG") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescck12 = [];
//   for (let dataPoint of shortlisted) {

//     seriescck12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescck12;

// }

// //cmtChart1
// function transformDatacmt1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt1 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt1.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt1;

// }

// //cmtChart2
// function transformDatacmt2(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt3 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt3;

// }

// //cmtChart3
// function transformDatacmt3(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt3 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt3.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt3;

// }

// //cmtChart4
// function transformDatacmt4(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt4 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt4.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt4;

// }

// //cmtChart5
// function transformDatacmt5(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt5 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt5.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt5;

// }

// //cmtChart6
// function transformDatacmt6(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt6 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt6.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt6;

// }

// //cmtChart7
// function transformDatacmt7(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt7 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt7.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt7;

// }

// //cmtChart8
// function transformDatacmt8(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt8 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt8.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt8;

// }

// //cmtChart9
// function transformDatacmt9(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt9 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt9.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt9;

// }

// //cmtChart10
// function transformDatacmt10(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt10 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt10.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt10;

// }

// //cmtChart11
// function transformDatacmt11(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt11 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt11.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt11;

// }

// //cmtChart12
// function transformDatacmt12(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.town == "CLEMENTI") {
//       shortlisted.push(dataPoint);
//     }
//   }
//   const seriescmt12 = [];
//   for (let dataPoint of shortlisted) {

//     seriescmt12.push({
//       x: dataPoint.streetName,
//       y: dataPoint.resaleprice

//     })
//   }
//   return seriescmt12;

// }