'use strict';

import Loader from '../source/browser-simple-loader';

class Test {
    constructor() {
        let loader = new Loader({
            size: 200
        });

        loader.show();
    }
}

export default new Test();

