'use strict';

import Loader from '../source/loader';

class Test {
    constructor() {
        let loader = new Loader({
            width: 200,
            height: 200,
        });
        console.log(123, loader.show());
    }
}

export default new Test();

