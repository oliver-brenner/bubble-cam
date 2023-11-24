const background_col = "#89CFF0";
const resolution = 12;
const fps = 12;

let video;

function setup() {
  frameRate(fps);
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}


function draw() {

  background(background_col);
  video.loadPixels();

  let w = width / video.width;
  let h = height / video.height;

  for (let i = 0; i < video.width; i+=resolution) {
    for (let j = 0; j < video.height; j+=resolution) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      push();
      translate(width,0);
      scale(-1, 1);
      fill(avg);
      strokeWeight(random(8, 50));
      stroke(avg);
      point(w * (i + 0.5), h * (j + 0.5));
      pop();
    }
  }
}

