function Vehicle(x, y, text){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.target = createVector(x, y);
    this.r = 2
    this.maxSpeed = random(7, 12);
    this.maxForce = random(0.3, 0.5);
    this.slowRadius = 100;
    this.runRadius = random(70, 90);
    this.text = text
}

Vehicle.prototype.applyBehaviors = function(){
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    flee.mult(3)

    this.applyForce(arrive)
    this.applyForce(flee)
}

Vehicle.prototype.applyForce = function(force){
    this.acc.add(force)
}

Vehicle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0)
}

Vehicle.prototype.show = function(){
	colorMode(HSB)
    
    stroke(255)

    if(this.text.toLowerCase() == "rainbow" || this.text.toLowerCase() == "reyaansh patil"){
        stroke(map(this.target.x, width / 2 - textWidth(TEXT) / 2, width / 2 + textWidth(TEXT) / 2, 0, 255), 255, 255)
    }

    strokeWeight(this.r)
    point(this.pos.x, this.pos.y)
}

Vehicle.prototype.arrive = function(target){
    let desiredForce = p5.Vector.sub(target, this.pos);
    let desiredSpeed = this.maxSpeed
    let distance = desiredForce.mag();
    if(distance < this.slowRadius){
        desiredSpeed = map(distance, 0, this.slowRadius, 1, this.maxSpeed)
    }

    desiredForce.setMag(desiredSpeed);
    let steer = p5.Vector.sub(desiredForce, this.vel);
    steer.limit(this.maxForce)
    return steer
}

Vehicle.prototype.flee = function(target){
    let desiredForce = p5.Vector.sub(target, this.pos);
    let distance = desiredForce.mag();
    let desiredSpeed = 0

    if(distance < this.runRadius){
        desiredForce.setMag(this.maxSpeed);
        desiredForce.mult(-1)
        let steer = p5.Vector.sub(desiredForce, this.vel);
        desiredSpeed = map(distance, 0, this.slowRadius, this.maxSpeed,0)
        steer.limit(this.maxForce)
        return steer
    }

    return createVector(0, 0)
}