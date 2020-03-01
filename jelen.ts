

window.onload = function() {
  var scale = 3;
  var r = 0.8;
  var s = Snap(60*scale,70*scale);
  
  var lastPoint = undefined;

  var drawHole = function(point){
    s.circle(point.x*scale, point.y*scale, r).attr({fill: "none", stroke: "#000", strokeWidth: 0.04});
  }
  
  var drawLine = function(startPoint, endPoint){
      s.line(startPoint.x*scale, startPoint.y*scale, endPoint.x*scale, endPoint.y*scale).attr({strokeWidth: 0.04, stroke:"#f00"});
  }

  var leftPoints = [
    {x: 28, y: 21, start: true, leftOnly: true}, //glowa srodek
    {x: 22, y: 21, leftOnly: true},
    {x: 22, y: 21, start: true}, //glowa
    {x: 20, y: 22},
    {x: 20, y: 23},
    {x: 17, y: 21},
    {x: 11, y: 20},
    {x: 16, y: 23},
    {x: 19, y: 26},
    {x: 15, y: 25},
    {x: 13, y: 24},
    {x: 11, y: 20},
    {x: 19, y: 26, start: true}, //policzek
    {x: 20, y: 29},
    {x: 22, y: 32},
    {x: 23, y: 30, start: true}, //pysk
    {x: 22, y: 31},
    {x: 22, y: 33},
    {x: 24, y: 35},
    {x: 26, y: 35, leftOnly: true},
    {x: 23, y: 34, start: true, leftOnly: true}, //usta
    {x: 27, y: 34, leftOnly: true},
    {x: 24, y: 30, start: true}, //nos
    {x: 23, y: 31},
    {x: 24, y: 33},
    {x: 26, y: 33, leftOnly: true},
    {x: 24, y: 21, start: true}, //nos od gory
    {x: 24, y: 27},
    {x: 23, y: 30},
    {x: 24, y: 25, start: true}, 
    {x: 22, y: 27},
    {x: 24, y: 30},
    {x: 26, y: 30, leftOnly: true},
    {x: 24, y: 27, start: true}, 
    {x: 25, y: 28},
    {x: 19, y: 26, start: true}, //brwi
    {x: 21, y: 25},
    {x: 23, y: 26},
    {x: 20, y: 29, start: true}, //szyja
    {x: 19, y: 33},
    {x: 18, y: 36},
    {x: 16, y: 41},
    {x: 25, y: 54.5},
    {x: 22, y: 32, start: true}, //szyja
    {x: 16, y: 41},
    {x: 23, y: 34, start: true}, //szyja
    {x: 21, y: 37},
    {x: 18, y: 44},
    {x: 21, y: 37, start: true}, //szyja
    {x: 25, y: 44},
    {x: 22, y: 21, start: true}, //rogi
    {x: 21, y: 19},
    {x: 19, y: 16},
    {x: 18, y: 14},
    {x: 19, y: 11},
    {x: 18, y: 9},
    {x: 18, y: 11},
    {x: 17, y: 14},
    {x: 17, y: 16},
    {x: 20, y: 20},
    {x: 15, y: 16},
    {x: 14, y: 14},
    {x: 14, y: 11},
    {x: 13, y: 9},
    {x: 13, y: 16},
    {x: 15, y: 18},
    {x: 9, y: 15},
    {x: 7, y: 12},
    {x: 8, y: 10},
    {x: 10, y: 8},
    {x: 11, y: 6},
    {x: 9, y: 7},
    {x: 7, y: 7},
    {x: 9, y: 2},
    {x: 7, y: 4},
    {x: 5, y: 5},
    {x: 4, y: 5},
    {x: 3, y: 3},
    {x: 3, y: 5},
    {x: 4, y: 7},
    {x: 5, y: 10},
    {x: 6, y: 14},
    {x: 9, y: 17},
    {x: 13, y: 19},
    {x: 20, y: 22},
  ];
  
  var rightPoints = [];
  var j = 0;
  for (i=0;i<leftPoints.length;i++){
    if (leftPoints[i].leftOnly){
      //ignore
    } else 
    {
    rightPoints[j] = {x: 50 - leftPoints[i].x, y: leftPoints[i].y, start: leftPoints[i].start};
    j++;
    }
  }
  
  var points = leftPoints.concat(rightPoints);
  for (i=0;i<points.length;i++){
    if (i===0 || points[i].start){
      continue;
    } 
      drawLine(points[i-1], points[i]);
  }
  
  var distinctPoints = [];
  for (i=0;i<points.length;i++){
    var pointDuplicate = false;
    for(j=0;j<distinctPoints.length;j++){
      if (points[i].x === distinctPoints[j].x && points[i].y === distinctPoints[j].y){
        pointDuplicate = true;
        continue;
      }
      
    }
    
    if (pointDuplicate){
      continue;
    }
    distinctPoints.push(points[i]);
  }
  
  console.log(points.length);
  console.log(distinctPoints.length);
  for (i=0;i<distinctPoints.length;i++){
    drawHole(distinctPoints[i]);
  }
  
  s.polygon(20*scale,26.5*scale,21*scale,26*scale,22*scale,27*scale,21*scale,27.5*scale).attr({ fill: "#f00", stroke: "#f00" });
  s.polygon(50*scale-20*scale,26.5*scale,50*scale-21*scale,26*scale,50*scale-22*scale,27*scale,50*scale-21*scale,27.5*scale).attr({ fill: "#f00", stroke: "#f00" });
}