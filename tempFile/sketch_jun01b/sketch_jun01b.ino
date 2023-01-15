//#include <ESP8266WiFi.h>
//#include <FirebaseArduino.h>
#include <SoftwareSerial.h>

SoftwareSerial NodeSerial(D7, D8);

void setup() {

  pinMode(D7, INPUT); //RX
  pinMode(D8, OUTPUT); // TX
  Serial.begin(9600); // add this line
  NodeSerial.begin(9600);
}

void loop() {
//  if (NodeSerial.read() == '\n') {
//        Serial.println(val);
//   }
//  Serial.println(NodeSerial.read());
  while (NodeSerial.available() > 0) {
    float data = NodeSerial.parseFloat();
    Serial.println(data);
  }
//  delay(100);
}
