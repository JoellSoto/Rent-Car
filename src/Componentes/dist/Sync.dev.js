"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSynchronousState = void 0;

var _react = require("react");

var _clone = require("@toolz/clone");

var _isARegularObjectReact = require("@toolz/is-a-regular-object-react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSynchronousState = function useSynchronousState(initialValue) {
  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      updateValue = _useState2[1];

  var latestValue = value;

  var set = function set(newValue) {
    if (Array.isArray(newValue)) latestValue = _clone.clone.array(newValue);else if ((0, _isARegularObjectReact.isARegularObject)(newValue)) latestValue = _clone.clone.object(newValue);else latestValue = newValue;
    updateValue(newValue);
    return latestValue;
  };

  var get = function get() {
    return latestValue;
  };

  return [get, set];
};

exports.useSynchronousState = useSynchronousState;