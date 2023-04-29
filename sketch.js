function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();
  let s = second();
  my_rect(width/2,height/2,190,5,s*6-89)
  my_rect(width/2,height/2,200,5,m*6-98)
  my_rect(width/2,height/2,100,5,h*30-50)
  ellipse(width/2,height/2,20,20)
}

function my_rect(x,y,w,h,d){
  push()
  translate(x,y)
  rotate(radians(d))
  rect(0,-h/2,w,h)
  pop()
}