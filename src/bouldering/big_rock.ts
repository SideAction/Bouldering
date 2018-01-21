import * as _ from 'lodash';

import {Route} from './route';

export class BigRock {
    public name: string;
    public routes: Array<Route>;
    public original: string;

    constructor(jsonData: any) {
        this.assign(jsonData);
    }

    public assign(original) {
        if (!_.isEmpty(original)) {
            Object.assign(this, original);
            this.original = JSON.stringify(original);
        }
    }
}
