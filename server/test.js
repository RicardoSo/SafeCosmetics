const express = require('express');
const app = express();

function metodo(par1, par2) {
  try {
    return par1 > par2
  } catch (error) {
    console.log(error);
  }
}

exports.metodo = metodo;

console.log(metodo(6,2));