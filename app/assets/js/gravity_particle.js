function particle_gravity($p){
    //set canvas size
    $p.size(600,300);
    
    //sets background darkness? lower -> darker
    $p.background(255);
    
    //hide outline of objects
    $p.noStroke();
    
    //set up color mode to hsv
    $p.colorMode($p.HSB, 255);
    
    //create array to hold data for circles
    var data = [];
    
    //assorted variables
    var num_circles = 100;
    var max_speed = 5;
    var max_diameter = 20;
    var gravity = 0.1;
    var bounce_energy_saved = 0.9;
    
    //make data size 100
    for (var j = 0; j < num_circles; j++) {
            data.push({});
    }
    
    //fill data with random radii, colors and velocities
    for (var i = 0; i < data.length; i++) {
        data[i].radius = Math.random() * max_diameter;
        data[i].y = 100;
        data[i].x = i * 2 + 15;
        data[i].x_v = Math.random()*max_speed;
        data[i].y_v = Math.random()*max_speed;
        
        //evenly distribute around color wheel
        data[i].hue = 255 - (i / data.length * 255);
    }
    
    // draw_based on index
    draw_point = function (i) {
        // shape bg
        $p.fill(data[i].hue, 255, 255);

        // shape
        $p.ellipseMode($p.CENTER); // put outside loop
        $p.ellipse(data[i].x + 3, data[i].y - 3, data[i].radius, data[i].radius);
    }
    // draw system
    $p.draw = function () {
        $p.background(255, 255, 255, 0);
        for (var i = 0; i < data.length; i++) {
            draw_point(i);
            
            // y direction
            // if out of bounds, reverse directions
            if ((data[i].y > $p.height) || (data[i].y < 0)){ data[i].y_v *= -bounce_energy_saved; }
            data[i].y += data[i].y_v;
            data[i].y_v += gravity;
            
            // x direction
            // if out of bounds, reverse directions
            if ((data[i].x > $p.width) || (data[i].x < 0)){ data[i].x_v *= -bounce_energy_saved; }
            data[i].x += data[i].x_v; 
            
            
        }
    }
}

// create a canvas
var canvas = document.getElementById("particle_gravity");

// bind basic_bar_chart to canvas
var p = new Processing(canvas, particle_gravity);

console.log("Works!");
