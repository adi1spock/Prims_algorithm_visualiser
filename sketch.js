function setup() {
  createCanvas(windowWidth, windowHeight);
}

var vertices=[];
function mousePressed(){
  var v=createVector(mouseX,mouseY)
  vertices.push(v);
}
function draw() {
  background(color(3,218,197));
  var reached=[];
  var unreached=[];
  for(var i=0;i<vertices.length;i++){
    unreached.push(vertices[i]);
  }
  reached.push(unreached[0]);
  unreached.splice(0,1);
  while(unreached.length>0){
    var maxVal=100000;
    var rIndex;
    var uIndex;
    for(i=0;i<reached.length;i++){
      for(var j=0;j<unreached.length;j++){
        var v1=reached[i];
        var v2=unreached[j];
        var currDist=dist(v1.x,v1.y,v2.x,v2.y);
        if(currDist<maxVal){
          maxVal=currDist;
          rIndex=i;
          uIndex=j;
        }
      }
    }
    line(reached[rIndex].x,reached[rIndex].y,unreached[uIndex].x,unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
  }
  for(i=0;i<vertices.length;i++){
    stroke(color(0,0,0));
    strokeWeight(8);
    fill(color(98,0,238));
    ellipse(vertices[i].x,vertices[i].y,35,35);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}