/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../Scripts/angular.min.js" />
/// <chutzpah_reference path="../Scripts/angular-mocks.js" />
/// <chutzpah_reference path="../application/controllers/controller.js" />
/// <chutzpah_reference path="../application/controllers/controller.js" />
describe("Unit test for create job dialog controller", () => {
    let mock$q: ng.IQService;
    angular.module('app', [])
    beforeEach(angular.mock.module('app'));
    beforeEach(() => { let a = 10; });
    beforeEach(inject(function ($injector) {
        mock$q = $injector.get('$q');
    }));
    it("case: should init start models correctly.", () => {
        var res = mathLib.add5(10);
        expect(res).toBe(15);
        let test = new app.controller.Test();
        //let result = test.TestFun("Test");
        //expect(result).toBe("Param Test");
        //let dataAccessService = new app.services.DataAccessService(mock$q);
        //dataAccessService.getData("sds", 123).then(data => {
        //    expect(data).toBe("sds");
        //})
        //var controller = new app.controller.Controller(dataAccessService);
        //let result = controller.add6(10);
        //expect(result).toBe(16);
    });
    it("case2.", () => {
        var res = mathLib.add5(10);
        expect(res).toBe(15);
        let test = new app.controller.Test();
        let result = test.TestFun("TestString");
        expect(result).toBe("Param TestString ABC");
    });
});

//D:\share\TypeScript\TypeScript\packages\Chutzpah.4.3.7\tools>chutzpah.console.exe D:\share\TypeScript\TypeScript\TypeScript\test\test.js /debug /trace /openInBrowser