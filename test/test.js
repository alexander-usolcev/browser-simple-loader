'use strict';

const assert = require('assert');
const mocha = require('mocha');

const describe = mocha.describe;
const it = mocha.it;

const Loader = require('../source/browser-simple-loader');

let loader = new Loader();


describe('Loader', function() {
    describe('Has methods', function() {
        it('show() method should return true', function() {
            assert.equal(typeof loader.show, 'function');
        });

        it('hide() method should return true', function() {
            assert.equal(typeof loader.hide, 'function');
        });
    });
});

