"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function Connection(server, request, response) {
  _classCallCheck(this, Connection);

  this.server = server;
  this.request = request;
  this.response = response;
};

exports.default = Connection;