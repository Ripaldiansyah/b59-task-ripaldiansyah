const moment = require("moment");
function checkMessage(value) {
  return value === "invalid email" ? true : false;
}

function checkSelected(a, b) {
  return a === b ? true : false;
}
function printValue(value) {
  console.log(` ini nilai ${value}`);
}

function getObject(obj, key) {
  return obj[key];
}

function andIf(a, b) {
  if (a && b) {
    return true;
  }

  return false;
}

function duration(createdAt) {
  const now = moment();
  const duration = moment(createdAt).fromNow();
  return duration;
}

function rateIndex(n) {
  let element = [];
  for (let index = 0; index < n; index++) {
    element[index] = index;
  }

  return element;
}

function subtract(a, b) {
  return a - b;
}
function orIf(a, b) {
  if ((a = true) || (b = true)) {
    return true;
  }
  if ((a = false) || (b = true)) {
    return true;
  }
  if ((a = true) || (b = false)) {
    return true;
  }
  return false;
}
module.exports = {
  checkMessage,
  orIf,
  andIf,
  subtract,
  checkSelected,
  printValue,
  getObject,
  duration,
  rateIndex,
};
