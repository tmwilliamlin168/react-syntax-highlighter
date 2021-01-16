"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highlight = _interopRequireDefault(require("./highlight"));

var _core = _interopRequireDefault(require("refractor/core"));

var highlighter = (0, _highlight.default)(_core.default, {});
var _default = highlighter;
exports.default = _default;
