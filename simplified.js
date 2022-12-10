var simple = function (s) { //template to make versions of sketch

    s.setup = function () {

        s.canvas = s.createCanvas(s.windowWidth, s.windowHeight);
        s.canvas.position(0, 0);
        s.canvas.style('z-index', '0');
        s.fill(s.random(110,270),s.random(100,200),s.random(150,210));
        s.ellipse (100,100,100,100);
    }
    
    s.windowResized = function () {
        s.resizeCanvas(s.windowWidth, s.windowHeight);
        s.ellipse (100,100,100,100)
    }

}
var myp5 = new p5(simple); //decide to make the sketches
