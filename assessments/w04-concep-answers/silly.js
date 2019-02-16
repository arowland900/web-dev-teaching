var main = require('./main');
var api = {
    one,
    two,
    three: 3,
    four: 'four'
};

function one() {
    return 'something';
}

function two(a, b) {
    return b;
}

module.exports = api;