/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../application/controllers/controller.js" />
describe("Unit test for create job dialog controller", () => {
    beforeEach(()=> { let a  = 10;});
    it("case: should init start models correctly.", () => {
        var res = mathLib.add5(10);
        expect(res).toBe(15);
    });
});

//D:\share\TypeScript\TypeScript\packages\Chutzpah.4.3.7\tools>chutzpah.console.exe D:\share\TypeScript\TypeScript\TypeScript\test\test.js /debug /trace /openInBrowser