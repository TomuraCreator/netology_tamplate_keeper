"use strict";
exports.__esModule = true;
var Context_1 = require("../Context");
var UserAgent_1 = require("../UserAgent");
var NewCabinet_1 = require("./NewCabinet");
var OldCadinet_1 = require("./OldCadinet");
var CabinetFabric = /** @class */ (function () {
    function CabinetFabric() {
    }
    CabinetFabric.makeCabinet = function () {
        var document = Context_1["default"].getContext.getDocument;
        return UserAgent_1["default"].isThatNewCabinet() ? new NewCabinet_1["default"](document) : new OldCadinet_1["default"](document);
    };
    return CabinetFabric;
}());
exports["default"] = CabinetFabric;
