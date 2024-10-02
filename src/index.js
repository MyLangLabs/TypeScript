// class
// readonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color, name) {
        this.name = "car";
        this.color = color;
        this.name = name;
    }
    Car.prototype.start = function () {
        console.log("start");
        console.log(this.name);
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(color, name) {
        return _super.call(this, color, name) || this;
    }
    Bmw.prototype.showName = function () {
        // console.log(super.name); // super -> this로 변경
        console.log(this.name);
    };
    return Bmw;
}(Car));
var z4 = new Bmw("black", "zzzz4");
console.log(z4);
