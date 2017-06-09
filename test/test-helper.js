'use strict';

const jsdom = require('jsdom').JSDOM;

const dom = new jsdom('<!doctype html><html><body></body></html>');
const win = dom.window;
const doc = win.document;

global.document = doc;
global.window = win;

Object.keys(win).forEach((key) => {
    if (!(key in global)) {
        global[key] = win[key];
    }
});

