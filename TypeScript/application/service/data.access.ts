/// <reference path="../../scripts/typings/angularjs/angular.d.ts"/>

module app.services {
    'use strict';

    export interface IDataAccessService {
        getData(key: string, params?: any): ng.IPromise<any>;
        //deleteData(key: string, params?: any): ng.IPromise<any>;
        //postData(key: string, params?: any): ng.IPromise<any>;
        //putData(key: string, params?: any): ng.IPromise<any>;
    }

    export class DataAccessService implements IDataAccessService {
        static $inject = ['$q'];
        public constructor(public $q: ng.IQService) { }
        public getData(key: string, params?: any): ng.IPromise<any> {
            let deferred = this.$q.defer();
            deferred.resolve(new problem(params, "Title " + key, 12345, "81.9", Difficulty.Easy));
            return deferred.promise;
        }
    }

    factory.$inject = ['$q'];
    function factory($q: ng.IQService): IDataAccessService {
        return new DataAccessService($q);
    }

    angular
        .module('app')
        .factory("DataAccessService", factory);
}