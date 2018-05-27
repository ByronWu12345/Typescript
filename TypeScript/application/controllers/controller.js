var mathLib = {
    add5: function (a) {
        return a + 5;
    }
};
var app;
(function (app) {
    var controller;
    (function (controller) {
        'use strict';
        var Test = (function () {
            function Test() {
            }
            Test.prototype.TestFun = function (Para) {
                return "Param " + Para + " ABC";
            };
            return Test;
        }());
        controller.Test = Test;
        var Controller = (function () {
            function Controller(DataAccessService) {
                this.DataAccessService = DataAccessService;
                this.ProblemSet = new Array();
            }
            Controller.prototype.init = function () {
                var _this = this;
                for (var index = 1; index < 50; index++) {
                    this.DataAccessService.getData(index.toString(), this.add6(index)).then(function (data) {
                        _this.ProblemSet.push(data);
                    });
                }
            };
            Controller.prototype.add6 = function (a) {
                return a + 6;
            };
            Controller.$inject = ['DataAccessService'];
            return Controller;
        }());
        controller.Controller = Controller;
        angular.module('app').controller('app.controller', Controller);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
//# sourceMappingURL=controller.js.map