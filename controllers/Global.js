'use strict';

var utils = require('../utils/writer.js');
var Global = require('../service/GlobalService');

module.exports.getFalls = function getFalls (req, res, next, id) {
  Global.getFalls(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfoavgspeed = function obtinfoavgspeed (req, res, next, id) {
  Global.obtinfoavgspeed(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfokms = function obtinfokms (req, res, next, id) {
  Global.obtinfokms(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfolocations = function obtinfolocations (req, res, next, id) {
  Global.obtinfolocations(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfomaxspeed = function obtinfomaxspeed (req, res, next, id) {
  Global.obtinfomaxspeed(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfoscore = function obtinfoscore (req, res, next, id) {
  Global.obtinfoscore(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfosos = function obtinfosos (req, res, next, id) {
  Global.obtinfosos(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtinfotime = function obtinfotime (req, res, next, id) {
  Global.obtinfotime(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
