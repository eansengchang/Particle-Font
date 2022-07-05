class Digit {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vehicles = [];

    let points = font.textToPoints('8', this.pos.x, this.pos.y, TEXTSIZE, {
      sampleFactor: 0.4,
    });
    for (let i = 0; i < points.length; i++) {
      let pt = points[i];
      this.vehicles.push(new Vehicle(pt.x, pt.y, time));
    }
  }

  showVehicles() {
    for (let i = 0; i < this.vehicles.length; i++) {
      let vehicle = this.vehicles[i];
      vehicle.update();
      vehicle.show();
    }
  }

  updateDigit(num) {
    let points = font.textToPoints(`${num}`, this.pos.x, this.pos.y, TEXTSIZE, {
      sampleFactor: 0.4,
    });
    shuffle(points, true);
    for (let i = 0; i < this.vehicles.length; i++) {
      if (i < points.length) {
        this.vehicles[i].target = createVector(points[i].x, points[i].y);
      } else {
        let randomPoint = random(points);
        this.vehicles[i].target = createVector(randomPoint.x, randomPoint.y);
      }
    }
    for (let i = 0; i < points.length; i++) {}
  }
}
