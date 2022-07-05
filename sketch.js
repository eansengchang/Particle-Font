function preload() {
  font = loadFont('avenir-next-lt-pro-demi.otf');
}

// 224

let time = '88:88:88'.split('');
let prevTime = '88888888'.split('');
let vehicles = [];
const TEXTSIZE = 150;

let digits = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(155, 155, 255);

  //   textAlign(CENTER);
  textSize(TEXTSIZE);

  //   digits.push(new Digit(width / 2 - 300 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 200 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 100 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 50 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 + 50 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 + 150 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 + 200 - textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 + 300 - textWidth('8') / 2, height / 2));

  let start = width / 2 - textWidth('88:88:88') / 2;
  for (let i = 0; i < time.length; i++) {
    digits.push(new Digit(start, height / 2));
    start += textWidth(time[i]);
  }

  //   digits.push(new Digit(width / 2 - 300 + textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 3 * textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 5 * textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 7 * textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 9 * textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 11 * textWidth('8') / 2, height / 2));
  //   digits.push(new Digit(width / 2 - 300 + 13 * textWidth('8') / 2, height / 2));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(155, 155, 255);
  for (let i = 0; i < digits.length; i++) {
    digits[i].showVehicles();
  }

  let hr = hour().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let min = minute().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let sc = second().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  time = `${hr}:${min}:${sc}`.split('');
  for (let i = 0; i < time.length; i++) {
    if (prevTime[i] != time[i]) {
      digits[i].updateDigit(time[i]);
      prevTime[i] = time[i];
    }
  }
}
