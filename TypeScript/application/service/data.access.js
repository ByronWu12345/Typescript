/// <reference path="../../scripts/typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataAccessService = (function () {
            function DataAccessService($q) {
                this.$q = $q;
            }
            DataAccessService.prototype.getData = function (key, params) {
                var deferred = this.$q.defer();
                deferred.resolve(new app.problem(params, "Title " + key, 12345, "81.9", app.Difficulty.Easy));
                return deferred.promise;
            };
            DataAccessService.$inject = ['$q'];
            return DataAccessService;
        }());
        services.DataAccessService = DataAccessService;
        factory.$inject = ['$q'];
        function factory($q) {
            return new DataAccessService($q);
        }
        angular
            .module('app')
            .factory("DataAccessService", factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=data.access.js.map