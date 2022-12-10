var todolist = function (t) { //template to make versions of sketch

    t.hx = 630;
    t.hy = 80;
    
    t.setup = function () {

//        t.canvas = t.createCanvas(t.windowWidth, t.windowHeight);
        t.canvas = t.createCanvas(300,360);
        t.canvas.position(550, 100);
        t.canvas.style('z-index', '-1');
        
        t.frameRate(10);
        
        t.h2 = t.createElement('h2', 'My To-Dos');
        //t.h2.position(630, 80);
        
        t.background(240);
    }
    
//    t.windowResized = function () {
//        t.resizeCanvas(t.windowWidth, t.windowHeight);
//    }

    t.draw = function () {
//        t.fill(t.random(110,270),t.random(100,200),t.random(150,210));
//        t.ellipse (200,200,200,200);
        
//        t.x = t.windowWidth - 300;
        t.x = 0;
        t.y = 0;
        t.ts = 14;
        t.lineheight = t.ts * 2.5;
        t.pw = t.width*.75; //paper width
        t.ph = t.height*.75; //paper height
        t.b0 = '• c̶r̶e̶a̶t̶e̶ ̶s̶e̶c̶o̶n̶d̶ ̶s̶k̶e̶t̶c̶h̶, ̶u̶s̶i̶n̶g̶ ̶i̶n̶s̶t̶a̶n̶c̶e̶ ̶m̶o̶d̶e̶';
        
        //Oscillate to-do list H2 title
        t.h2.position(t.hx,t.hy);
        t.hx = t.hx + t.random(-1,1);
        
        //Check that loop is working
        console.log(t.random(-5,5));
            
        //Displace below to-do list to center of canvas
        t.translate((t.width-t.pw)/2,(t.height-t.ph)/2);
        
        //Paper
        t.stroke(100);
        t.strokeWeight(2);
        t.fill(238, 238, 228);
        t.rectMode(t.CORNER);
        t.rect(t.x, t.y, t.pw, t.ph);

        //Text
        t.push();
        t.translate(6,7);
            //p5 text function
            t.textSize(t.ts);
            t.strokeWeight(0);
            t.fill(0);

            //list
            t.text(t.b0, t.x, t.y, t.pw, t.ph);
            t.text('• c̶r̶e̶a̶t̶e̶ ̶t̶o̶-̶d̶o̶ ̶l̶i̶s̶t̶', t.x, t.y + (t.lineheight*1.4), t.pw, t.ph);
            t.text('•  ̶n̶o̶ ̶b̶o̶r̶d̶e̶r̶ ̶r̶e̶s̶e̶t̶ ̶o̶n̶ ̶r̶e̶s̶i̶z̶e̶', t.x, t.y +(t.lineheight * 2.4), t.pw, t.ph);
            t.text('• m̶a̶k̶e̶ ̶p̶e̶r̶s̶o̶n̶a̶l̶i̶z̶e̶d̶ ̶f̶o̶n̶t̶', t.x, t.y + (t.lineheight * 3.4), t.pw, t.ph);
            //to-do's
            t.text('• layout items in css grid', t.x, t.y + (t.lineheight * 4.4), t.pw, t.ph);
            t.text('• make piano (hello-p5-song)', t.x, t.y + (t.lineheight * 5.4), t.pw, t.ph);
            t.text('• add playable filters (like koala)', t.x, t.y + (t.lineheight * 6.4), t.pw, t.ph);
        t.pop();
        
        //t.noloop();
    }
}
var myp5 = new p5(todolist); //decide to make the sketches
