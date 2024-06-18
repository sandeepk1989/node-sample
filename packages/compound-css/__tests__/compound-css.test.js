'use strict';

const compoundCss = require('..');
const assert = require('assert').strict;

assert.strictEqual(compoundCss(), 'Hello from compoundCss');
console.info('compoundCss tests passed');
