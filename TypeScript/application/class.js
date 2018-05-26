var Greeter1 = (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter1;
}());
var greeter = new Greeter1("world");
//# sourceMappingURL=class.js.map