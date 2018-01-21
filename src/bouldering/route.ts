import * as _ from 'lodash';

import {Ape} from './../accounts/ape';

export class Route {
    public name: string;
    public grade: number;
    public upperGrade: number;
    public lowerGrade: number;

    public sender: Ape;
    public media: Array<any>; // Figure out the types of media that would go with this

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
