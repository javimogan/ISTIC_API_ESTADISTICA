'use strict';


/**
 * obtiene el número de caídas de un usuario en el último mes.
 * obtiene el número de caídas de un usuario en el último mes.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.getFalls = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene la velocidad media de un usuario en el último mes.
 * obtiene la velocidad media de un usuario en el último mes.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfoavgspeed = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene el número de kilómetros recorridos por un usuario en el último mes.
 * obtiene el número de kilómetros recorridos por un usuario en el último mes.
 *
 * id Integer id del dispositivo
 * returns Integer
 **/
exports.obtinfokms = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene las ubicaciones frecuentes de un usuario.
 * obtiene las ubicaciones frecuentes de un usuario.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfolocations = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene la velocidad máxima de un usuario en el último mes.
 * obtiene la velocidad máxima de un usuario en el último mes.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfomaxspeed = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene la puntuación de un usuario. Métrica obtenida en función del número de kilómetros recorridos y los accidentes involucrados en un mes.
 * obtiene la puntuación de un usuario. Métrica obtenida en función del número de kilómetros recorridos y los accidentes involucrados en un mes.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfoscore = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * número de llamadas a emergencias en el último mes causadas por la caída de un usuario.
 * número de llamadas a emergencias en el último mes causadas por la caída de un usuario.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfosos = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * obtiene las horas de uso por un usuario en el último mes.
 * obtiene las horas de uso por un usuario en el último mes.
 *
 * id Integer id del usuario
 * returns Integer
 **/
exports.obtinfotime = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 2;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

