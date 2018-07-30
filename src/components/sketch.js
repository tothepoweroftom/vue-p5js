export default function( sketch ) {

    var width = 0;
    var height = 0;

    sketch.setup = function() {
        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.createCanvas(width, height);

    }

    sketch.draw = function() {
        sketch.fill(0);
        sketch.ellipse(sketch.random(0,width), sketch.random(0,height), 10,10);

    }

    sketch.windowResized = function() {

        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.resizeCanvas(width, height);
    }

}