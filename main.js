"use strict";

function generate() {
  let max = 5;
  let min = 8;
  for (let i = 0; i < 10; i++) {
    x = Math.random() * (5 - 8);
    if (x > max) {
      max = x;
    }
    if (x < min) {
      min = x;
    }
  }
  console.log(min, max);
}

function showMinAndMax(array) {
  console.log(Math.min(...array), Math.max(...array));
}

const array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.random() * (5 - 8));
}

function generateAndStop() {
  let loop = true;
  const counts = [];
  while (loop) {
    x = Math.round(Math.random() * (5 - 8));
    let absent = true;
    counts.forEach((el) => {
      if (el[0] === x) {
        absent = false;
        el[1]++;
        if (el[1] === 4) {
          loop = false;
        }
      }
    });
    if (absent === true) {
      counts.push([x, 1]);
    }
    console.log(counts, x);
  }
}

function myTimeOut() {
  setTimeout(() => {
    console.log(Math.random() * (5 - 8));
  }, 1000);
}

function generateRandomAndStop(delay) {
  const counts = [];
  const interval = setInterval(() => {
    x = Math.round(Math.random() * (5 - 8));
    let absent = true;
    counts.forEach((el) => {
      if (el[0] === x) {
        absent = false;
        el[1]++;
        if (el[1] === 2) {
          clearInterval(interval);
          console.log(delay, x);
        }
      }
    });
    if (absent === true) {
      counts.push([x, 1]);
    }
    console.log(counts, x);
  }, delay);
}

function showPath() {
  const path = process.env.PATH;
  // const pathVariables = path.split(";").join("\n");

  let pathVariables = "";
  for (let i = 0; i < path.length; i++) {
    if (path[i] === ";") {
      pathVariables += "\n";
    } else {
      pathVariables += path[i];
    }
  }
  console.log(pathVariables);
}

function showIp(ipVersion) {
  const addresses = require("os").networkInterfaces();
  const ipv4Addresses = [];

  for (const prop in addresses) {
    for (let i = 0; i < addresses[prop].length; i++) {
      if (addresses[prop][i].family === ipVersion){
        ipv4Addresses.push(addresses[prop][i]);
      }
    }
  }
  console.log(ipv4Addresses);
}

showIp("IPv4");
