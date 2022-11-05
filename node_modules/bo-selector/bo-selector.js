var parser = require('./parser').parser;

parser.yy.create = function(data) { return data; };

exports.parser = parser;
