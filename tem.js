// //bhnChart1
// function transformDatabhn1(data) {
//   const resalePriceList = data.map(function(dataPoint) {
//     return {
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 0 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 1 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 2 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 3 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 4 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 5 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 6 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 7 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 8 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 9 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 10 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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
//       "floorarea": dataPoint.floor_area_sqm,
//       "town": dataPoint.town,
//       "flatType": dataPoint.flat_type,
//       "month": dataPoint.month,
//       "resaleprice": dataPoint.resale_price,
//       "streetName": dataPoint.street_name,
//       "storeyrange": dataPoint.storey_range,
//       "blockNo": dataPoint.block
//     }
//   })

//   const shortlisted = [];
//   for (let dataPoint of resalePriceList) {
//     if (dataPoint.month == 11 && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "BISHAN") {
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