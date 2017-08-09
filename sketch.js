
var serial;
var portName = '/dev/cu.usbmodem1411'; 
var mpos = 0;
var inByte;


function setup() {
  createCanvas(720, 720); 
  serial = new p5.SerialPort(); 
  serial.on('list', printList);
  serial.on('connected', serverConnected); 
  serial.on('open', portOpen); 
  serial.on('data', serialEvent); 
  serial.on('error', serialError); 
  serial.on('close', portClose); 
  serial.open(portName); 

}

function draw() {
  background(127);
  fill('green');
  ellipse(105, 100, 50, 50);
  fill('red');
  ellipse(105, 200, 50, 50);
}


function mousePressed() {

  var d = dist(mouseX, mouseY, 100, 100);


  if (d < 27 && d < 70) {
   alert('ON')
   console.log(d + "ON"); 
   serial.write("1");
   console.log("wrote one");
   

  }
  else if ( d < 202 && d < 210) {
    alert('OFF'); 
    console.log(d);
    serial.write("2");
    console.log(d + "OFF"); 

  }

  else {
    console.log(d); 
  }
  
 
}


function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
    console.log('The serial port closed.');
}

function printList(portList) {
    for (var i = 0; i < portList.length; i++) {
        console.log(i + " " + portList[i]);
    }
}

function serialEvent() {
    inByte = Number(serial.read()); } 

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.');
}



