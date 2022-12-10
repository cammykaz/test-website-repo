var borderlights = function (b) { //template to make versions of sketch

    b.pause = false;
    
    b.beadxpos;
    b.beadypos;
    b.beadxwidth;
    b.beadyheight;
    b.amountofbeads;
    b.beadamountwidth;
    b.beadamountheight;
    
    b.beadxstride;
    b.beadystride;
    b.beadshort=40;
    b.beadlong=40;

    b.setup = function () {
        b.canvas = b.createCanvas(b.windowWidth, document.documentElement.scrollHeight);    
        b.canvas.position(0, 0); //absolute positioning
        b.canvas.style('z-index', '-1');
        //b.canvas.style('display', 'block');

        b.frameRate(10);
        
        b.beadxpos=b.beadlong/2;
        b.beadypos=b.beadshort/2;
        b.beadxwidth=b.beadlong;
        b.beadyheight=b.beadshort;
        
        b.beadxstride=b.beadlong;
        b.beadystride=0;
        
        b.beadamountwidth = b.windowWidth / b.beadlong;
        b.beadamountheight = document.documentElement.scrollHeight / b.beadlong;
        b.amountofbeads = (b.beadamountwidth*2)+(b.beadamountheight*2)-4;
    
    }

    
    b.windowResized = function () {
        b.resizeCanvas(b.windowWidth, document.documentElement.scrollHeight);
    }


    b.draw = function () {
        b.stroke(0);
        b.strokeWeight(1);
        
        for (b.i = 0; b.i < b.amountofbeads; b.i+=1) {
            b.fill (b.random(110,270),b.random(100,200),b.random(150,210));
            b.ellipse (b.beadxpos,b.beadypos,b.beadxwidth,b.beadyheight);

            b.beadxpos+=b.beadxstride; //movement along x-axis
            b.beadypos+=b.beadystride; //movement along y-axis

            if(b.beadxpos>b.windowWidth-b.beadshort){ //turn south
                b.beadxpos=b.windowWidth-b.beadshort/2; //keep on border
                b.beadxwidth=b.beadshort; //adjust orientation of shape
                b.beadyheight=b.beadlong; //adjust oreientation of shape
                b.beadxstride=0; //
                b.beadystride=b.beadlong; 
            }

            if(b.beadypos>document.documentElement.scrollHeight-b.beadshort/2){ //turn west
                b.beadypos=document.documentElement.scrollHeight-b.beadshort/2;
                b.beadxwidth=b.beadlong;
                b.beadyheight=b.beadshort;
                b.beadxstride=b.beadlong*-1;
                b.beadystride=0;
            }

            if(b.beadxpos<0+b.beadshort/2){ //turn north
                b.beadxpos=b.beadshort/2;
                b.beadxwidth=b.beadshort;
                b.beadyheight=b.beadlong; 
                b.beadxstride=0;
                b.beadystride=b.beadlong*-1;
            }

            if(b.beadypos<0+b.beadshort/2){ //turn east
                b.complete = true;
                b.beadypos=b.beadshort/2; 
                b.beadxwidth=b.beadlong;
                b.beadyheight=b.beadshort;
                b.beadxstride=b.beadlong;
                b.beadystride=0;
            }
        }
        
        b.noLoop();
        
    }

    b.keyPressed = function () {
          if (b.key == ' ' )  // spacebar toggle pausing of animation
          {
            b.pause = !b.pause;
            if (b.pause)
            {
              b.noLoop();
            } else
            {
              b.loop();
            }  
          }
        }

}

var myp5 = new p5(borderlights); //decide to make the sketches