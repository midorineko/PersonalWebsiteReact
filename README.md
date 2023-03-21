
# React Personal Site With AWS 

## This Site Contains Two Parts


## Section 1: Personal Website

A React application used to display some of my photos and give a little information about myself.

**Photos** built on a custom carousel using a simple debounce function to help with multi-clicks during slower loads.

**About Me** section to five a little more information about myself as a programmer.  

**Community** section to show a some of my activities in various communities.

## Section 2: LED Website

This is a fully functional LED website to be paired with my Arduino based LED strips. Handles all types of color, scene, and speed interactions. It uses Amazon SSO since it also directly pairs with Alexa through my custom and home skills. If you are interested in using my system please reach out. I can send out the binary or preloaded Arduinos. 

### Tech Stack: AWS 
**Amplify** The site is hosted and built on Amplify. Utilizes CFN for Lambda interactions between IoT and DynamoDB.

**Cognito with  Federate** Using Amazon SSO to auth since the devices are provisioned to be used with Alexa.

**AppSync & GraphQL** Interactions to the Lambda are done through AppSync resolvers using a GraphQL Schema. 

**DynamoDB** NoSQL database used to hold user and information around devices.

**Lambda** A Node Lambda is used to make calls to IoT Core and DynamoDB.

**IoT Core** How the site interacts with devices. Creates new devices and provisions them for shadow updates.

## Set Up Instructions + Binary
[Set Up](http://steveninouye.com.s3-website-us-east-1.amazonaws.com/led_setup.html)
## Simple LED Systems with WiFi Control
If you are looking for something simpler. Possibly just trying to control a strip of LEDs through an Arduino. Here is a repository with various LED code which host it's own WiFi that you can control through a WiFi enabled device. [Complete LED Information](https://github.com/midorineko/CompleteLEDs)

