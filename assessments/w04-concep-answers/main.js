var silly = require('./silly');
var a = silly.one;
var b = silly.two(true, false);
var c = silly.three;
var d = require('./silly').three;



var colors = {red: 'red', blue: 'blue'};
var newColor = prompt('Enter a color other than red or blue:').toLowerCase();

colors[newColor] = newColor


console.log(d)