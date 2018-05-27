var mathLib = {
    add5: function (a) {
        return a + 5;
    }
}

module app.controller {
    'use strict';

    export class Test {
        public TestObject: string;
        public TestFun(Para: string): string {
            return "Param " + Para + " ABC";
        }
    }

    export interface IController {
        init(): void;
    }

    export class Controller implements IController {
        public ProblemSet: Array<problem>;
        static $inject = ['DataAccessService'];
        constructor(public DataAccessService: services.IDataAccessService) {
            this.ProblemSet = new Array<problem>();
        }

        public init() {
            for (let index = 1; index < 50; index++) {
                this.DataAccessService.getData(index.toString(), this.add6(index)).then(data => {
                    this.ProblemSet.push(data);
                });
            }
        }

        public add6(a: number) {
            return a + 6;
        }
    }
    angular.module('app').controller('app.controller', Controller);
}