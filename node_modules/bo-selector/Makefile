all: parser test

parser:
	./node_modules/.bin/jison ./src/css-selectors.jison -o ./parser.js

test:
	./node_modules/.bin/mocha test/*spec.pogo

.PHONY: test