/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/app.d.ts" />

module typescriptApp {
    'use strict';

    export class ExampleUtil {
        testProperty: string;

        /* @ngInject */
        constructor(public $log: angular.ILogService) {
            this.testProperty = 'the directive is working';
        }

    }

    angular.module('typescriptApp')
        .service('ExampleUtil', ExampleUtil);

}
