
#include "SPI.h"



int myvariable = 0;

void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  
}

void loop() {
 
  if (Serial.available() > 0) {
    myvariable = Serial.read();
    
  }


  if (myvariable == '1') { 
    Serial.write(myvariable);
    digitalWrite(2, HIGH);
    delay(500); }
  

  else if (myvariable == '2') {

  digitalWrite(2, LOW);
    
  }
    
  
    
    
  else {
   // myText = '2';
     digitalWrite(2, LOW);
    
  }
}

  

