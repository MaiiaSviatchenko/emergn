"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpectedResults = void 0;
var ExpectedResults = /** @class */ (function () {
    function ExpectedResults() {
    }
    ExpectedResults.prototype.setCookieResult = function () {
        var actualTest1 = {
            "cookies": {
                "foo1": "bar1",
                "foo2": "bar2",
                "foo3": "bar3"
            }
        };
        return actualTest1;
    };
    ExpectedResults.prototype.deleteCookieResult = function () {
        var actualTest2 = {
            "cookies": {
                "foo2": "bar2",
                "foo3": "bar3"
            }
        };
        return actualTest2;
    };
    return ExpectedResults;
}());
exports.ExpectedResults = ExpectedResults;
