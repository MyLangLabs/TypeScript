// class
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
// 접근 제한자 - public, private, protected
var Car = /** @class */ (function () {
    function Car(color) {
        this.name = "car";
        this.color = color;
    }
    Car.prototype.start = function () {
        console.log("start");
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(color) {
        return _super.call(this, color) || this;
    }
    Bmw.prototype.showName = function () {
        console.log(this.name);
    };
    return Bmw;
}(Car));
var z4 = new Bmw("black");
console.log(z4);
