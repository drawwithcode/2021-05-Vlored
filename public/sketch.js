let clientSocket = io();
let noiseScale = 0.01;

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  noFill();
  stroke("blue");
  rect(data.g, data.b, 50, height * noiseScale);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("black");
  stroke("green");
  rect(mouseX, mouseY + noiseScale * 80, 100, height);
}

function mouseMoved() {
  let message = {
    g: mouseX,
    b: mouseY,
  };

  clientSocket.emit("mouse", message);
}
