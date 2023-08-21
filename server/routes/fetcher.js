const router = require("express").Router();
const { Location } = require("../models/location");
const polygons=[[
  [28.631272,77.081701],
  [28.653719,77.089061],
  [28.641498,77.107708],
  [28.631272,77.081701]
  ],
  [[28.648424, 77.101227],
  [28.650498, 77.109210],
  [28.639558, 77.110345],
  [28.641066, 77.102830],
  [28.648424, 77.101227],
],
];
// Route for fetching waste collection schedules
router.post("/", async (req, res) => {
  // Get the user's location from the request body or query parameters
  const { latitude, longitude } = req.body;
  console.log(latitude);
  console.log(longitude);
  var point=[latitude,longitude];
  var point2=[28.638753, 77.089873]
  
  // Query the database to find the polygon that contains the given location
  let userLocationFound = false;
    for (let i = 0; i < polygons.length; i++) {
      if (isPointInPolygon(point2, polygons[i])) {
        userLocationFound = true;
        if(i==0){
          schedule={Recyclables: {Monday : "9:30AM", Wednesday : "1:00PM", Friday : "5:00PM"}, NonRecyclables: {Tuesday:"10:00AM", Thursday:"2:00PM", Saturday:"6:00PM"}, HazardousWaste: {Monday:"9:00AM", Wednesday:"1:00PM", Friday:"5:00PM"}, OrganicWaste: {Tuesday:"10:00AM", Thursday:"2:00PM", Saturday:"6:00PM"}}}
        else if(i==1){
          schedule="heyy"
        }
        else{
          schedule="Schedule not found for your area"
        }
        break;
      }
    }

  

  // If no polygon contains the location, return an error response
  if (!userLocationFound) {
    return res.status(400).json({ error: "No waste collection schedule found for the given location" });
  }
  // Send the waste collection schedules as a response
  res.json(schedule);
});

function isPointInPolygon(point, polygon) {
  var x = point[0], y = point[1];
  var inside = false;
  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i][0], yi = polygon[i][1];
    var xj = polygon[j][0], yj = polygon[j][1];
    var intersect = ((yi > y) != (yj > y))
      && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

module.exports = router;
