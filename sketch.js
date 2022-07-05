function preload() {
	font = loadFont('avenir-next-lt-pro-demi.otf')
}

let TEXT = "Cool Simulation"
let vehicles = []
const TEXTSIZE = 150
const INPUTSIZE = 300
let input;

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
  	cnv.style('display', 'block');
	background(51)

	textAlign(CENTER)
	textSize(TEXTSIZE)
	let points = font.textToPoints(TEXT, width / 2 - textWidth(TEXT)/2, height / 2, TEXTSIZE, { sampleFactor: 0.4 })
	vehicles = []
	for (let i = 0; i < points.length; i++) {
		let pt = points[i]
		let vehicle = new Vehicle(pt.x, pt.y, TEXT)
		vehicles.push(vehicle)
	}

	input = createInput("Enter Something!");
  	input.position(width / 2 - INPUTSIZE / 2, height - 100);
	input.size(INPUTSIZE)
	input.input(myInputEvent);
	input.mousePressed(mousePressed)
}

function mousePressed(){
	if(input.value() == "Enter Something!"){
		input.value("")
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0, 0, 10);
	for (let i = 0; i < vehicles.length; i++) {
		v = vehicles[i]
		v.applyBehaviors()
		v.update()
		v.show()
	}
}

function myInputEvent() {
	TEXT = this.value()
	console.log

	let points = font.textToPoints(TEXT, width / 2 - textWidth(TEXT)/2, height / 2, TEXTSIZE, { sampleFactor: 0.4 })
	vehicles = []
	for (let i = 0; i < points.length; i++) {
		let pt = points[i]
		let vehicle = new Vehicle(pt.x, pt.y, TEXT)
		vehicles.push(vehicle)
	}

}