let vid;
let playing = true;

let pg,pg1,pg2;


function setup() {
  createCanvas(displayWidth, displayHeight);
  // noCanvas();

  vid = createVideo("paraglider.mov");
  vid.size(0, displayHeight);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);

  pg = createGraphics(displayWidth,displayHeight);
  pg1 = createGraphics(displayWidth,displayHeight);
  pg2 = createGraphics(displayWidth,displayHeight);

}

function draw() {
  background(220);
  let img = vid.get();

  pg.image(img, 0, 0);
  image(pg,0,0);
  //image(img, 0, 0); // redraws the video frame by frame in                           p5
 
  
  
  boxes();
  linesBottom();
  linesTop();

  let vidSize = map(mouseX,0,width,0,200);
  let vidSizeY = map(mouseY,0,height,150,500);
  let vidWindowX = map(mouseX,0,width,350,width-(350-(vidSize/2)));
  let vidWindowY = map(mouseY,0,height,350,height-(450-(vidSize/2)));
  

  let sx = (948-100)-vidSize/4;
  let sy = 148+vidSizeY/2.6;
  let sw = 250;
  let sh = 325;

  let dx = (948-100)-vidSize;
  let dy = 285-vidSize;
  let dw = 350+(vidSize*1.5);
  let dh = 425+(vidSize*1.5);

  let al =map(mouseX,0,width,0,255);

 
 
 
  copy(pg,sx,sy,sw,sh,dx,dy,dw,dh);
 
  
  

  
  
 

  
  //stroke(255);
  //rect(sx,sy,sw,sh);
  
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function boxes() {
  
   let tilesX = 6;
  let tilesY = 4;
  
  let tileW = width/tilesX;
  let tileH = height/tilesY;
  
  

 
 
  
  noFill();
  stroke(255,0,0);
  
  for(let x = 0; x < tilesX; x ++){
    for(let y = 0; y < tilesY; y ++){
      
      //rect(x*tileW,y*tileH,tileW,tileH);
    
    }
  }

}


function linesBottom() {
  
 
 

}


function linesTop() {
  
  
  
  let CtilesX = 10;
  let CtilesY = 6;
  
  let CtileW = width/CtilesX;
  let CtileH = height/CtilesY;
  
 
  
  let x1 = CtileW;
  let y1 = CtileH;
 
  
  
 
 
  
  noFill();
  strokeWeight(2);
  stroke(255);

  translate(-CtileW/2,-CtileH/2);
  
  
  for(let x = 0; x < CtilesX+1; x ++){
    for(let y = 0; y < CtilesY+1; y ++){
      
      
      let cellCenter = dist(mouseX,mouseY,x*x1,y*y1);

      let cellLeft = dist(mouseX,mouseY,x*x1,y*y1);
      let cellTop = dist(mouseX,mouseY,x*x1,y*y1);
      let cellRight = dist(mouseX,mouseY,x*x1,y*y1);
      let cellBottom = dist(mouseX,mouseY,x*x1,y*y1);
      
      
      stroke(255,255,255,200-(cellCenter/2));
      //line(x*x1,y*y1,x*x1,y*y1-(cellBottom/30)*1.2);
      push();
      
      rectMode(CENTER);
      rect(CENTER);
      rect(CtileW/2+x*x1,y*y1,50-cellCenter/8,0.5);
      rect(+CtileW+x*x1,+CtileH/2+y*y1,0.5,50+-cellCenter/8);
      //line(x*x1+-CtileH+(cellBottom/0),y*y1,x*x1,y*y1);
      pop();
      
      
      //ellipse(x*x1,y*y1,50-cellCenter/15,50-cellCenter/15);
     
    
    }
  }

}
