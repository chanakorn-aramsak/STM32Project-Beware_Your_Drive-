//#include <ESP8266WiFi.h>
//#include <FirebaseArduino.h>
#include <SoftwareSerial.h>

SoftwareSerial NodeSerial(D7, D8);

void setup() {
  Serial.begin(9600);
  pinMode(D7, INPUT); //RX
  pinMode(D8, OUTPUT); // TX

  NodeSerial.begin(9600);
}

void loop() {
  if (NodeSerial.read() == '\n') {
        Serial.println(val);
   }
}
